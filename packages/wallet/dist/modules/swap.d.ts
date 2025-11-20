import type Http from '@triggyr/http';
import type { TriggyrWalletApiRequest, TriggyrWalletSwapTokensResponse, TriggyrWalletSwapTokens, TriggyrWalletSwapSearchResponse, TriggyrWalletSwapSearch, TriggyrWalletSwapQuoteResponse, TriggyrWalletSwapPayload, TriggyrTransactionResponse } from '../types';
export default class Swap {
    private http;
    constructor(http: Http);
    quote: (payload: TriggyrWalletApiRequest<TriggyrWalletSwapPayload>) => Promise<TriggyrWalletSwapQuoteResponse>;
    execute: (payload: TriggyrWalletApiRequest<TriggyrWalletSwapPayload>) => Promise<TriggyrTransactionResponse>;
    tokens: (payload: TriggyrWalletApiRequest<TriggyrWalletSwapTokens>) => Promise<TriggyrWalletSwapTokensResponse>;
    searchByAddress: (payload: TriggyrWalletApiRequest<TriggyrWalletSwapSearch>) => Promise<TriggyrWalletSwapSearchResponse | null>;
}
