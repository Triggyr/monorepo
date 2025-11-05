import type Http from '@triggyr/http';
import type { TriggyrWalletAddressNftsResponse, TriggyrWalletAddressPayload, TriggyrWalletAddressSwapsResponse, TriggyrWalletAddressTokensResponse, TriggyrWalletAddressTransactionsResponse, TriggyrWalletApiRequest } from '../types';
export default class Address {
    private http;
    constructor(http: Http);
    tokens: (payload: TriggyrWalletApiRequest<TriggyrWalletAddressPayload>) => Promise<TriggyrWalletAddressTokensResponse>;
    nfts: (payload: TriggyrWalletApiRequest<TriggyrWalletAddressPayload>) => Promise<TriggyrWalletAddressNftsResponse>;
    transactions: (payload: TriggyrWalletApiRequest<TriggyrWalletAddressPayload>) => Promise<TriggyrWalletAddressTransactionsResponse>;
    swaps: (payload: TriggyrWalletApiRequest<TriggyrWalletAddressPayload & {
        token_address?: string;
    }>) => Promise<TriggyrWalletAddressSwapsResponse>;
}
