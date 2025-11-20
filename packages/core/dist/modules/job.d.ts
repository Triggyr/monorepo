import type { TriggyrCoreApiRequest, TriggyrGetJob, TriggyrJob } from '../types';
import type Http from '@triggyr/http';
export default class Job {
    private http;
    constructor(http: Http);
    getJob: (payload: TriggyrCoreApiRequest<TriggyrGetJob>) => Promise<TriggyrJob>;
    cancelJob: (payload: TriggyrCoreApiRequest<TriggyrGetJob>) => Promise<void>;
}
