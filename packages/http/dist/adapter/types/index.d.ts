import type { AxiosError, AxiosResponse, AxiosRequestHeaders, AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';
export interface HttpOptions {
    baseHeaders?: AxiosRequestHeaders;
    interceptors?: {
        onSuccess?: <T>(response: AxiosResponse) => HttpResponse<T>;
        onError?: <T>(error: AxiosError) => HttpResponse<T>;
    };
}
export interface HttpResponse<T> {
    isOk: boolean;
    data: T | null;
    headers?: RawAxiosResponseHeaders | AxiosResponseHeaders;
    statusCode?: number;
}
