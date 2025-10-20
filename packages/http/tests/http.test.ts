import { describe, it, expect, vi, beforeEach } from 'vitest';
import Http from '../src/adapter/http';
import axios from 'axios';

vi.mock('axios');

describe('Http', () => {
   let http: Http;
   let mockAxiosInstance: any;

   beforeEach(() => {
      vi.restoreAllMocks();
      mockAxiosInstance = {
         interceptors: {
            response: {
               use: vi.fn(),
            },
         },
         get: vi.fn(),
         post: vi.fn(),
      };

      (axios.create as any).mockReturnValue(mockAxiosInstance);

      http = new Http('https://api.test.com');
   });

   it('should create an axios instance with default headers', () => {
      expect(axios.create).toHaveBeenCalledWith({
         baseURL: 'https://api.test.com',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
      });
   });

   it('should handle successful response', async () => {
      const response = {
         data: {
            user: 'bob',
         },
         status: 200,
         headers: {},
      };

      const result = (http as any)._handleResponse(response);
      expect(result.isOk).toBe(true);
      expect(result.data).toEqual({ user: 'bob' });
   });

   it('should handle error response', async () => {
      const error = {
         response: {
            data: {
               message: 'Not found',
            },
            status: 404,
            headers: {},
         },
      };

      const result = (http as any)._handleError(error);
      expect(result.isOk).toBe(false);
      expect(result.data).toEqual({ message: 'Not found' });
      expect(result.statusCode).toBe(404);
   });

   it('should allow custom interceptors', () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();

      const customHttp = new Http('https://api.test.com', {
         interceptors: {
            onSuccess,
            onError,
         },
      });

      const resp = {
         data: {
            a: 1,
         },
         status: 200,
         headers: {},
      };

      (customHttp as any)._handleResponse(resp);
      expect(onSuccess).toHaveBeenCalledWith(resp);
   });
});
