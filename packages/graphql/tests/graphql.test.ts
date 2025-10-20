import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import Graphql from '../src';

vi.mock('axios');

describe('Graphql', () => {
   let graphql: Graphql;
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

      graphql = new Graphql({
         host: 'https://hasura.triggyr.xyz/v1/graphql',
         headers: {
            'x-hasura-admin-secret': 'secret',
         },
      });
   });

   it('should create an axios instance with default headers', () => {
      expect(axios.create).toHaveBeenCalledWith({
         baseURL: 'https://hasura.triggyr.xyz/v1/graphql',
      });
   });
});
