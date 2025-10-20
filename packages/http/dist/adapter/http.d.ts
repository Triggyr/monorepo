import type { AxiosError, AxiosResponse } from 'axios';
import type { HttpOptions, HttpResponse } from './types';
import HttpClient from './http.client';
export default class Http extends HttpClient {
    private interceptors?;
    constructor(baseURL: string, options?: HttpOptions);
    protected _handleResponse<T>(response: AxiosResponse<T>): HttpResponse<T>;
    protected _handleError<T>(error: AxiosError<T>): HttpResponse<T>;
}
