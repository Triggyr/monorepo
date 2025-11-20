import TriggyrError from './error.factory';
import Http from '@triggyr/http';
import _ from 'lodash';
import Component from './modules/component';
import Workflow from './modules/workflow';
import Auth from './modules/auth';
import Job from './modules/job';
import type { TriggyrCoreApiRequest, TriggyrCoreHealthz, TriggyrCoreOptions } from './types';

export default class TriggyrCore {
   public http: Http;
   public component: Component;
   public workflow: Workflow;
   public auth: Auth;
   public job: Job;

   constructor(options: TriggyrCoreOptions) {
      this.http = new Http(options.apiUrl, {
         logger: options.logger,
         baseHeaders: {
            withCredentials: true,
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...options.baseHeaders,
         },
         interceptors: {
            onError(error) {
               const response = error.response;
               if (response && response.data) {
                  let message = (response.data as any).message as string;
                  if (
                     message.startsWith('params.') ||
                     message.startsWith('body.') ||
                     message.startsWith('query.')
                  ) {
                     const split = message.split(': ');
                     _.remove(split, (v, idx) => idx === 0);
                     //
                     message = split.join(': ');
                  }

                  throw new TriggyrError(
                     message,
                     response.status,
                     (response.data as any).error.code,
                  );
               }

               throw new TriggyrError(error.message, 500, 'UNKNWON');
            },
         },
      });

      this.component = new Component(this.http);
      this.workflow = new Workflow(this.http);
      this.auth = new Auth(this.http);
      this.job = new Job(this.http);
   }

   healthcheck = async (payload?: TriggyrCoreApiRequest): Promise<TriggyrCoreHealthz> => {
      const response = await this.http.instance.get('/healthz', {
         headers: payload?.headers,
      });

      return response.data.data;
   };
}
