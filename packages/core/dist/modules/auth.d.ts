import type Http from '@triggyr/http';
import type { TriggyrAuthTokens, TriggyrCoreApiRequest, TriggyrMagicLink, TriggyrVerifyMagicLink, TriggyrWhoamiResponse } from '../types';
export default class Auth {
    private http;
    constructor(http: Http);
    magicLink: (payload: TriggyrCoreApiRequest<TriggyrMagicLink>) => Promise<{
        link: string;
    } | undefined>;
    verifyMagicLink: (payload: TriggyrCoreApiRequest<TriggyrVerifyMagicLink>) => Promise<{
        redirect_to?: string;
        tokens: TriggyrAuthTokens;
    }>;
    logout: (payload: TriggyrCoreApiRequest) => Promise<void>;
    refreshToken: (payload: TriggyrCoreApiRequest) => Promise<TriggyrAuthTokens>;
    whoami: (payload: TriggyrCoreApiRequest) => Promise<TriggyrWhoamiResponse>;
}
