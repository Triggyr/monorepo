import type Http from '@triggyr/http';
import _ from 'lodash';
import type {
   TriggyrWalletApiRequest,
   TriggyrWalletSwapTokensResponse,
   TriggyrWalletSwapTokens,
   TriggyrWalletSwapSearchResponse,
   TriggyrWalletSwapSearch,
   TriggyrWalletSwapQuoteResponse,
   TriggyrWalletSwapPayload,
   TriggyrWalletSwapExecuteResponse,
} from '../types';

export default class Swap {
   constructor(private http: Http) {}

   quote = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletSwapPayload>,
   ): Promise<TriggyrWalletSwapQuoteResponse> => {
      const response = await this.http.instance.post(
         `/swap/${payload.blockchain}/quote`,
         _.pick(payload, [
            'blockchain',
            'amount',
            'input_token',
            'output_token',
            'recipient',
            'slippage',
         ]),
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   execute = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletSwapPayload>,
   ): Promise<TriggyrWalletSwapExecuteResponse> => {
      const response = await this.http.instance.post(
         `/swap/${payload.blockchain}/execute`,
         _.pick(payload, [
            'blockchain',
            'amount',
            'input_token',
            'output_token',
            'recipient',
            'slippage',
         ]),
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   tokens = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletSwapTokens>,
   ): Promise<TriggyrWalletSwapTokensResponse> => {
      const response = await this.http.instance.get(`/swap/${payload.blockchain}/tokens`, {
         headers: payload?.headers,
      });

      return response.data.data;
   };

   searchByAddress = async (
      payload: TriggyrWalletApiRequest<TriggyrWalletSwapSearch>,
   ): Promise<TriggyrWalletSwapSearchResponse | null> => {
      const response = await this.http.instance.get(
         `/swap/${payload.blockchain}/token/search?address=${payload.address}`,
         { headers: payload?.headers },
      );

      return response.data.data;
   };
}
