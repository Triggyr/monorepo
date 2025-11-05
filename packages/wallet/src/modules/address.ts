import type Http from '@triggyr/http';
import { toQueryString } from '../helpers';
import _ from 'lodash';
import type {
   TriggyrWalletAddressNftsResponse,
   TriggyrWalletAddressPayload,
   TriggyrWalletAddressSwapsResponse,
   TriggyrWalletAddressTokensResponse,
   TriggyrWalletAddressTransactionsResponse,
   TriggyrWalletApiRequest,
} from '../types';

export default class Address {
   constructor(private http: Http) {}

   tokens = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletAddressPayload>,
   ): Promise<TriggyrWalletAddressTokensResponse> => {
      const query = toQueryString(_.pick(payload, ['cursor', 'limit']));
      const response = await this.http.instance.get(
         `/address/${payload.blockchain}/${payload.address}/tokens?${query}`,
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   nfts = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletAddressPayload>,
   ): Promise<TriggyrWalletAddressNftsResponse> => {
      const query = toQueryString(_.pick(payload, ['cursor', 'limit']));
      const response = await this.http.instance.get(
         `/address/${payload.blockchain}/${payload.address}/nfts?${query}`,
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   transactions = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletAddressPayload>,
   ): Promise<TriggyrWalletAddressTransactionsResponse> => {
      const query = toQueryString(_.pick(payload, ['cursor', 'limit']));
      const response = await this.http.instance.get(
         `/address/${payload.blockchain}/${payload.address}/transactions?${query}`,
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   swaps = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletAddressPayload & { token_address?: string }>,
   ): Promise<TriggyrWalletAddressSwapsResponse> => {
      const query = toQueryString(_.pick(payload, ['cursor', 'limit']));
      const response = await this.http.instance.get(
         `/address/${payload.blockchain}/${payload.address}/swaps?${query}`,
         { headers: payload?.headers },
      );

      return response.data.data;
   };
}
