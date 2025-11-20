import Http from '@triggyr/http';
import Component from './modules/component';
import Workflow from './modules/workflow';
import Auth from './modules/auth';
import Job from './modules/job';
import type { TriggyrCoreApiRequest, TriggyrCoreHealthz, TriggyrCoreOptions } from './types';
export default class TriggyrCore {
    http: Http;
    component: Component;
    workflow: Workflow;
    auth: Auth;
    job: Job;
    constructor(options: TriggyrCoreOptions);
    healthcheck: (payload?: TriggyrCoreApiRequest) => Promise<TriggyrCoreHealthz>;
}
