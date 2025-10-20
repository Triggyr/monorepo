import type { AxiosError, AxiosResponse } from 'axios';

type Header = Record<string, string>;

export interface HttpOptions {
   baseHeaders?: Header;
   interceptors?: {
      onSuccess?: <T>(response: AxiosResponse) => HttpResponse<T>;
      onError?: <T>(error: AxiosError) => HttpResponse<T>;
   };
}

export interface HttpResponse<T> {
   isOk: boolean;
   data: T | null;
   headers?: Header;
   statusCode?: number;
}
