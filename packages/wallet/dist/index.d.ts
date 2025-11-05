import Http from '@triggyr/http';
import Nft from './modules/nft';
import Address from './modules/address';
import Wallet from './modules/wallet';
import TwoFa from './modules/twoFa';
import Swap from './modules/swap';
import Token from './modules/token';
import type { TriggyrWalletApiRequest, TriggyrWalletBlockchains, TriggyrWalletHealthz, TriggyrWalletOptions } from './types';
export default class TriggyrWallet {
    http: Http;
    address: Address;
    nft: Nft;
    swap: Swap;
    token: Token;
    twoFa: TwoFa;
    wallet: Wallet;
    constructor(options: TriggyrWalletOptions);
    healthcheck: (payload?: TriggyrWalletApiRequest) => Promise<TriggyrWalletHealthz>;
    blockchains: (payload?: TriggyrWalletApiRequest) => Promise<TriggyrWalletBlockchains>;
}
