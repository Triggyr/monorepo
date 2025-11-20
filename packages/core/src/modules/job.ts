import type { TriggyrCoreApiRequest, TriggyrGetJob, TriggyrJob } from '../types';
import type Http from '@triggyr/http';
import _ from 'lodash';

export default class Job {
   constructor(private http: Http) {}

   getJob = async (payload: TriggyrCoreApiRequest<TriggyrGetJob>): Promise<TriggyrJob> => {
      const response = await this.http.instance.get(`/job/${payload.id}`, {
         headers: payload?.headers,
      });

      return response.data.data;
   };

   cancelJob = async (payload: TriggyrCoreApiRequest<TriggyrGetJob>): Promise<void> => {
      await this.http.instance.delete(`/job/${payload.id}/cancel`, {
         headers: payload?.headers,
      });
   };
}
