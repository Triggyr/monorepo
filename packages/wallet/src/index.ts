import TriggyrWalletError from './error.factory';
import Http from '@triggyr/http';
import _ from 'lodash';
import Nft from './modules/nft';
import Address from './modules/address';
import Wallet from './modules/wallet';
import TwoFa from './modules/twoFa';
import Swap from './modules/swap';
import Token from './modules/token';
import type {
   TriggyrWalletApiRequest,
   TriggyrWalletBlockchains,
   TriggyrWalletHealthz,
   TriggyrWalletOptions,
} from './types';

export default class TriggyrWallet {
   public http: Http;
   public address: Address;
   public nft: Nft;
   public swap: Swap;
   public token: Token;
   public twoFa: TwoFa;
   public wallet: Wallet;

   constructor(options: TriggyrWalletOptions) {
      this.http = new Http(options.apiUrl, {
         logger: options.logger,
         baseHeaders: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...options.baseHeaders,
         },
         interceptors: {
            onError(error) {
               const response = error.response;
               if (response && response.data) {
                  let message = (response.data as any).message as string;
                  if (
                     message.startsWith('params.') ||
                     message.startsWith('body.') ||
                     message.startsWith('query.')
                  ) {
                     const split = message.split(': ');
                     _.remove(split, (v, idx) => idx === 0);
                     //
                     message = split.join(': ');
                  }

                  throw new TriggyrWalletError(
                     message,
                     response.status,
                     (response.data as any).error.code,
                  );
               }

               throw new TriggyrWalletError(error.message, 500, 'UNKNWON');
            },
         },
      });

      this.address = new Address(this.http);
      this.nft = new Nft(this.http);
      this.swap = new Swap(this.http);
      this.token = new Token(this.http);
      this.twoFa = new TwoFa(this.http);
      this.wallet = new Wallet(this.http);
   }

   healthcheck = async (payload?: TriggyrWalletApiRequest): Promise<TriggyrWalletHealthz> => {
      const response = await this.http.instance.get('/healthz', {
         headers: payload?.headers,
      });

      return response.data.data;
   };

   blockchains = async (payload?: TriggyrWalletApiRequest): Promise<TriggyrWalletBlockchains> => {
      const response = await this.http.instance.get('/supported-blockchains', {
         headers: payload?.headers,
      });

      return response.data.data;
   };
}
