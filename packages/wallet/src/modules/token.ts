import type Http from '@triggyr/http';
import type {
   TriggyrWalletApiRequest,
   TriggyrWalletTokenPayload,
   TriggyrWalletTokenInformation,
   TriggyrWalletTokenPrice,
   TriggyrWalletTokenShield,
   TriggyrWalletTokenBalanceOf,
} from '../types';

export default class Token {
   constructor(private http: Http) {}

   information = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletTokenPayload>,
   ): Promise<TriggyrWalletTokenInformation | null> => {
      const response = await this.http.instance.get(
         `/token/${payload.blockchain}/${payload.contract}`,
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   price = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletTokenPayload>,
   ): Promise<TriggyrWalletTokenPrice | null> => {
      const response = await this.http.instance.get(
         `/token/${payload.blockchain}/${payload.contract}/price`,
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   shield = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletTokenPayload>,
   ): Promise<TriggyrWalletTokenShield | null> => {
      const response = await this.http.instance.get(
         `/token/${payload.blockchain}/${payload.contract}/shield`,
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   balanceOf = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletTokenPayload & { address: string }>,
   ): Promise<TriggyrWalletTokenBalanceOf | null> => {
      const response = await this.http.instance.get(
         `/token/${payload.blockchain}/${payload.contract}/balanceOf/${payload.address}`,
         { headers: payload?.headers },
      );

      return response.data.data;
   };
}
