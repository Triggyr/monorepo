import type { TriggyrWallet2FaInit, TriggyrWalletApiRequest } from '../types';
import type Http from '@triggyr/http';
import _ from 'lodash';

export default class TwoFa {
   constructor(private http: Http) {}

   setup = async (payload?: TriggyrWalletApiRequest): Promise<TriggyrWallet2FaInit> => {
      const response = await this.http.instance.post('/2fa/init', undefined, {
         headers: payload?.headers,
      });

      return response.data.data;
   };

   verify = async (payload: TriggyrWalletApiRequest<{ token: string }>): Promise<void> => {
      await this.http.instance.post('/2fa/verify', _.pick(payload, ['token']), {
         headers: payload.headers,
      });
   };
}
