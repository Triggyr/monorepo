import type { HttpResponse } from './types';
import { type AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
declare module 'axios' {
    interface AxiosResponse<T> extends Promise<HttpResponse<T>> {
    }
}
export default abstract class HttpClient {
    readonly instance: AxiosInstance;
    readonly instanceWithoutAuth: AxiosInstance;
    constructor(option: AxiosRequestConfig);
    private _initializeResponseInterceptor;
    protected abstract _handleResponse<T>(response: AxiosResponse<T>): any;
    protected abstract _handleError<T>(error: AxiosError<T>): any;
}
