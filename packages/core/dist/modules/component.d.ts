import type Http from '@triggyr/http';
import type { TriggyrCoreApiRequest, TriggyrReloadComponent, TriggyrValidateComponentInput } from '../types';
export default class Component {
    private http;
    constructor(http: Http);
    validateInput: (payload: TriggyrCoreApiRequest<TriggyrValidateComponentInput>) => Promise<Record<string, string | number | null | Record<"key", string>>>;
    reloadComponent: (payload: TriggyrCoreApiRequest<TriggyrReloadComponent>) => Promise<void>;
    reload: (payload: TriggyrCoreApiRequest) => Promise<void>;
}
