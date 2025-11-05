import type Http from '@triggyr/http';
import _ from 'lodash';
import type {
   TriggyrWalletApiRequest,
   TriggyrWalletNftPayload,
   TriggyrWalletNftCollection,
   TriggyrWalletNftItem,
} from '../types';

export default class Nft {
   constructor(private http: Http) {}

   collection = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletNftPayload>,
   ): Promise<TriggyrWalletNftCollection | null> => {
      const response = await this.http.instance.get(
         `/nft/${payload.blockchain}/${payload.contract}`,
         { headers: payload?.headers },
      );

      return response.data.data ?? null;
   };

   item = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletNftPayload & { token_identifier: string }>,
   ): Promise<TriggyrWalletNftItem | null> => {
      const response = await this.http.instance.get(
         `/nft/${payload.blockchain}/${payload.contract}/${payload.token_identifier}`,
         { headers: payload?.headers },
      );

      return response.data.data ?? null;
   };
}
