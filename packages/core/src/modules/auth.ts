import type Http from '@triggyr/http';
import _ from 'lodash';
import type {
   TriggyrAuthTokens,
   TriggyrCoreApiRequest,
   TriggyrMagicLink,
   TriggyrVerifyMagicLink,
   TriggyrWhoamiResponse,
} from '../types';

export default class Auth {
   constructor(private http: Http) {}

   magicLink = async (
      payload: TriggyrCoreApiRequest<TriggyrMagicLink>,
   ): Promise<{ link: string } | undefined> => {
      const response = await this.http.instance.post(
         '/auth',
         _.pick(payload, ['email', 'redirect_to']),
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   verifyMagicLink = async (
      payload: TriggyrCoreApiRequest<TriggyrVerifyMagicLink>,
   ): Promise<{ redirect_to?: string; tokens: TriggyrAuthTokens }> => {
      const response = await this.http.instance.post('/auth/verify', _.pick(payload, ['token']), {
         headers: payload?.headers,
      });

      return response.data.data;
   };

   logout = async (payload: TriggyrCoreApiRequest): Promise<void> => {
      await this.http.instance.delete('/auth/logout', {
         headers: payload?.headers,
      });
   };

   refreshToken = async (payload: TriggyrCoreApiRequest): Promise<TriggyrAuthTokens> => {
      const response = await this.http.instance.post('/auth/refresh/token', undefined, {
         headers: payload?.headers,
      });

      return response.data.data;
   };

   whoami = async (payload: TriggyrCoreApiRequest): Promise<TriggyrWhoamiResponse> => {
      const response = await this.http.instance.get('/auth/whoami', {
         headers: payload?.headers,
      });

      return response.data.data;
   };
}
