import type Http from '@triggyr/http';
import type { TriggyrWalletApiRequest, TriggyrWalletNftPayload, TriggyrWalletNftCollection, TriggyrWalletNftItem } from '../types';
export default class Nft {
    private http;
    constructor(http: Http);
    collection: (payload: TriggyrWalletApiRequest<TriggyrWalletNftPayload>) => Promise<TriggyrWalletNftCollection | null>;
    item: (payload: TriggyrWalletApiRequest<TriggyrWalletNftPayload & {
        token_identifier: string;
    }>) => Promise<TriggyrWalletNftItem | null>;
}
