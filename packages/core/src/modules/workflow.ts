import type Http from '@triggyr/http';
import _ from 'lodash';
import type {
   TriggyrCoreApiRequest,
   TriggyrCreateWorkflow,
   TriggyrUpsertWorkflowTrigger,
   TriggyrWorkflowTrigger,
} from '../types';

export default class Workflow {
   constructor(private http: Http) {}

   createWorkflow = async (
      payload?: TriggyrCoreApiRequest<TriggyrCreateWorkflow>,
   ): Promise<{ workflow_id: string }> => {
      const response = await this.http.instance.post(
         '/workflow',
         payload ? _.pick(payload, ['name', 'description']) : undefined,
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   upsertTrigger = async (
      payload: TriggyrCoreApiRequest<TriggyrUpsertWorkflowTrigger>,
   ): Promise<void> => {
      await this.http.instance.patch(
         `/workflow/${payload.id}`,
         _.pick(payload, ['component_id', 'input', 'label', 'description']),
         { headers: payload?.headers },
      );
   };

   trigger = async (
      payload: TriggyrCoreApiRequest<TriggyrWorkflowTrigger>,
   ): Promise<{ job_id: string }> => {
      const response = await this.http.instance.post(
         `/workflow/${payload.id}?simulate=${payload.simulate}`,
         _.pick(payload, ['body']),
         { headers: payload?.headers },
      );

      return response.data.data;
   };
}
