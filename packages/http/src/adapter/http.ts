import type { AxiosError, AxiosResponse } from 'axios';
import type { HttpOptions, HttpResponse } from './types';
import HttpClient from './http.client';

export default class Http extends HttpClient {
   public interceptors?: HttpOptions['interceptors'];

   constructor(baseURL: string, options?: HttpOptions) {
      super({
         baseURL,
         headers: options?.baseHeaders
            ? options.baseHeaders
            : { 'Content-Type': 'application/json', Accept: 'application/json' },
      });

      this.interceptors = options?.interceptors;
   }

   protected _handleResponse<T>(response: AxiosResponse<T>): HttpResponse<T> {
      if (this.interceptors?.onSuccess) {
         return this.interceptors.onSuccess(response);
      }

      return {
         isOk: true,
         data: response.data ?? null,
         headers: response.headers,
         statusCode: response.status,
      };
   }

   protected _handleError<T>(error: AxiosError<T>): HttpResponse<T> {
      if (this.interceptors?.onError) {
         return this.interceptors.onError(error);
      }

      return {
         isOk: false,
         data: error.response?.data ?? null,
         headers: error.response?.headers,
         statusCode: error.response?.status,
      };
   }
}
