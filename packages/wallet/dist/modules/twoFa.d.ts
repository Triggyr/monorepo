import type { TriggyrWallet2FaInit, TriggyrWalletApiRequest } from '../types';
import type Http from '@triggyr/http';
export default class TwoFa {
    private http;
    constructor(http: Http);
    setup: (payload?: TriggyrWalletApiRequest) => Promise<TriggyrWallet2FaInit>;
    verify: (payload: TriggyrWalletApiRequest<{
        token: string;
    }>) => Promise<void>;
}
