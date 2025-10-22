import * as Generated from '../../generated/graphql';

export interface GraphqlOptions {
   host: string;
   headers: Record<string | 'x-hasura-admin-secret' | 'Authorization', string>;
   /**
    *
    * @default false
    */
   debug?: boolean;
   /**
    *
    * @default true
    */
   log_query?: boolean;
   logger?: (_: any) => void;
}

export type GraphqlSelectOptions<T extends keyof GraphqlSelectTypes> = {
   queryName?: string;
   where: GraphqlBoolExp<T>;
   limit?: number;
   offset?: number;
   orderBy?: GraphqlOrderBy<T>;
};

export type GraphqlSelectTypes = {
   components: Generated.Components;
   nowpayments_txns: Generated.Nowpayments_Txns;
   run_logs: Generated.Run_Logs;
   users: Generated.Users;
   user_topups: Generated.User_Topups;
   user_turnkey_api_keys: Generated.User_Turnkey_Api_Keys;
   user_wallet: Generated.Users_Wallet;
   users_2fa: Generated.Users_2fa;
   wallet_accounts: Generated.Wallet_Accounts;
   workflow_nodes: Generated.Workflow_Nodes;
   workflow_runs: Generated.Workflow_Runs;
   workflow_triggers: Generated.Workflow_Triggers;
   workflows: Generated.Workflows;
};

export type GraphqlInsertTypes = {
   components: Generated.Components_Insert_Input;
   nowpayments_txns: Generated.Nowpayments_Txns_Insert_Input;
   run_logs: Generated.Run_Logs_Insert_Input;
   users: Generated.Users_Insert_Input;
   users_2fa: Generated.Users_2fa_Insert_Input;
   user_topups: Generated.User_Topups_Insert_Input;
   user_turnkey_api_keys: Generated.User_Turnkey_Api_Keys_Insert_Input;
   user_wallet: Generated.Users_Wallet_Insert_Input;
   wallet_accounts: Generated.Wallet_Accounts_Insert_Input;
   workflow_nodes: Generated.Workflow_Nodes_Insert_Input;
   workflow_runs: Generated.Workflow_Runs_Insert_Input;
   workflow_triggers: Generated.Workflow_Triggers_Insert_Input;
   workflows: Generated.Workflows_Insert_Input;
};

export type GraphqlUpdateTypes = {
   components: Generated.Components_Set_Input;
   nowpayments_txns: Generated.Nowpayments_Txns_Set_Input;
   run_logs: Generated.Run_Logs_Set_Input;
   users: Generated.Users_Set_Input;
   users_2fa: Generated.Users_2fa_Set_Input;
   user_topups: Generated.User_Topups_Set_Input;
   user_turnkey_api_keys: Generated.User_Turnkey_Api_Keys_Set_Input;
   user_wallet: Generated.Users_Wallet_Set_Input;
   wallet_accounts: Generated.Wallet_Accounts_Set_Input;
   workflow_nodes: Generated.Workflow_Nodes_Set_Input;
   workflow_runs: Generated.Workflow_Runs_Set_Input;
   workflow_triggers: Generated.Workflow_Triggers_Set_Input;
   workflows: Generated.Workflows_Set_Input;
};

export type GraphqlBoolExp<T extends keyof GraphqlSelectTypes> = T extends 'components'
   ? Generated.Components_Bool_Exp
   : T extends 'nowpayments_txns'
     ? Generated.Nowpayments_Txns_Bool_Exp
     : T extends 'run_logs'
       ? Generated.Run_Logs_Bool_Exp
       : T extends 'users'
         ? Generated.Users_Bool_Exp
         : T extends 'users_2fa'
           ? Generated.Users_2fa_Bool_Exp
           : T extends 'user_topups'
             ? Generated.User_Topups_Bool_Exp
             : T extends 'user_turnkey_api_keys'
               ? Generated.User_Turnkey_Api_Keys_Bool_Exp
               : T extends 'user_wallet'
                 ? Generated.Users_Wallet_Bool_Exp
                 : T extends 'wallet_accounts'
                   ? Generated.Wallet_Accounts_Bool_Exp
                   : T extends 'workflow_nodes'
                     ? Generated.Workflow_Nodes_Bool_Exp
                     : T extends 'workflow_runs'
                       ? Generated.Workflow_Runs_Bool_Exp
                       : T extends 'workflow_triggers'
                         ? Generated.Workflow_Triggers_Bool_Exp
                         : T extends 'workflows'
                           ? Generated.Workflows_Bool_Exp
                           : never;

export type GraphqlOrderBy<T extends keyof GraphqlSelectTypes> = T extends 'components'
   ? Generated.Components_Order_By
   : T extends 'nowpayments_txns'
     ? Generated.Nowpayments_Txns_Order_By
     : T extends 'run_logs'
       ? Generated.Run_Logs_Order_By
       : T extends 'users'
         ? Generated.Users_Order_By
         : T extends 'users_2fa'
           ? Generated.Users_2fa_Order_By
           : T extends 'user_topups'
             ? Generated.User_Topups_Order_By
             : T extends 'user_turnkey_api_keys'
               ? Generated.User_Turnkey_Api_Keys_Order_By
               : T extends 'user_wallet'
                 ? Generated.Users_Wallet_Order_By
                 : T extends 'wallet_accounts'
                   ? Generated.Wallet_Accounts_Order_By
                   : T extends 'workflow_nodes'
                     ? Generated.Workflow_Nodes_Order_By
                     : T extends 'workflow_runs'
                       ? Generated.Workflow_Runs_Order_By
                       : T extends 'workflow_triggers'
                         ? Generated.Workflow_Triggers_Order_By
                         : T extends 'workflows'
                           ? Generated.Workflows_Order_By
                           : never;

export interface GraphqlResponse<T, K> {
   errors: T;
   data: K;
}

export type NonEmptyArr<T> = [T, ...T[]];

type Key = string | number | symbol;

type Unpack<A> = A extends Array<infer E> ? E : A;

type AnyArray = any[] | ReadonlyArray<any>;

type AnyFunction = (...args: any[]) => any;

type Primitive = number | string | boolean | null | undefined;

type UnionForAny<T> = T extends never ? 'A' : 'B';

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
   ? I
   : never;

type IsStrictlyAny<T> = UnionToIntersection<UnionForAny<T>> extends never ? true : false;

export type ObjectPathsWithArray<
   Obj,
   KeyPrefix extends string = '',
   Depth extends number = 3,
> = Depth extends never
   ? never
   : true extends IsStrictlyAny<Obj>
     ? never
     : Obj extends Primitive | Date | AnyFunction
       ? never
       : {
            [K in keyof Unpack<Obj> & string]: Unpack<Obj>[K] extends Primitive
               ? `${KeyPrefix}${K}`
               :
                    | never
                    | ObjectPathsWithArray<
                         Unpack<Obj[K & keyof Obj]>,
                         `${KeyPrefix}${K}${Obj[K & keyof Obj] extends AnyArray ? `` : ''}.`,
                         [never, 0, 1, 2, 3][Depth]
                      >;
         }[keyof Unpack<Obj> & string];

export type ObjectPaths<
   Obj,
   KeyPrefix extends string = '',
   Depth extends number = 3,
> = Depth extends never
   ? never
   : true extends IsStrictlyAny<Obj>
     ? never
     : Obj extends Primitive | Date | AnyFunction
       ? never
       : {
            [K in keyof Unpack<Obj> & string]: Unpack<Obj>[K] extends Primitive
               ? `${KeyPrefix}${K}`
               : never;
         }[keyof Unpack<Obj> & string];

type Head<T extends string> = T extends `${infer First}.${string}` ? First : T;

type Tail<T extends string> = T extends `${string}.${infer Rest}` ? Rest : never;

export type DeepPick<T, K extends string> = T extends object
   ? {
        [P in Head<K> & keyof T]: T[P] extends readonly unknown[]
           ? DeepPick<T[P][number], Tail<Extract<K, `${P}.${string}`>>>[]
           : DeepPick<T[P], Tail<Extract<K, `${P}.${string}`>>>;
     }
   : T;

export type PropertyValuexxx<Obj, Property extends Key> = Obj extends object
   ? Property extends `${infer Parent}.${infer Leaf}`
      ? Parent extends keyof Obj
         ? PropertyValuexxx<Obj[Parent], Leaf>
         : Parent extends `${infer SubParent}[${number}]`
           ? SubParent extends keyof Obj
              ? PropertyValuexxx<Unpack<Obj[SubParent]>, Leaf>
              : never
           : never
      : Property extends `${infer ArrayKey}[${number}]`
        ? ArrayKey extends keyof Obj
           ? Unpack<Obj[ArrayKey]>
           : never
        : Property extends keyof Obj
          ? Obj[Property]
          : never
   : never;
