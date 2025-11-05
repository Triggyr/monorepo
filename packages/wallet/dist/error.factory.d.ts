export default class TriggyrWalletError extends Error {
    statusCode: number;
    code: 'HTTP_ERROR' | 'INTERNAL_SERVER_ERROR' | 'TOKEN_EXPITED' | 'INVALID_TOKEN' | 'UNKNWON' | string;
    constructor(message: string, statusCode: number, code: 'HTTP_ERROR' | 'INTERNAL_SERVER_ERROR' | 'TOKEN_EXPITED' | 'INVALID_TOKEN' | 'UNKNWON' | string);
}
