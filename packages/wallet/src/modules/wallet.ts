import { decryptExportBundle, generateP256KeyPair } from '@turnkey/crypto';
import type Http from '@triggyr/http';
import _ from 'lodash';
import type {
   TriggyrWalletApiRequest,
   TriggyrWalletCreateWalletAccount,
   TriggyrWalletExport,
   TriggyrWalletExportResponse,
   TriggyrWalletList,
   TriggyrWalletSettings,
   TriggyrWalletSignRawPayloads,
   TriggyrWalletSignRawPayloadsResponse,
   TriggyrWalletSignTransaction,
   TriggyrWalletSignTransactionResponse,
} from '../types';

export default class Wallet {
   constructor(private http: Http) {}

   get = async (payload?: TriggyrWalletApiRequest): Promise<TriggyrWalletList> => {
      const response = await this.http.instance.get('/wallet', {
         headers: payload?.headers,
      });

      return response.data.data;
   };

   create = async (payload?: TriggyrWalletApiRequest): Promise<void> => {
      await this.http.instance.post('/wallet', undefined, {
         headers: payload?.headers,
      });
   };

   createAccount = async (
      payload?: TriggyrWalletApiRequest<TriggyrWalletCreateWalletAccount>,
   ): Promise<void> => {
      await this.http.instance.post('/wallet/account', undefined, {
         headers: payload?.headers,
      });
   };

   signTransaction = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletSignTransaction>,
   ): Promise<TriggyrWalletSignTransactionResponse> => {
      const response = await this.http.instance.post(
         '/wallet/sign/transaction',
         _.pick(payload, ['blockchain', 'type', 'token', 'unsignedTransaction']),
         { headers: payload.headers },
      );

      return response.data.data;
   };

   signRawPayloads = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletSignRawPayloads>,
   ): Promise<TriggyrWalletSignRawPayloadsResponse> => {
      const response = await this.http.instance.post(
         '/wallet/sign/payloads',
         _.pick(payload, ['blockchain', 'payloads', 'token', 'encoding', 'hashFunction']),
         { headers: payload.headers },
      );

      return response.data.data;
   };

   generateKeyPair = () => {
      const keypair = generateP256KeyPair();
      return {
         privateKey: keypair.privateKey,
         publicKey: keypair.publicKey,
         /**
          *
          * @note pass this to the `export` method
          */
         publicKeyUncompressed: keypair.publicKeyUncompressed,
      };
   };

   export = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletExport>,
   ): Promise<TriggyrWalletExportResponse> => {
      const response = await this.http.instance.post(
         '/wallet/export',
         _.pick(payload, ['targetPublicKey', 'token']),
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   decryptMnemonic = async (payload: TriggyrWalletExportResponse & { private_key: string }) => {
      const decrypted = await decryptExportBundle({
         embeddedKey: payload.private_key,
         exportBundle: payload.export_bundle,
         organizationId: payload.organization_id,
         returnMnemonic: true,
      });

      return decrypted;
   };

   settings = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletSettings>,
   ): Promise<TriggyrWalletSettings> => {
      const response = await this.http.instance.post(
         '/wallet/settings',
         _.omit(payload, ['enable2FA']),
         { headers: payload?.headers },
      );

      return response.data.data;
   };
}
