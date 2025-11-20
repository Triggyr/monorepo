import type Http from '@triggyr/http';
import _ from 'lodash';
import type {
   TriggyrCoreApiRequest,
   TriggyrReloadComponent,
   TriggyrValidateComponentInput,
} from '../types';

export default class Component {
   constructor(private http: Http) {}

   validateInput = async (
      payload: TriggyrCoreApiRequest<TriggyrValidateComponentInput>,
   ): Promise<Record<string, string | number | null | Record<'key', string>>> => {
      const response = await this.http.instance.post(
         `/component/${payload.id}/validate`,
         _.pick(payload, ['input']),
         { headers: payload?.headers },
      );

      return response.data.data;
   };

   reloadComponent = async (
      payload: TriggyrCoreApiRequest<TriggyrReloadComponent>,
   ): Promise<void> => {
      await this.http.instance.post(`/component/${payload.id}/reload`, undefined, {
         headers: payload?.headers,
      });
   };

   reload = async (payload: TriggyrCoreApiRequest): Promise<void> => {
      await this.http.instance.post('/component/reload', undefined, {
         headers: payload?.headers,
      });
   };
}
