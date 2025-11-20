import type Http from '@triggyr/http';
import type { TriggyrCoreApiRequest, TriggyrCreateWorkflow, TriggyrUpsertWorkflowTrigger, TriggyrWorkflowTrigger } from '../types';
export default class Workflow {
    private http;
    constructor(http: Http);
    createWorkflow: (payload?: TriggyrCoreApiRequest<TriggyrCreateWorkflow>) => Promise<{
        workflow_id: string;
    }>;
    upsertTrigger: (payload: TriggyrCoreApiRequest<TriggyrUpsertWorkflowTrigger>) => Promise<void>;
    trigger: (payload: TriggyrCoreApiRequest<TriggyrWorkflowTrigger>) => Promise<{
        job_id: string;
    }>;
}
