import type Http from '@triggyr/http';
import type { TriggyrWalletApiRequest, TriggyrWalletTokenPayload, TriggyrWalletTokenInformation, TriggyrWalletTokenPrice, TriggyrWalletTokenShield, TriggyrWalletTokenBalanceOf } from '../types';
export default class Token {
    private http;
    constructor(http: Http);
    information: (payload: TriggyrWalletApiRequest<TriggyrWalletTokenPayload>) => Promise<TriggyrWalletTokenInformation | null>;
    price: (payload: TriggyrWalletApiRequest<TriggyrWalletTokenPayload>) => Promise<TriggyrWalletTokenPrice | null>;
    shield: (payload: TriggyrWalletApiRequest<TriggyrWalletTokenPayload>) => Promise<TriggyrWalletTokenShield | null>;
    balanceOf: (payload: TriggyrWalletApiRequest<TriggyrWalletTokenPayload & {
        address: string;
    }>) => Promise<TriggyrWalletTokenBalanceOf | null>;
}
