export default class TriggyrWalletError extends Error {
   constructor(
      message: string,
      public statusCode: number,
      public code:
         | 'HTTP_ERROR'
         | 'INTERNAL_SERVER_ERROR'
         | 'TOKEN_EXPITED'
         | 'INVALID_TOKEN'
         | 'UNKNWON'
         | string,
   ) {
      super(message);
      this.name = 'TriggyrWalletError';

      Error.captureStackTrace(this, this.constructor);
   }
}
