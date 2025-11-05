import axios, { type AxiosError, type AxiosResponse } from 'axios';

interface RawAxiosHeaders {
   [key: string]: axios.AxiosHeaderValue;
}

export interface HttpOptions {
   baseHeaders?: RawAxiosHeaders;
   logger?: (_: any) => void;
   interceptors?: {
      onSuccess?: <T>(response: AxiosResponse) => HttpResponse<T>;
      onError?: <T>(error: AxiosError) => HttpResponse<T>;
   };
}

export interface HttpResponse<T> {
   isOk: boolean;
   data: T | null;
   headers?: RawAxiosHeaders;
   statusCode?: number;
}
