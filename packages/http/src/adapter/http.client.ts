/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { HttpResponse } from './types';
import axios, {
   type AxiosError,
   type AxiosInstance,
   type AxiosRequestConfig,
   type AxiosResponse,
} from 'axios';

declare module 'axios' {
   interface AxiosResponse<T> extends Promise<HttpResponse<T>> {}
}

export default abstract class HttpClient {
   public readonly instance: AxiosInstance;
   public readonly instanceWithoutAuth: AxiosInstance;

   constructor(option: AxiosRequestConfig) {
      this.instance = axios.create(option);
      this.instanceWithoutAuth = axios.create({ baseURL: option.baseURL });
      this._initializeResponseInterceptor();
   }

   private _initializeResponseInterceptor = () => {
      this.instance.interceptors.response.use(this._handleResponse, this._handleError);
      this.instanceWithoutAuth.interceptors.response.use(this._handleResponse, this._handleError);
   };

   protected abstract _handleResponse<T>(response: AxiosResponse<T>): any;
   protected abstract _handleError<T>(error: AxiosError<T>): any;
}
