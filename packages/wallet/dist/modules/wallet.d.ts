import type Http from '@triggyr/http';
import type { TriggyrWalletApiRequest, TriggyrWalletCreateWalletAccount, TriggyrWalletExport, TriggyrWalletExportResponse, TriggyrWalletList, TriggyrWalletSettings, TriggyrWalletSignRawPayloads, TriggyrWalletSignRawPayloadsResponse, TriggyrWalletSignTransaction, TriggyrWalletSignTransactionResponse } from '../types';
export default class Wallet {
    private http;
    constructor(http: Http);
    get: (payload?: TriggyrWalletApiRequest) => Promise<TriggyrWalletList>;
    create: (payload?: TriggyrWalletApiRequest) => Promise<void>;
    createAccount: (payload?: TriggyrWalletApiRequest<TriggyrWalletCreateWalletAccount>) => Promise<void>;
    signTransaction: (payload: TriggyrWalletApiRequest<TriggyrWalletSignTransaction>) => Promise<TriggyrWalletSignTransactionResponse>;
    signRawPayloads: (payload: TriggyrWalletApiRequest<TriggyrWalletSignRawPayloads>) => Promise<TriggyrWalletSignRawPayloadsResponse>;
    generateKeyPair: () => {
        privateKey: string;
        publicKey: string;
        /**
         *
         * @note pass this to the `export` method
         */
        publicKeyUncompressed: string;
    };
    export: (payload: TriggyrWalletApiRequest<TriggyrWalletExport>) => Promise<TriggyrWalletExportResponse>;
    decryptMnemonic: (payload: TriggyrWalletExportResponse & {
        private_key: string;
    }) => Promise<string>;
    settings: (payload: TriggyrWalletApiRequest<TriggyrWalletSettings>) => Promise<TriggyrWalletSettings>;
}
