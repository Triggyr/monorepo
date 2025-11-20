import type axios from 'axios';
type ArrayOf<T> = T[];
export type TriggyrWalletOptions = {
    apiUrl: string;
    logger?: (v: any) => void;
    baseHeaders?: {
        'x-api-secret'?: string;
        [key: string]: axios.AxiosHeaderValue | undefined;
    };
};
type TriggyrWalletBaseApiRequest = {
    headers?: {
        'x-api-secret'?: string;
        [key: string]: axios.AxiosHeaderValue | undefined;
    };
};
export type TriggyrWalletApiRequest<T = undefined> = T extends undefined ? TriggyrWalletBaseApiRequest : T & TriggyrWalletBaseApiRequest;
export type TriggyrWalletHealthz = {
    environment: 'production' | 'development';
};
export type TriggyrWalletBlockchains = {
    [key: string]: {
        name: string;
        logo: string;
        address_format: string;
        curve: string;
        explorer_url: string;
        hd_path: string;
        validator: {
            address: string;
        };
        native_token: {
            address: string;
            symbol: string;
            name: string;
            decimals: number;
            logo: string;
        };
    };
};
export type TriggyrWallet2FaInit = {
    secret: string;
    encoding: string;
    qrcode: string;
};
export type TriggyrWalletAddressPayload = {
    blockchain: string;
    address: string;
    cursor?: string | null;
    /**
     *
     * @default 25
     */
    limit?: number;
};
export type TriggyrWalletAddressTokensResponse = {
    page: number;
    limit: number;
    cursor: string | null;
    tokens: ArrayOf<{
        address: string;
        name: string;
        symbol: string;
        decimals: number;
        logo: string | null;
        total_supply: string | null;
        is_native: boolean;
        is_possible_spam: boolean;
        is_contract_verified: boolean;
        balance: string;
        usd_price: number | null;
        usd_price_24hr_percent_change: number | null;
    }>;
};
export type TriggyrWalletAddressNftsResponse = {
    page: number;
    limit: number;
    cursor: string | null;
    nfts: ArrayOf<{
        collection: {
            name: string | null;
            symbol: string;
            logo: string | null;
            description: string | null;
            address: string;
            links: Record<string, string> | null;
            is_possible_spam: boolean;
            is_verified_collection: boolean;
            floor_price: string | null;
            floor_price_usd: string | null;
            floor_price_currency: string | null;
        };
        token_identifier: string;
        name: string;
        symbol: string;
        description: string | null;
        image_uri: string | null;
        token_uri: string | null;
        attributes: ArrayOf<{
            trait_type: string;
            value: string;
        }>;
        list_price: {
            listed: boolean;
            price: string | null;
            price_currency: string | null;
            price_usd: string | null;
            marketplace: string | null;
        };
    }>;
};
export type TriggyrWalletAddressTransactionsResponse = {
    page: number;
    limit: number;
    cursor: string | null;
    transactions: ArrayOf<{}>;
};
export type TriggyrWalletAddressSwapsResponse = {
    page: number;
    limit: number;
    cursor: string | null;
    swaps: ArrayOf<{
        transaction_hash: string;
        transaction_type: 'buy' | 'sell';
        transaction_index: 1;
        sub_category: 'sellAll' | 'partialSell' | 'accumulation' | 'newPosition';
        block_timestamp: string;
        block_number: number;
        wallet_address: string;
        pair_address: string;
        pair_label: string | null;
        exchange_address: string;
        exchange_name: string | null;
        exchange_logo: string | null;
        baseToken: string;
        quoteToken: string;
        baseQuotePrice: string;
        entity: string | null;
        entity_logo: string | null;
        wallet_address_label: string | null;
        bought: {
            address: string;
            name: string;
            symbol: string;
            logo: string;
            amount: string;
            usd_price: number;
            usd_amount: number;
            token_type: 'token1';
        };
        sold: {
            address: string;
            name: string;
            symbol: string;
            logo: string;
            amount: string;
            usd_price: number;
            usd_amount: number;
            token_type: 'token0';
        };
        total_value_usd: number;
    }>;
};
export type TriggyrWalletNftPayload = {
    blockchain: string;
    contract: string;
};
export type TriggyrWalletNftCollection = {
    address: string;
    name: string;
    symbol: string;
    logo: string | null;
    description: string | null;
    is_possible_spam: boolean;
    is_verified_collection: boolean;
    created_at: number | null;
    links: Record<string, string> | null;
    floor_price: string | null;
    floor_price_usd: string | null;
    floor_price_currency: string | null;
};
export type TriggyrWalletNftItem = {
    collection: {
        name: string;
        symbol: string;
        logo: string | null;
        description: string | null;
        address: string;
        links: Record<string, string> | null;
        is_possible_spam: boolean;
        is_verified_collection: boolean;
        floor_price: string | null;
        floor_price_usd: string | null;
        floor_price_currency: string | null;
    };
    token_identifier: string;
    name: string;
    symbol: string;
    description: string | null;
    image_uri: string | null;
    token_uri: string | null;
    attributes: ArrayOf<{
        trait_type: string;
        value: string;
    }>;
};
export type TriggyrWalletTokenPayload = {
    blockchain: string;
    contract: string;
};
export type TriggyrWalletTokenInformation = {
    address: string;
    address_label: string;
    name: string;
    symbol: string;
    decimals: number;
    categories: ArrayOf<string>;
    logo: string | null;
    description: string | null;
    total_supply: string | null;
    fdv: string | null;
    mcap: string | null;
    liquidity: string | null;
    circulating_supply: string | null;
    links: Record<string, string> | null;
    is_possible_spam: boolean;
    is_contract_verified: boolean;
    usd_price: number | null;
    usd_price_24hr_percent_change: number | null;
};
export type TriggyrWalletTokenPrice = {
    address: string;
    name: string;
    symbol: string;
    logo: string | null;
    is_possible_spam: boolean;
    is_contract_verified: boolean;
    usd_price: number | null;
    usd_price_24hr_percent_change: number | null;
};
export type TriggyrWalletTokenBalanceOf = {
    name: string;
    symbol: string;
    decimals: number;
    balance: string;
    logo: string | null;
    usd_price: string | null;
};
export type TriggyrWalletTokenShield = ArrayOf<{
    type: 'NOT_VERIFIED' | 'LOW_LIQUIDITY' | 'NOT_SELLABLE' | 'LOW_ORGANIC_ACTIVITY' | 'HAS_MINT_AUTHORITY' | 'HAS_FREEZE_AUTHORITY' | 'HAS_PERMANENT_DELEGATE' | 'NEW_LISTING' | 'VERY_LOW_TRADING_ACTIVITY' | 'HIGH_SUPPLY_CONCENTRATION' | 'NON_TRANSFERABLE' | 'MUTABLE_TRANSFER_FEES' | 'SUSPICIOUS_DEV_ACTIVITY' | 'SUSPICIOUS_TOP_HOLDER_ACTIVITY' | 'HIGH_SINGLE_OWNERSHIP';
    message: string;
    severity: 'info' | 'warning' | 'critical';
}>;
export type TriggyrWalletList = {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    accounts: ArrayOf<{
        id: string;
        blockchain: string;
        address: string;
        created_at: string;
        updated_at: string;
    }>;
};
export type TriggyrWalletCreateWalletAccount = {
    blockchains: ArrayOf<string>;
};
export type TriggyrWalletSignTransaction = {
    blockchain: string;
    type: 'TRANSACTION_TYPE_ETHEREUM' | 'TRANSACTION_TYPE_SOLANA' | 'TRANSACTION_TYPE_TRON';
    unsignedTransaction: string;
    token?: string;
};
export type TriggyrWalletSignTransactionResponse = {
    signedTransaction: string;
};
export type TriggyrWalletSignRawPayloads = {
    blockchain: string;
    encoding: 'PAYLOAD_ENCODING_HEXADECIMAL' | 'PAYLOAD_ENCODING_TEXT_UTF8' | 'PAYLOAD_ENCODING_EIP712';
    hashFunction: 'HASH_FUNCTION_NO_OP' | 'HASH_FUNCTION_SHA256' | 'HASH_FUNCTION_KECCAK256' | 'HASH_FUNCTION_NOT_APPLICABLE';
    unsignedTransaction: ArrayOf<string>;
    token?: string;
};
export type TriggyrWalletSignRawPayloadsResponse = {
    signatures: ArrayOf<{
        r: string;
        s: string;
        v: string;
    }>;
};
export type TriggyrWalletExport = {
    targetPublicKey: string;
    token?: string;
};
export type TriggyrWalletExportResponse = {
    export_bundle: string;
    organization_id: string;
};
export type TriggyrWalletSettings = {
    enable2FA: boolean;
};
export type TriggyrWalletSwapTokens = {
    blockchain: string;
};
export type TriggyrWalletSwapTokensResponse = ArrayOf<{
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    icon: string | null;
    usd_price: number | null;
}>;
export type TriggyrWalletSwapSearch = {
    blockchain: string;
    address: string;
};
export type TriggyrWalletSwapSearchResponse = {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    icon: string | null;
    usd_price: number | null;
};
export type TriggyrWalletSwapPayload = {
    blockchain: string;
    amount: string;
    input_token: string;
    output_token: string;
    recipient?: string;
    /**
     *
     * @default 0.5
     */
    slippage?: number;
};
export type TriggyrWalletSwapQuoteResponse = {
    input_token: string;
    output_token: string;
    out_amount: string;
    minimum_out_amount: string;
    slippage: number;
    price_impact: number | null;
};
export type TriggyrTransactionResponse = {
    hash: string;
    took: number;
    block_time: number | null;
    block_number: number | null;
    explorer_url: string | null;
};
export type TriggyrSendNative = {
    blockchain: string;
    to: string;
    amount: string;
    token?: string;
    memo?: string;
};
export type TriggyrSendToken = {
    blockchain: string;
    token_address: string;
    to: string;
    amount: string;
    token?: string;
    memo?: string;
};
export type TriggyrSendNFT = {
    blockchain: string;
    nft_address: string;
    to: string;
    /**
     *
     * @note for EVM ERC721/1155
     */
    token_id?: string;
    /**
     *
     * @note for EVM ERC1155
     */
    amount?: string;
    token?: string;
    memo?: string;
};
export type TriggyrContractCall = {
    blockchain: string;
    unsigned_transaction: string;
    token?: string;
};
export {};
