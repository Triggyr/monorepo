import type axios from 'axios';

type ArrayOf<T> = T[];

type Headers = {
   'x-api-secret'?: string;
   Authorization?: `Bearer ${string}`;
   'x-refresh'?: string;
   [key: string]: axios.AxiosHeaderValue | undefined;
};

export type TriggyrCoreOptions = {
   apiUrl: string;
   logger?: (v: any) => void;
   baseHeaders?: Headers;
};

type TriggyrCoreBaseApiRequest = {
   headers?: Headers;
};

export type TriggyrCoreApiRequest<T = undefined> = T extends undefined
   ? TriggyrCoreBaseApiRequest
   : T & TriggyrCoreBaseApiRequest;

export type TriggyrCoreHealthz = {
   environment: 'production' | 'development';
};

export type TriggyrMagicLink = {
   email: string;
   redirect_to?: string;
};

export type TriggyrVerifyMagicLink = {
   token: string;
};

export type TriggyrAuthTokens = {
   access_token: string;
   refresh_token: string;
};

export type TriggyrWhoamiResponse = {
   id: string;
   name?: string;
   email: string;
   version: string;
};

export type TriggyrValidateComponentInput = {
   id: string;
   input: Record<string, string | number | null | Record<'key', string>>;
};

export type TriggyrReloadComponent = {
   id: string;
};

export type TriggyrGetJob = {
   id: string;
};

export type TriggyrJob = {
   state:
      | 'completed'
      | 'failed'
      | 'delayed'
      | 'active'
      | 'waiting'
      | 'waiting-children'
      | 'unknown';
   attemptsMade: number;
   attemptsStarted: number;
   data: Record<string, any>;
   deduplicationId?: string;
   deferredFailure: string;
   delay: number;
   failedReason: string;
   finishedOn?: number;
   id: string;
   name: string;
   nextRepeatableJobId?: string;
   opts: Record<string, any>;
   priority: number;
   processedBy?: string;
   processedOn?: number;
   progress: number;
   queueQualifiedName: string;
   returnvalue: null | any;
   stacktrace: string[];
   stalledCounter: number;
   timestamp: number;
   token?: string;
   [k: string]: any;
};

export type TriggyrCreateWorkflow = {
   name?: string;
   description?: string;
};

export type TriggyrUpsertWorkflowTrigger = {
   id: string;
   component_id: string;
   input: Record<string, string | number | null | Record<'key', string>>;
   label?: string;
   description?: string;
};

export type TriggyrWorkflowTrigger = {
   id: string;
   simulate: 'yes' | 'no';
   body?: Record<string, any>;
};
