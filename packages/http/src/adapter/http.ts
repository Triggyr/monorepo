/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosHeaders, type AxiosError, type AxiosResponse } from 'axios';
import type { HttpOptions, HttpResponse } from './types';
import HttpClient from './http.client';

export default class Http extends HttpClient {
   private interceptors?: HttpOptions['interceptors'];
   private logger?: HttpOptions['logger'];

   constructor(baseURL: string, options?: HttpOptions) {
      super({
         baseURL,
         headers: options?.baseHeaders
            ? options.baseHeaders
            : { 'Content-Type': 'application/json', Accept: 'application/json' },
      });

      this.interceptors = options?.interceptors;
      this.logger = options?.logger;
   }

   protected _handleResponse<T>(response: AxiosResponse<T>): HttpResponse<T> {
      if (this.logger) this.logger(response.data);
      if (this.interceptors?.onSuccess) return this.interceptors.onSuccess(response);

      return {
         isOk: true,
         data: response.data ?? null,
         headers: new AxiosHeaders(response.headers as any)?.toJSON(),
         statusCode: response.status,
      };
   }

   protected _handleError<T>(error: AxiosError<T>): HttpResponse<T> {
      if (this.logger) this.logger(error.response?.data);
      if (this.interceptors?.onError) return this.interceptors.onError(error);

      return {
         isOk: false,
         data: error.response?.data ?? null,
         headers: new AxiosHeaders(error.response?.headers as any).toJSON(),
         statusCode: error.response?.status,
      };
   }
}
