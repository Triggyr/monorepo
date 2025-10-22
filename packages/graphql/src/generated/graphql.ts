export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "components" */
export type Components = {
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  input: Scalars['jsonb']['output'];
  is_coming_soon: Scalars['Boolean']['output'];
  is_dead_end: Scalars['Boolean']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  name: Scalars['String']['output'];
  output: Scalars['jsonb']['output'];
  /** An array relationship */
  run_logs: Array<Run_Logs>;
  /** An aggregate relationship */
  run_logs_aggregate: Run_Logs_Aggregate;
  sub_type: Scalars['String']['output'];
  supported_blockchains?: Maybe<Scalars['jsonb']['output']>;
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  workflow_nodes: Array<Workflow_Nodes>;
  /** An aggregate relationship */
  workflow_nodes_aggregate: Workflow_Nodes_Aggregate;
  /** An array relationship */
  workflow_triggers: Array<Workflow_Triggers>;
  /** An aggregate relationship */
  workflow_triggers_aggregate: Workflow_Triggers_Aggregate;
};


/** columns and relationships of "components" */
export type ComponentsInputArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "components" */
export type ComponentsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "components" */
export type ComponentsOutputArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "components" */
export type ComponentsRun_LogsArgs = {
  distinct_on?: InputMaybe<Array<Run_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Run_Logs_Order_By>>;
  where?: InputMaybe<Run_Logs_Bool_Exp>;
};


/** columns and relationships of "components" */
export type ComponentsRun_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Run_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Run_Logs_Order_By>>;
  where?: InputMaybe<Run_Logs_Bool_Exp>;
};


/** columns and relationships of "components" */
export type ComponentsSupported_BlockchainsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "components" */
export type ComponentsWorkflow_NodesArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Nodes_Order_By>>;
  where?: InputMaybe<Workflow_Nodes_Bool_Exp>;
};


/** columns and relationships of "components" */
export type ComponentsWorkflow_Nodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Nodes_Order_By>>;
  where?: InputMaybe<Workflow_Nodes_Bool_Exp>;
};


/** columns and relationships of "components" */
export type ComponentsWorkflow_TriggersArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Triggers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Triggers_Order_By>>;
  where?: InputMaybe<Workflow_Triggers_Bool_Exp>;
};


/** columns and relationships of "components" */
export type ComponentsWorkflow_Triggers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Triggers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Triggers_Order_By>>;
  where?: InputMaybe<Workflow_Triggers_Bool_Exp>;
};

/** aggregated selection of "components" */
export type Components_Aggregate = {
  aggregate?: Maybe<Components_Aggregate_Fields>;
  nodes: Array<Components>;
};

/** aggregate fields of "components" */
export type Components_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Components_Max_Fields>;
  min?: Maybe<Components_Min_Fields>;
};


/** aggregate fields of "components" */
export type Components_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Components_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Components_Append_Input = {
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
  supported_blockchains?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "components". All fields are combined with a logical 'AND'. */
export type Components_Bool_Exp = {
  _and?: InputMaybe<Array<Components_Bool_Exp>>;
  _not?: InputMaybe<Components_Bool_Exp>;
  _or?: InputMaybe<Array<Components_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  input?: InputMaybe<Jsonb_Comparison_Exp>;
  is_coming_soon?: InputMaybe<Boolean_Comparison_Exp>;
  is_dead_end?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  output?: InputMaybe<Jsonb_Comparison_Exp>;
  run_logs?: InputMaybe<Run_Logs_Bool_Exp>;
  run_logs_aggregate?: InputMaybe<Run_Logs_Aggregate_Bool_Exp>;
  sub_type?: InputMaybe<String_Comparison_Exp>;
  supported_blockchains?: InputMaybe<Jsonb_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  workflow_nodes?: InputMaybe<Workflow_Nodes_Bool_Exp>;
  workflow_nodes_aggregate?: InputMaybe<Workflow_Nodes_Aggregate_Bool_Exp>;
  workflow_triggers?: InputMaybe<Workflow_Triggers_Bool_Exp>;
  workflow_triggers_aggregate?: InputMaybe<Workflow_Triggers_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "components" */
export type Components_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'components_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Components_Delete_At_Path_Input = {
  input?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
  output?: InputMaybe<Array<Scalars['String']['input']>>;
  supported_blockchains?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Components_Delete_Elem_Input = {
  input?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['Int']['input']>;
  output?: InputMaybe<Scalars['Int']['input']>;
  supported_blockchains?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Components_Delete_Key_Input = {
  input?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  output?: InputMaybe<Scalars['String']['input']>;
  supported_blockchains?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "components" */
export type Components_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  is_coming_soon?: InputMaybe<Scalars['Boolean']['input']>;
  is_dead_end?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
  run_logs?: InputMaybe<Run_Logs_Arr_Rel_Insert_Input>;
  sub_type?: InputMaybe<Scalars['String']['input']>;
  supported_blockchains?: InputMaybe<Scalars['jsonb']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workflow_nodes?: InputMaybe<Workflow_Nodes_Arr_Rel_Insert_Input>;
  workflow_triggers?: InputMaybe<Workflow_Triggers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Components_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sub_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Components_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sub_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "components" */
export type Components_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Components>;
};

/** input type for inserting object relation for remote table "components" */
export type Components_Obj_Rel_Insert_Input = {
  data: Components_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Components_On_Conflict>;
};

/** on_conflict condition type for table "components" */
export type Components_On_Conflict = {
  constraint: Components_Constraint;
  update_columns?: Array<Components_Update_Column>;
  where?: InputMaybe<Components_Bool_Exp>;
};

/** Ordering options when selecting data from "components". */
export type Components_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input?: InputMaybe<Order_By>;
  is_coming_soon?: InputMaybe<Order_By>;
  is_dead_end?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  output?: InputMaybe<Order_By>;
  run_logs_aggregate?: InputMaybe<Run_Logs_Aggregate_Order_By>;
  sub_type?: InputMaybe<Order_By>;
  supported_blockchains?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workflow_nodes_aggregate?: InputMaybe<Workflow_Nodes_Aggregate_Order_By>;
  workflow_triggers_aggregate?: InputMaybe<Workflow_Triggers_Aggregate_Order_By>;
};

/** primary key columns input for table: components */
export type Components_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Components_Prepend_Input = {
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
  supported_blockchains?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "components" */
export type Components_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'input'
  /** column name */
  | 'is_coming_soon'
  /** column name */
  | 'is_dead_end'
  /** column name */
  | 'metadata'
  /** column name */
  | 'name'
  /** column name */
  | 'output'
  /** column name */
  | 'sub_type'
  /** column name */
  | 'supported_blockchains'
  /** column name */
  | 'type'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "components" */
export type Components_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  is_coming_soon?: InputMaybe<Scalars['Boolean']['input']>;
  is_dead_end?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
  sub_type?: InputMaybe<Scalars['String']['input']>;
  supported_blockchains?: InputMaybe<Scalars['jsonb']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "components" */
export type Components_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Components_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Components_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  is_coming_soon?: InputMaybe<Scalars['Boolean']['input']>;
  is_dead_end?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
  sub_type?: InputMaybe<Scalars['String']['input']>;
  supported_blockchains?: InputMaybe<Scalars['jsonb']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "components" */
export type Components_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'input'
  /** column name */
  | 'is_coming_soon'
  /** column name */
  | 'is_dead_end'
  /** column name */
  | 'metadata'
  /** column name */
  | 'name'
  /** column name */
  | 'output'
  /** column name */
  | 'sub_type'
  /** column name */
  | 'supported_blockchains'
  /** column name */
  | 'type'
  /** column name */
  | 'updated_at';

export type Components_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Components_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Components_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Components_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Components_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Components_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Components_Set_Input>;
  /** filter the rows which have to be updated */
  where: Components_Bool_Exp;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "components" */
  delete_components?: Maybe<Components_Mutation_Response>;
  /** delete single row from the table: "components" */
  delete_components_by_pk?: Maybe<Components>;
  /** delete data from the table: "nowpayments_txns" */
  delete_nowpayments_txns?: Maybe<Nowpayments_Txns_Mutation_Response>;
  /** delete single row from the table: "nowpayments_txns" */
  delete_nowpayments_txns_by_pk?: Maybe<Nowpayments_Txns>;
  /** delete data from the table: "run_logs" */
  delete_run_logs?: Maybe<Run_Logs_Mutation_Response>;
  /** delete single row from the table: "run_logs" */
  delete_run_logs_by_pk?: Maybe<Run_Logs>;
  /** delete data from the table: "user_topups" */
  delete_user_topups?: Maybe<User_Topups_Mutation_Response>;
  /** delete single row from the table: "user_topups" */
  delete_user_topups_by_pk?: Maybe<User_Topups>;
  /** delete data from the table: "user_turnkey_api_keys" */
  delete_user_turnkey_api_keys?: Maybe<User_Turnkey_Api_Keys_Mutation_Response>;
  /** delete single row from the table: "user_turnkey_api_keys" */
  delete_user_turnkey_api_keys_by_pk?: Maybe<User_Turnkey_Api_Keys>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "users_2fa" */
  delete_users_2fa?: Maybe<Users_2fa_Mutation_Response>;
  /** delete single row from the table: "users_2fa" */
  delete_users_2fa_by_pk?: Maybe<Users_2fa>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_wallet" */
  delete_users_wallet?: Maybe<Users_Wallet_Mutation_Response>;
  /** delete single row from the table: "users_wallet" */
  delete_users_wallet_by_pk?: Maybe<Users_Wallet>;
  /** delete data from the table: "wallet_accounts" */
  delete_wallet_accounts?: Maybe<Wallet_Accounts_Mutation_Response>;
  /** delete single row from the table: "wallet_accounts" */
  delete_wallet_accounts_by_pk?: Maybe<Wallet_Accounts>;
  /** delete data from the table: "workflow_nodes" */
  delete_workflow_nodes?: Maybe<Workflow_Nodes_Mutation_Response>;
  /** delete single row from the table: "workflow_nodes" */
  delete_workflow_nodes_by_pk?: Maybe<Workflow_Nodes>;
  /** delete data from the table: "workflow_runs" */
  delete_workflow_runs?: Maybe<Workflow_Runs_Mutation_Response>;
  /** delete single row from the table: "workflow_runs" */
  delete_workflow_runs_by_pk?: Maybe<Workflow_Runs>;
  /** delete data from the table: "workflow_triggers" */
  delete_workflow_triggers?: Maybe<Workflow_Triggers_Mutation_Response>;
  /** delete single row from the table: "workflow_triggers" */
  delete_workflow_triggers_by_pk?: Maybe<Workflow_Triggers>;
  /** delete data from the table: "workflows" */
  delete_workflows?: Maybe<Workflows_Mutation_Response>;
  /** delete single row from the table: "workflows" */
  delete_workflows_by_pk?: Maybe<Workflows>;
  /** insert data into the table: "components" */
  insert_components?: Maybe<Components_Mutation_Response>;
  /** insert a single row into the table: "components" */
  insert_components_one?: Maybe<Components>;
  /** insert data into the table: "nowpayments_txns" */
  insert_nowpayments_txns?: Maybe<Nowpayments_Txns_Mutation_Response>;
  /** insert a single row into the table: "nowpayments_txns" */
  insert_nowpayments_txns_one?: Maybe<Nowpayments_Txns>;
  /** insert data into the table: "run_logs" */
  insert_run_logs?: Maybe<Run_Logs_Mutation_Response>;
  /** insert a single row into the table: "run_logs" */
  insert_run_logs_one?: Maybe<Run_Logs>;
  /** insert data into the table: "user_topups" */
  insert_user_topups?: Maybe<User_Topups_Mutation_Response>;
  /** insert a single row into the table: "user_topups" */
  insert_user_topups_one?: Maybe<User_Topups>;
  /** insert data into the table: "user_turnkey_api_keys" */
  insert_user_turnkey_api_keys?: Maybe<User_Turnkey_Api_Keys_Mutation_Response>;
  /** insert a single row into the table: "user_turnkey_api_keys" */
  insert_user_turnkey_api_keys_one?: Maybe<User_Turnkey_Api_Keys>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users_2fa" */
  insert_users_2fa?: Maybe<Users_2fa_Mutation_Response>;
  /** insert a single row into the table: "users_2fa" */
  insert_users_2fa_one?: Maybe<Users_2fa>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "users_wallet" */
  insert_users_wallet?: Maybe<Users_Wallet_Mutation_Response>;
  /** insert a single row into the table: "users_wallet" */
  insert_users_wallet_one?: Maybe<Users_Wallet>;
  /** insert data into the table: "wallet_accounts" */
  insert_wallet_accounts?: Maybe<Wallet_Accounts_Mutation_Response>;
  /** insert a single row into the table: "wallet_accounts" */
  insert_wallet_accounts_one?: Maybe<Wallet_Accounts>;
  /** insert data into the table: "workflow_nodes" */
  insert_workflow_nodes?: Maybe<Workflow_Nodes_Mutation_Response>;
  /** insert a single row into the table: "workflow_nodes" */
  insert_workflow_nodes_one?: Maybe<Workflow_Nodes>;
  /** insert data into the table: "workflow_runs" */
  insert_workflow_runs?: Maybe<Workflow_Runs_Mutation_Response>;
  /** insert a single row into the table: "workflow_runs" */
  insert_workflow_runs_one?: Maybe<Workflow_Runs>;
  /** insert data into the table: "workflow_triggers" */
  insert_workflow_triggers?: Maybe<Workflow_Triggers_Mutation_Response>;
  /** insert a single row into the table: "workflow_triggers" */
  insert_workflow_triggers_one?: Maybe<Workflow_Triggers>;
  /** insert data into the table: "workflows" */
  insert_workflows?: Maybe<Workflows_Mutation_Response>;
  /** insert a single row into the table: "workflows" */
  insert_workflows_one?: Maybe<Workflows>;
  /** update data of the table: "components" */
  update_components?: Maybe<Components_Mutation_Response>;
  /** update single row of the table: "components" */
  update_components_by_pk?: Maybe<Components>;
  /** update multiples rows of table: "components" */
  update_components_many?: Maybe<Array<Maybe<Components_Mutation_Response>>>;
  /** update data of the table: "nowpayments_txns" */
  update_nowpayments_txns?: Maybe<Nowpayments_Txns_Mutation_Response>;
  /** update single row of the table: "nowpayments_txns" */
  update_nowpayments_txns_by_pk?: Maybe<Nowpayments_Txns>;
  /** update multiples rows of table: "nowpayments_txns" */
  update_nowpayments_txns_many?: Maybe<Array<Maybe<Nowpayments_Txns_Mutation_Response>>>;
  /** update data of the table: "run_logs" */
  update_run_logs?: Maybe<Run_Logs_Mutation_Response>;
  /** update single row of the table: "run_logs" */
  update_run_logs_by_pk?: Maybe<Run_Logs>;
  /** update multiples rows of table: "run_logs" */
  update_run_logs_many?: Maybe<Array<Maybe<Run_Logs_Mutation_Response>>>;
  /** update data of the table: "user_topups" */
  update_user_topups?: Maybe<User_Topups_Mutation_Response>;
  /** update single row of the table: "user_topups" */
  update_user_topups_by_pk?: Maybe<User_Topups>;
  /** update multiples rows of table: "user_topups" */
  update_user_topups_many?: Maybe<Array<Maybe<User_Topups_Mutation_Response>>>;
  /** update data of the table: "user_turnkey_api_keys" */
  update_user_turnkey_api_keys?: Maybe<User_Turnkey_Api_Keys_Mutation_Response>;
  /** update single row of the table: "user_turnkey_api_keys" */
  update_user_turnkey_api_keys_by_pk?: Maybe<User_Turnkey_Api_Keys>;
  /** update multiples rows of table: "user_turnkey_api_keys" */
  update_user_turnkey_api_keys_many?: Maybe<Array<Maybe<User_Turnkey_Api_Keys_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "users_2fa" */
  update_users_2fa?: Maybe<Users_2fa_Mutation_Response>;
  /** update single row of the table: "users_2fa" */
  update_users_2fa_by_pk?: Maybe<Users_2fa>;
  /** update multiples rows of table: "users_2fa" */
  update_users_2fa_many?: Maybe<Array<Maybe<Users_2fa_Mutation_Response>>>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "users_wallet" */
  update_users_wallet?: Maybe<Users_Wallet_Mutation_Response>;
  /** update single row of the table: "users_wallet" */
  update_users_wallet_by_pk?: Maybe<Users_Wallet>;
  /** update multiples rows of table: "users_wallet" */
  update_users_wallet_many?: Maybe<Array<Maybe<Users_Wallet_Mutation_Response>>>;
  /** update data of the table: "wallet_accounts" */
  update_wallet_accounts?: Maybe<Wallet_Accounts_Mutation_Response>;
  /** update single row of the table: "wallet_accounts" */
  update_wallet_accounts_by_pk?: Maybe<Wallet_Accounts>;
  /** update multiples rows of table: "wallet_accounts" */
  update_wallet_accounts_many?: Maybe<Array<Maybe<Wallet_Accounts_Mutation_Response>>>;
  /** update data of the table: "workflow_nodes" */
  update_workflow_nodes?: Maybe<Workflow_Nodes_Mutation_Response>;
  /** update single row of the table: "workflow_nodes" */
  update_workflow_nodes_by_pk?: Maybe<Workflow_Nodes>;
  /** update multiples rows of table: "workflow_nodes" */
  update_workflow_nodes_many?: Maybe<Array<Maybe<Workflow_Nodes_Mutation_Response>>>;
  /** update data of the table: "workflow_runs" */
  update_workflow_runs?: Maybe<Workflow_Runs_Mutation_Response>;
  /** update single row of the table: "workflow_runs" */
  update_workflow_runs_by_pk?: Maybe<Workflow_Runs>;
  /** update multiples rows of table: "workflow_runs" */
  update_workflow_runs_many?: Maybe<Array<Maybe<Workflow_Runs_Mutation_Response>>>;
  /** update data of the table: "workflow_triggers" */
  update_workflow_triggers?: Maybe<Workflow_Triggers_Mutation_Response>;
  /** update single row of the table: "workflow_triggers" */
  update_workflow_triggers_by_pk?: Maybe<Workflow_Triggers>;
  /** update multiples rows of table: "workflow_triggers" */
  update_workflow_triggers_many?: Maybe<Array<Maybe<Workflow_Triggers_Mutation_Response>>>;
  /** update data of the table: "workflows" */
  update_workflows?: Maybe<Workflows_Mutation_Response>;
  /** update single row of the table: "workflows" */
  update_workflows_by_pk?: Maybe<Workflows>;
  /** update multiples rows of table: "workflows" */
  update_workflows_many?: Maybe<Array<Maybe<Workflows_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ComponentsArgs = {
  where: Components_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Components_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Nowpayments_TxnsArgs = {
  where: Nowpayments_Txns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Nowpayments_Txns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Run_LogsArgs = {
  where: Run_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Run_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_TopupsArgs = {
  where: User_Topups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Topups_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Turnkey_Api_KeysArgs = {
  where: User_Turnkey_Api_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Turnkey_Api_Keys_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_2faArgs = {
  where: Users_2fa_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_2fa_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Users_WalletArgs = {
  where: Users_Wallet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Wallet_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Wallet_AccountsArgs = {
  where: Wallet_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wallet_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Workflow_NodesArgs = {
  where: Workflow_Nodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workflow_Nodes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Workflow_RunsArgs = {
  where: Workflow_Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workflow_Runs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Workflow_TriggersArgs = {
  where: Workflow_Triggers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workflow_Triggers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_WorkflowsArgs = {
  where: Workflows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workflows_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ComponentsArgs = {
  objects: Array<Components_Insert_Input>;
  on_conflict?: InputMaybe<Components_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Components_OneArgs = {
  object: Components_Insert_Input;
  on_conflict?: InputMaybe<Components_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nowpayments_TxnsArgs = {
  objects: Array<Nowpayments_Txns_Insert_Input>;
  on_conflict?: InputMaybe<Nowpayments_Txns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Nowpayments_Txns_OneArgs = {
  object: Nowpayments_Txns_Insert_Input;
  on_conflict?: InputMaybe<Nowpayments_Txns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Run_LogsArgs = {
  objects: Array<Run_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Run_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Run_Logs_OneArgs = {
  object: Run_Logs_Insert_Input;
  on_conflict?: InputMaybe<Run_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_TopupsArgs = {
  objects: Array<User_Topups_Insert_Input>;
  on_conflict?: InputMaybe<User_Topups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Topups_OneArgs = {
  object: User_Topups_Insert_Input;
  on_conflict?: InputMaybe<User_Topups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Turnkey_Api_KeysArgs = {
  objects: Array<User_Turnkey_Api_Keys_Insert_Input>;
  on_conflict?: InputMaybe<User_Turnkey_Api_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Turnkey_Api_Keys_OneArgs = {
  object: User_Turnkey_Api_Keys_Insert_Input;
  on_conflict?: InputMaybe<User_Turnkey_Api_Keys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_2faArgs = {
  objects: Array<Users_2fa_Insert_Input>;
  on_conflict?: InputMaybe<Users_2fa_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_2fa_OneArgs = {
  object: Users_2fa_Insert_Input;
  on_conflict?: InputMaybe<Users_2fa_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_WalletArgs = {
  objects: Array<Users_Wallet_Insert_Input>;
  on_conflict?: InputMaybe<Users_Wallet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Wallet_OneArgs = {
  object: Users_Wallet_Insert_Input;
  on_conflict?: InputMaybe<Users_Wallet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wallet_AccountsArgs = {
  objects: Array<Wallet_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Wallet_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wallet_Accounts_OneArgs = {
  object: Wallet_Accounts_Insert_Input;
  on_conflict?: InputMaybe<Wallet_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_NodesArgs = {
  objects: Array<Workflow_Nodes_Insert_Input>;
  on_conflict?: InputMaybe<Workflow_Nodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_Nodes_OneArgs = {
  object: Workflow_Nodes_Insert_Input;
  on_conflict?: InputMaybe<Workflow_Nodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_RunsArgs = {
  objects: Array<Workflow_Runs_Insert_Input>;
  on_conflict?: InputMaybe<Workflow_Runs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_Runs_OneArgs = {
  object: Workflow_Runs_Insert_Input;
  on_conflict?: InputMaybe<Workflow_Runs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_TriggersArgs = {
  objects: Array<Workflow_Triggers_Insert_Input>;
  on_conflict?: InputMaybe<Workflow_Triggers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflow_Triggers_OneArgs = {
  object: Workflow_Triggers_Insert_Input;
  on_conflict?: InputMaybe<Workflow_Triggers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorkflowsArgs = {
  objects: Array<Workflows_Insert_Input>;
  on_conflict?: InputMaybe<Workflows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workflows_OneArgs = {
  object: Workflows_Insert_Input;
  on_conflict?: InputMaybe<Workflows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ComponentsArgs = {
  _append?: InputMaybe<Components_Append_Input>;
  _delete_at_path?: InputMaybe<Components_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Components_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Components_Delete_Key_Input>;
  _prepend?: InputMaybe<Components_Prepend_Input>;
  _set?: InputMaybe<Components_Set_Input>;
  where: Components_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Components_By_PkArgs = {
  _append?: InputMaybe<Components_Append_Input>;
  _delete_at_path?: InputMaybe<Components_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Components_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Components_Delete_Key_Input>;
  _prepend?: InputMaybe<Components_Prepend_Input>;
  _set?: InputMaybe<Components_Set_Input>;
  pk_columns: Components_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Components_ManyArgs = {
  updates: Array<Components_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Nowpayments_TxnsArgs = {
  _append?: InputMaybe<Nowpayments_Txns_Append_Input>;
  _delete_at_path?: InputMaybe<Nowpayments_Txns_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nowpayments_Txns_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nowpayments_Txns_Delete_Key_Input>;
  _inc?: InputMaybe<Nowpayments_Txns_Inc_Input>;
  _prepend?: InputMaybe<Nowpayments_Txns_Prepend_Input>;
  _set?: InputMaybe<Nowpayments_Txns_Set_Input>;
  where: Nowpayments_Txns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Nowpayments_Txns_By_PkArgs = {
  _append?: InputMaybe<Nowpayments_Txns_Append_Input>;
  _delete_at_path?: InputMaybe<Nowpayments_Txns_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Nowpayments_Txns_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Nowpayments_Txns_Delete_Key_Input>;
  _inc?: InputMaybe<Nowpayments_Txns_Inc_Input>;
  _prepend?: InputMaybe<Nowpayments_Txns_Prepend_Input>;
  _set?: InputMaybe<Nowpayments_Txns_Set_Input>;
  pk_columns: Nowpayments_Txns_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Nowpayments_Txns_ManyArgs = {
  updates: Array<Nowpayments_Txns_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Run_LogsArgs = {
  _append?: InputMaybe<Run_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Run_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Run_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Run_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Run_Logs_Prepend_Input>;
  _set?: InputMaybe<Run_Logs_Set_Input>;
  where: Run_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Run_Logs_By_PkArgs = {
  _append?: InputMaybe<Run_Logs_Append_Input>;
  _delete_at_path?: InputMaybe<Run_Logs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Run_Logs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Run_Logs_Delete_Key_Input>;
  _prepend?: InputMaybe<Run_Logs_Prepend_Input>;
  _set?: InputMaybe<Run_Logs_Set_Input>;
  pk_columns: Run_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Run_Logs_ManyArgs = {
  updates: Array<Run_Logs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_TopupsArgs = {
  _append?: InputMaybe<User_Topups_Append_Input>;
  _delete_at_path?: InputMaybe<User_Topups_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Topups_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Topups_Delete_Key_Input>;
  _inc?: InputMaybe<User_Topups_Inc_Input>;
  _prepend?: InputMaybe<User_Topups_Prepend_Input>;
  _set?: InputMaybe<User_Topups_Set_Input>;
  where: User_Topups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Topups_By_PkArgs = {
  _append?: InputMaybe<User_Topups_Append_Input>;
  _delete_at_path?: InputMaybe<User_Topups_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Topups_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Topups_Delete_Key_Input>;
  _inc?: InputMaybe<User_Topups_Inc_Input>;
  _prepend?: InputMaybe<User_Topups_Prepend_Input>;
  _set?: InputMaybe<User_Topups_Set_Input>;
  pk_columns: User_Topups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Topups_ManyArgs = {
  updates: Array<User_Topups_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Turnkey_Api_KeysArgs = {
  _append?: InputMaybe<User_Turnkey_Api_Keys_Append_Input>;
  _delete_at_path?: InputMaybe<User_Turnkey_Api_Keys_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Turnkey_Api_Keys_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Turnkey_Api_Keys_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Turnkey_Api_Keys_Prepend_Input>;
  _set?: InputMaybe<User_Turnkey_Api_Keys_Set_Input>;
  where: User_Turnkey_Api_Keys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Turnkey_Api_Keys_By_PkArgs = {
  _append?: InputMaybe<User_Turnkey_Api_Keys_Append_Input>;
  _delete_at_path?: InputMaybe<User_Turnkey_Api_Keys_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Turnkey_Api_Keys_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Turnkey_Api_Keys_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Turnkey_Api_Keys_Prepend_Input>;
  _set?: InputMaybe<User_Turnkey_Api_Keys_Set_Input>;
  pk_columns: User_Turnkey_Api_Keys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Turnkey_Api_Keys_ManyArgs = {
  updates: Array<User_Turnkey_Api_Keys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_2faArgs = {
  _append?: InputMaybe<Users_2fa_Append_Input>;
  _delete_at_path?: InputMaybe<Users_2fa_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_2fa_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_2fa_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_2fa_Prepend_Input>;
  _set?: InputMaybe<Users_2fa_Set_Input>;
  where: Users_2fa_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_2fa_By_PkArgs = {
  _append?: InputMaybe<Users_2fa_Append_Input>;
  _delete_at_path?: InputMaybe<Users_2fa_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_2fa_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_2fa_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_2fa_Prepend_Input>;
  _set?: InputMaybe<Users_2fa_Set_Input>;
  pk_columns: Users_2fa_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_2fa_ManyArgs = {
  updates: Array<Users_2fa_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_WalletArgs = {
  _append?: InputMaybe<Users_Wallet_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Wallet_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Wallet_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Wallet_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Wallet_Prepend_Input>;
  _set?: InputMaybe<Users_Wallet_Set_Input>;
  where: Users_Wallet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Wallet_By_PkArgs = {
  _append?: InputMaybe<Users_Wallet_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Wallet_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Wallet_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Wallet_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Wallet_Prepend_Input>;
  _set?: InputMaybe<Users_Wallet_Set_Input>;
  pk_columns: Users_Wallet_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Wallet_ManyArgs = {
  updates: Array<Users_Wallet_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Wallet_AccountsArgs = {
  _append?: InputMaybe<Wallet_Accounts_Append_Input>;
  _delete_at_path?: InputMaybe<Wallet_Accounts_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Wallet_Accounts_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Wallet_Accounts_Delete_Key_Input>;
  _prepend?: InputMaybe<Wallet_Accounts_Prepend_Input>;
  _set?: InputMaybe<Wallet_Accounts_Set_Input>;
  where: Wallet_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Wallet_Accounts_By_PkArgs = {
  _append?: InputMaybe<Wallet_Accounts_Append_Input>;
  _delete_at_path?: InputMaybe<Wallet_Accounts_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Wallet_Accounts_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Wallet_Accounts_Delete_Key_Input>;
  _prepend?: InputMaybe<Wallet_Accounts_Prepend_Input>;
  _set?: InputMaybe<Wallet_Accounts_Set_Input>;
  pk_columns: Wallet_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Wallet_Accounts_ManyArgs = {
  updates: Array<Wallet_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_NodesArgs = {
  _append?: InputMaybe<Workflow_Nodes_Append_Input>;
  _delete_at_path?: InputMaybe<Workflow_Nodes_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflow_Nodes_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflow_Nodes_Delete_Key_Input>;
  _prepend?: InputMaybe<Workflow_Nodes_Prepend_Input>;
  _set?: InputMaybe<Workflow_Nodes_Set_Input>;
  where: Workflow_Nodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Nodes_By_PkArgs = {
  _append?: InputMaybe<Workflow_Nodes_Append_Input>;
  _delete_at_path?: InputMaybe<Workflow_Nodes_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflow_Nodes_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflow_Nodes_Delete_Key_Input>;
  _prepend?: InputMaybe<Workflow_Nodes_Prepend_Input>;
  _set?: InputMaybe<Workflow_Nodes_Set_Input>;
  pk_columns: Workflow_Nodes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Nodes_ManyArgs = {
  updates: Array<Workflow_Nodes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_RunsArgs = {
  _append?: InputMaybe<Workflow_Runs_Append_Input>;
  _delete_at_path?: InputMaybe<Workflow_Runs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflow_Runs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflow_Runs_Delete_Key_Input>;
  _prepend?: InputMaybe<Workflow_Runs_Prepend_Input>;
  _set?: InputMaybe<Workflow_Runs_Set_Input>;
  where: Workflow_Runs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Runs_By_PkArgs = {
  _append?: InputMaybe<Workflow_Runs_Append_Input>;
  _delete_at_path?: InputMaybe<Workflow_Runs_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflow_Runs_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflow_Runs_Delete_Key_Input>;
  _prepend?: InputMaybe<Workflow_Runs_Prepend_Input>;
  _set?: InputMaybe<Workflow_Runs_Set_Input>;
  pk_columns: Workflow_Runs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Runs_ManyArgs = {
  updates: Array<Workflow_Runs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_TriggersArgs = {
  _append?: InputMaybe<Workflow_Triggers_Append_Input>;
  _delete_at_path?: InputMaybe<Workflow_Triggers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflow_Triggers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflow_Triggers_Delete_Key_Input>;
  _prepend?: InputMaybe<Workflow_Triggers_Prepend_Input>;
  _set?: InputMaybe<Workflow_Triggers_Set_Input>;
  where: Workflow_Triggers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Triggers_By_PkArgs = {
  _append?: InputMaybe<Workflow_Triggers_Append_Input>;
  _delete_at_path?: InputMaybe<Workflow_Triggers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflow_Triggers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflow_Triggers_Delete_Key_Input>;
  _prepend?: InputMaybe<Workflow_Triggers_Prepend_Input>;
  _set?: InputMaybe<Workflow_Triggers_Set_Input>;
  pk_columns: Workflow_Triggers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workflow_Triggers_ManyArgs = {
  updates: Array<Workflow_Triggers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorkflowsArgs = {
  _append?: InputMaybe<Workflows_Append_Input>;
  _delete_at_path?: InputMaybe<Workflows_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflows_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflows_Delete_Key_Input>;
  _prepend?: InputMaybe<Workflows_Prepend_Input>;
  _set?: InputMaybe<Workflows_Set_Input>;
  where: Workflows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workflows_By_PkArgs = {
  _append?: InputMaybe<Workflows_Append_Input>;
  _delete_at_path?: InputMaybe<Workflows_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Workflows_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Workflows_Delete_Key_Input>;
  _prepend?: InputMaybe<Workflows_Prepend_Input>;
  _set?: InputMaybe<Workflows_Set_Input>;
  pk_columns: Workflows_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workflows_ManyArgs = {
  updates: Array<Workflows_Updates>;
};

/** columns and relationships of "nowpayments_txns" */
export type Nowpayments_Txns = {
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  payin_address: Scalars['String']['output'];
  payin_amount: Scalars['numeric']['output'];
  payin_currency: Scalars['String']['output'];
  payin_memo?: Maybe<Scalars['String']['output']>;
  payin_network: Scalars['String']['output'];
  payment_id: Scalars['String']['output'];
  payment_valid_until: Scalars['timestamptz']['output'];
  top_up_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user_topup: User_Topups;
};


/** columns and relationships of "nowpayments_txns" */
export type Nowpayments_TxnsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "nowpayments_txns" */
export type Nowpayments_Txns_Aggregate = {
  aggregate?: Maybe<Nowpayments_Txns_Aggregate_Fields>;
  nodes: Array<Nowpayments_Txns>;
};

/** aggregate fields of "nowpayments_txns" */
export type Nowpayments_Txns_Aggregate_Fields = {
  avg?: Maybe<Nowpayments_Txns_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Nowpayments_Txns_Max_Fields>;
  min?: Maybe<Nowpayments_Txns_Min_Fields>;
  stddev?: Maybe<Nowpayments_Txns_Stddev_Fields>;
  stddev_pop?: Maybe<Nowpayments_Txns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nowpayments_Txns_Stddev_Samp_Fields>;
  sum?: Maybe<Nowpayments_Txns_Sum_Fields>;
  var_pop?: Maybe<Nowpayments_Txns_Var_Pop_Fields>;
  var_samp?: Maybe<Nowpayments_Txns_Var_Samp_Fields>;
  variance?: Maybe<Nowpayments_Txns_Variance_Fields>;
};


/** aggregate fields of "nowpayments_txns" */
export type Nowpayments_Txns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nowpayments_Txns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Nowpayments_Txns_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Nowpayments_Txns_Avg_Fields = {
  payin_amount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "nowpayments_txns". All fields are combined with a logical 'AND'. */
export type Nowpayments_Txns_Bool_Exp = {
  _and?: InputMaybe<Array<Nowpayments_Txns_Bool_Exp>>;
  _not?: InputMaybe<Nowpayments_Txns_Bool_Exp>;
  _or?: InputMaybe<Array<Nowpayments_Txns_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  payin_address?: InputMaybe<String_Comparison_Exp>;
  payin_amount?: InputMaybe<Numeric_Comparison_Exp>;
  payin_currency?: InputMaybe<String_Comparison_Exp>;
  payin_memo?: InputMaybe<String_Comparison_Exp>;
  payin_network?: InputMaybe<String_Comparison_Exp>;
  payment_id?: InputMaybe<String_Comparison_Exp>;
  payment_valid_until?: InputMaybe<Timestamptz_Comparison_Exp>;
  top_up_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_topup?: InputMaybe<User_Topups_Bool_Exp>;
};

/** unique or primary key constraints on table "nowpayments_txns" */
export type Nowpayments_Txns_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'nowpayments_txns_pkey'
  /** unique or primary key constraint on columns "top_up_id" */
  | 'nowpayments_txns_top_up_id_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Nowpayments_Txns_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Nowpayments_Txns_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Nowpayments_Txns_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "nowpayments_txns" */
export type Nowpayments_Txns_Inc_Input = {
  payin_amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "nowpayments_txns" */
export type Nowpayments_Txns_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  payin_address?: InputMaybe<Scalars['String']['input']>;
  payin_amount?: InputMaybe<Scalars['numeric']['input']>;
  payin_currency?: InputMaybe<Scalars['String']['input']>;
  payin_memo?: InputMaybe<Scalars['String']['input']>;
  payin_network?: InputMaybe<Scalars['String']['input']>;
  payment_id?: InputMaybe<Scalars['String']['input']>;
  payment_valid_until?: InputMaybe<Scalars['timestamptz']['input']>;
  top_up_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_topup?: InputMaybe<User_Topups_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Nowpayments_Txns_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payin_address?: Maybe<Scalars['String']['output']>;
  payin_amount?: Maybe<Scalars['numeric']['output']>;
  payin_currency?: Maybe<Scalars['String']['output']>;
  payin_memo?: Maybe<Scalars['String']['output']>;
  payin_network?: Maybe<Scalars['String']['output']>;
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_valid_until?: Maybe<Scalars['timestamptz']['output']>;
  top_up_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Nowpayments_Txns_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payin_address?: Maybe<Scalars['String']['output']>;
  payin_amount?: Maybe<Scalars['numeric']['output']>;
  payin_currency?: Maybe<Scalars['String']['output']>;
  payin_memo?: Maybe<Scalars['String']['output']>;
  payin_network?: Maybe<Scalars['String']['output']>;
  payment_id?: Maybe<Scalars['String']['output']>;
  payment_valid_until?: Maybe<Scalars['timestamptz']['output']>;
  top_up_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "nowpayments_txns" */
export type Nowpayments_Txns_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Nowpayments_Txns>;
};

/** input type for inserting object relation for remote table "nowpayments_txns" */
export type Nowpayments_Txns_Obj_Rel_Insert_Input = {
  data: Nowpayments_Txns_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Nowpayments_Txns_On_Conflict>;
};

/** on_conflict condition type for table "nowpayments_txns" */
export type Nowpayments_Txns_On_Conflict = {
  constraint: Nowpayments_Txns_Constraint;
  update_columns?: Array<Nowpayments_Txns_Update_Column>;
  where?: InputMaybe<Nowpayments_Txns_Bool_Exp>;
};

/** Ordering options when selecting data from "nowpayments_txns". */
export type Nowpayments_Txns_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  payin_address?: InputMaybe<Order_By>;
  payin_amount?: InputMaybe<Order_By>;
  payin_currency?: InputMaybe<Order_By>;
  payin_memo?: InputMaybe<Order_By>;
  payin_network?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_valid_until?: InputMaybe<Order_By>;
  top_up_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_topup?: InputMaybe<User_Topups_Order_By>;
};

/** primary key columns input for table: nowpayments_txns */
export type Nowpayments_Txns_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Nowpayments_Txns_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "nowpayments_txns" */
export type Nowpayments_Txns_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'payin_address'
  /** column name */
  | 'payin_amount'
  /** column name */
  | 'payin_currency'
  /** column name */
  | 'payin_memo'
  /** column name */
  | 'payin_network'
  /** column name */
  | 'payment_id'
  /** column name */
  | 'payment_valid_until'
  /** column name */
  | 'top_up_id'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "nowpayments_txns" */
export type Nowpayments_Txns_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  payin_address?: InputMaybe<Scalars['String']['input']>;
  payin_amount?: InputMaybe<Scalars['numeric']['input']>;
  payin_currency?: InputMaybe<Scalars['String']['input']>;
  payin_memo?: InputMaybe<Scalars['String']['input']>;
  payin_network?: InputMaybe<Scalars['String']['input']>;
  payment_id?: InputMaybe<Scalars['String']['input']>;
  payment_valid_until?: InputMaybe<Scalars['timestamptz']['input']>;
  top_up_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Nowpayments_Txns_Stddev_Fields = {
  payin_amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Nowpayments_Txns_Stddev_Pop_Fields = {
  payin_amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Nowpayments_Txns_Stddev_Samp_Fields = {
  payin_amount?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "nowpayments_txns" */
export type Nowpayments_Txns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Nowpayments_Txns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Nowpayments_Txns_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  payin_address?: InputMaybe<Scalars['String']['input']>;
  payin_amount?: InputMaybe<Scalars['numeric']['input']>;
  payin_currency?: InputMaybe<Scalars['String']['input']>;
  payin_memo?: InputMaybe<Scalars['String']['input']>;
  payin_network?: InputMaybe<Scalars['String']['input']>;
  payment_id?: InputMaybe<Scalars['String']['input']>;
  payment_valid_until?: InputMaybe<Scalars['timestamptz']['input']>;
  top_up_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Nowpayments_Txns_Sum_Fields = {
  payin_amount?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "nowpayments_txns" */
export type Nowpayments_Txns_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'payin_address'
  /** column name */
  | 'payin_amount'
  /** column name */
  | 'payin_currency'
  /** column name */
  | 'payin_memo'
  /** column name */
  | 'payin_network'
  /** column name */
  | 'payment_id'
  /** column name */
  | 'payment_valid_until'
  /** column name */
  | 'top_up_id'
  /** column name */
  | 'updated_at';

export type Nowpayments_Txns_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Nowpayments_Txns_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Nowpayments_Txns_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Nowpayments_Txns_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Nowpayments_Txns_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Nowpayments_Txns_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Nowpayments_Txns_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Nowpayments_Txns_Set_Input>;
  /** filter the rows which have to be updated */
  where: Nowpayments_Txns_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Nowpayments_Txns_Var_Pop_Fields = {
  payin_amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Nowpayments_Txns_Var_Samp_Fields = {
  payin_amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Nowpayments_Txns_Variance_Fields = {
  payin_amount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  /** fetch data from the table: "components" */
  components: Array<Components>;
  /** fetch aggregated fields from the table: "components" */
  components_aggregate: Components_Aggregate;
  /** fetch data from the table: "components" using primary key columns */
  components_by_pk?: Maybe<Components>;
  /** fetch data from the table: "nowpayments_txns" */
  nowpayments_txns: Array<Nowpayments_Txns>;
  /** fetch aggregated fields from the table: "nowpayments_txns" */
  nowpayments_txns_aggregate: Nowpayments_Txns_Aggregate;
  /** fetch data from the table: "nowpayments_txns" using primary key columns */
  nowpayments_txns_by_pk?: Maybe<Nowpayments_Txns>;
  /** An array relationship */
  run_logs: Array<Run_Logs>;
  /** An aggregate relationship */
  run_logs_aggregate: Run_Logs_Aggregate;
  /** fetch data from the table: "run_logs" using primary key columns */
  run_logs_by_pk?: Maybe<Run_Logs>;
  /** fetch data from the table: "user_topups" */
  user_topups: Array<User_Topups>;
  /** fetch aggregated fields from the table: "user_topups" */
  user_topups_aggregate: User_Topups_Aggregate;
  /** fetch data from the table: "user_topups" using primary key columns */
  user_topups_by_pk?: Maybe<User_Topups>;
  /** fetch data from the table: "user_turnkey_api_keys" */
  user_turnkey_api_keys: Array<User_Turnkey_Api_Keys>;
  /** fetch aggregated fields from the table: "user_turnkey_api_keys" */
  user_turnkey_api_keys_aggregate: User_Turnkey_Api_Keys_Aggregate;
  /** fetch data from the table: "user_turnkey_api_keys" using primary key columns */
  user_turnkey_api_keys_by_pk?: Maybe<User_Turnkey_Api_Keys>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users_2fa" */
  users_2fa: Array<Users_2fa>;
  /** fetch aggregated fields from the table: "users_2fa" */
  users_2fa_aggregate: Users_2fa_Aggregate;
  /** fetch data from the table: "users_2fa" using primary key columns */
  users_2fa_by_pk?: Maybe<Users_2fa>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_wallet" */
  users_wallet: Array<Users_Wallet>;
  /** fetch aggregated fields from the table: "users_wallet" */
  users_wallet_aggregate: Users_Wallet_Aggregate;
  /** fetch data from the table: "users_wallet" using primary key columns */
  users_wallet_by_pk?: Maybe<Users_Wallet>;
  /** fetch data from the table: "wallet_accounts" */
  wallet_accounts: Array<Wallet_Accounts>;
  /** fetch aggregated fields from the table: "wallet_accounts" */
  wallet_accounts_aggregate: Wallet_Accounts_Aggregate;
  /** fetch data from the table: "wallet_accounts" using primary key columns */
  wallet_accounts_by_pk?: Maybe<Wallet_Accounts>;
  /** An array relationship */
  workflow_nodes: Array<Workflow_Nodes>;
  /** An aggregate relationship */
  workflow_nodes_aggregate: Workflow_Nodes_Aggregate;
  /** fetch data from the table: "workflow_nodes" using primary key columns */
  workflow_nodes_by_pk?: Maybe<Workflow_Nodes>;
  /** fetch data from the table: "workflow_runs" */
  workflow_runs: Array<Workflow_Runs>;
  /** fetch aggregated fields from the table: "workflow_runs" */
  workflow_runs_aggregate: Workflow_Runs_Aggregate;
  /** fetch data from the table: "workflow_runs" using primary key columns */
  workflow_runs_by_pk?: Maybe<Workflow_Runs>;
  /** An array relationship */
  workflow_triggers: Array<Workflow_Triggers>;
  /** An aggregate relationship */
  workflow_triggers_aggregate: Workflow_Triggers_Aggregate;
  /** fetch data from the table: "workflow_triggers" using primary key columns */
  workflow_triggers_by_pk?: Maybe<Workflow_Triggers>;
  /** An array relationship */
  workflows: Array<Workflows>;
  /** An aggregate relationship */
  workflows_aggregate: Workflows_Aggregate;
  /** fetch data from the table: "workflows" using primary key columns */
  workflows_by_pk?: Maybe<Workflows>;
};


export type Query_RootComponentsArgs = {
  distinct_on?: InputMaybe<Array<Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Components_Order_By>>;
  where?: InputMaybe<Components_Bool_Exp>;
};


export type Query_RootComponents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Components_Order_By>>;
  where?: InputMaybe<Components_Bool_Exp>;
};


export type Query_RootComponents_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNowpayments_TxnsArgs = {
  distinct_on?: InputMaybe<Array<Nowpayments_Txns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nowpayments_Txns_Order_By>>;
  where?: InputMaybe<Nowpayments_Txns_Bool_Exp>;
};


export type Query_RootNowpayments_Txns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nowpayments_Txns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nowpayments_Txns_Order_By>>;
  where?: InputMaybe<Nowpayments_Txns_Bool_Exp>;
};


export type Query_RootNowpayments_Txns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRun_LogsArgs = {
  distinct_on?: InputMaybe<Array<Run_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Run_Logs_Order_By>>;
  where?: InputMaybe<Run_Logs_Bool_Exp>;
};


export type Query_RootRun_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Run_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Run_Logs_Order_By>>;
  where?: InputMaybe<Run_Logs_Bool_Exp>;
};


export type Query_RootRun_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_TopupsArgs = {
  distinct_on?: InputMaybe<Array<User_Topups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Topups_Order_By>>;
  where?: InputMaybe<User_Topups_Bool_Exp>;
};


export type Query_RootUser_Topups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Topups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Topups_Order_By>>;
  where?: InputMaybe<User_Topups_Bool_Exp>;
};


export type Query_RootUser_Topups_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_Turnkey_Api_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Turnkey_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Turnkey_Api_Keys_Order_By>>;
  where?: InputMaybe<User_Turnkey_Api_Keys_Bool_Exp>;
};


export type Query_RootUser_Turnkey_Api_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Turnkey_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Turnkey_Api_Keys_Order_By>>;
  where?: InputMaybe<User_Turnkey_Api_Keys_Bool_Exp>;
};


export type Query_RootUser_Turnkey_Api_Keys_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_2faArgs = {
  distinct_on?: InputMaybe<Array<Users_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_2fa_Order_By>>;
  where?: InputMaybe<Users_2fa_Bool_Exp>;
};


export type Query_RootUsers_2fa_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_2fa_Order_By>>;
  where?: InputMaybe<Users_2fa_Bool_Exp>;
};


export type Query_RootUsers_2fa_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsers_WalletArgs = {
  distinct_on?: InputMaybe<Array<Users_Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Wallet_Order_By>>;
  where?: InputMaybe<Users_Wallet_Bool_Exp>;
};


export type Query_RootUsers_Wallet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Wallet_Order_By>>;
  where?: InputMaybe<Users_Wallet_Bool_Exp>;
};


export type Query_RootUsers_Wallet_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWallet_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wallet_Accounts_Order_By>>;
  where?: InputMaybe<Wallet_Accounts_Bool_Exp>;
};


export type Query_RootWallet_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wallet_Accounts_Order_By>>;
  where?: InputMaybe<Wallet_Accounts_Bool_Exp>;
};


export type Query_RootWallet_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorkflow_NodesArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Nodes_Order_By>>;
  where?: InputMaybe<Workflow_Nodes_Bool_Exp>;
};


export type Query_RootWorkflow_Nodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Nodes_Order_By>>;
  where?: InputMaybe<Workflow_Nodes_Bool_Exp>;
};


export type Query_RootWorkflow_Nodes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorkflow_RunsArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Runs_Order_By>>;
  where?: InputMaybe<Workflow_Runs_Bool_Exp>;
};


export type Query_RootWorkflow_Runs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Runs_Order_By>>;
  where?: InputMaybe<Workflow_Runs_Bool_Exp>;
};


export type Query_RootWorkflow_Runs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorkflow_TriggersArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Triggers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Triggers_Order_By>>;
  where?: InputMaybe<Workflow_Triggers_Bool_Exp>;
};


export type Query_RootWorkflow_Triggers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Triggers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Triggers_Order_By>>;
  where?: InputMaybe<Workflow_Triggers_Bool_Exp>;
};


export type Query_RootWorkflow_Triggers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWorkflowsArgs = {
  distinct_on?: InputMaybe<Array<Workflows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflows_Order_By>>;
  where?: InputMaybe<Workflows_Bool_Exp>;
};


export type Query_RootWorkflows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflows_Order_By>>;
  where?: InputMaybe<Workflows_Bool_Exp>;
};


export type Query_RootWorkflows_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "run_logs" */
export type Run_Logs = {
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  component: Components;
  component_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  input: Scalars['jsonb']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  output: Scalars['jsonb']['output'];
  /** An object relationship */
  run: Workflow_Runs;
  run_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "run_logs" */
export type Run_LogsInputArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "run_logs" */
export type Run_LogsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "run_logs" */
export type Run_LogsOutputArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "run_logs" */
export type Run_Logs_Aggregate = {
  aggregate?: Maybe<Run_Logs_Aggregate_Fields>;
  nodes: Array<Run_Logs>;
};

export type Run_Logs_Aggregate_Bool_Exp = {
  count?: InputMaybe<Run_Logs_Aggregate_Bool_Exp_Count>;
};

export type Run_Logs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Run_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Run_Logs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "run_logs" */
export type Run_Logs_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Run_Logs_Max_Fields>;
  min?: Maybe<Run_Logs_Min_Fields>;
};


/** aggregate fields of "run_logs" */
export type Run_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Run_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "run_logs" */
export type Run_Logs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Run_Logs_Max_Order_By>;
  min?: InputMaybe<Run_Logs_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Run_Logs_Append_Input = {
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "run_logs" */
export type Run_Logs_Arr_Rel_Insert_Input = {
  data: Array<Run_Logs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Run_Logs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "run_logs". All fields are combined with a logical 'AND'. */
export type Run_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Run_Logs_Bool_Exp>>;
  _not?: InputMaybe<Run_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Run_Logs_Bool_Exp>>;
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  component?: InputMaybe<Components_Bool_Exp>;
  component_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  error?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  input?: InputMaybe<Jsonb_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  output?: InputMaybe<Jsonb_Comparison_Exp>;
  run?: InputMaybe<Workflow_Runs_Bool_Exp>;
  run_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "run_logs" */
export type Run_Logs_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'run_logs_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Run_Logs_Delete_At_Path_Input = {
  input?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
  output?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Run_Logs_Delete_Elem_Input = {
  input?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['Int']['input']>;
  output?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Run_Logs_Delete_Key_Input = {
  input?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  output?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "run_logs" */
export type Run_Logs_Insert_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  component?: InputMaybe<Components_Obj_Rel_Insert_Input>;
  component_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
  run?: InputMaybe<Workflow_Runs_Obj_Rel_Insert_Input>;
  run_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Run_Logs_Max_Fields = {
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  component_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  run_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "run_logs" */
export type Run_Logs_Max_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  component_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  run_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Run_Logs_Min_Fields = {
  completed_at?: Maybe<Scalars['timestamptz']['output']>;
  component_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  run_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "run_logs" */
export type Run_Logs_Min_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  component_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  run_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "run_logs" */
export type Run_Logs_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Run_Logs>;
};

/** on_conflict condition type for table "run_logs" */
export type Run_Logs_On_Conflict = {
  constraint: Run_Logs_Constraint;
  update_columns?: Array<Run_Logs_Update_Column>;
  where?: InputMaybe<Run_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "run_logs". */
export type Run_Logs_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  component?: InputMaybe<Components_Order_By>;
  component_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  output?: InputMaybe<Order_By>;
  run?: InputMaybe<Workflow_Runs_Order_By>;
  run_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: run_logs */
export type Run_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Run_Logs_Prepend_Input = {
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "run_logs" */
export type Run_Logs_Select_Column =
  /** column name */
  | 'completed_at'
  /** column name */
  | 'component_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'error'
  /** column name */
  | 'id'
  /** column name */
  | 'input'
  /** column name */
  | 'metadata'
  /** column name */
  | 'output'
  /** column name */
  | 'run_id'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "run_logs" */
export type Run_Logs_Set_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  component_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
  run_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "run_logs" */
export type Run_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Run_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Run_Logs_Stream_Cursor_Value_Input = {
  completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  component_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  output?: InputMaybe<Scalars['jsonb']['input']>;
  run_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "run_logs" */
export type Run_Logs_Update_Column =
  /** column name */
  | 'completed_at'
  /** column name */
  | 'component_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'error'
  /** column name */
  | 'id'
  /** column name */
  | 'input'
  /** column name */
  | 'metadata'
  /** column name */
  | 'output'
  /** column name */
  | 'run_id'
  /** column name */
  | 'updated_at';

export type Run_Logs_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Run_Logs_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Run_Logs_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Run_Logs_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Run_Logs_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Run_Logs_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Run_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Run_Logs_Bool_Exp;
};

export type Subscription_Root = {
  /** fetch data from the table: "components" */
  components: Array<Components>;
  /** fetch aggregated fields from the table: "components" */
  components_aggregate: Components_Aggregate;
  /** fetch data from the table: "components" using primary key columns */
  components_by_pk?: Maybe<Components>;
  /** fetch data from the table in a streaming manner: "components" */
  components_stream: Array<Components>;
  /** fetch data from the table: "nowpayments_txns" */
  nowpayments_txns: Array<Nowpayments_Txns>;
  /** fetch aggregated fields from the table: "nowpayments_txns" */
  nowpayments_txns_aggregate: Nowpayments_Txns_Aggregate;
  /** fetch data from the table: "nowpayments_txns" using primary key columns */
  nowpayments_txns_by_pk?: Maybe<Nowpayments_Txns>;
  /** fetch data from the table in a streaming manner: "nowpayments_txns" */
  nowpayments_txns_stream: Array<Nowpayments_Txns>;
  /** An array relationship */
  run_logs: Array<Run_Logs>;
  /** An aggregate relationship */
  run_logs_aggregate: Run_Logs_Aggregate;
  /** fetch data from the table: "run_logs" using primary key columns */
  run_logs_by_pk?: Maybe<Run_Logs>;
  /** fetch data from the table in a streaming manner: "run_logs" */
  run_logs_stream: Array<Run_Logs>;
  /** fetch data from the table: "user_topups" */
  user_topups: Array<User_Topups>;
  /** fetch aggregated fields from the table: "user_topups" */
  user_topups_aggregate: User_Topups_Aggregate;
  /** fetch data from the table: "user_topups" using primary key columns */
  user_topups_by_pk?: Maybe<User_Topups>;
  /** fetch data from the table in a streaming manner: "user_topups" */
  user_topups_stream: Array<User_Topups>;
  /** fetch data from the table: "user_turnkey_api_keys" */
  user_turnkey_api_keys: Array<User_Turnkey_Api_Keys>;
  /** fetch aggregated fields from the table: "user_turnkey_api_keys" */
  user_turnkey_api_keys_aggregate: User_Turnkey_Api_Keys_Aggregate;
  /** fetch data from the table: "user_turnkey_api_keys" using primary key columns */
  user_turnkey_api_keys_by_pk?: Maybe<User_Turnkey_Api_Keys>;
  /** fetch data from the table in a streaming manner: "user_turnkey_api_keys" */
  user_turnkey_api_keys_stream: Array<User_Turnkey_Api_Keys>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users_2fa" */
  users_2fa: Array<Users_2fa>;
  /** fetch aggregated fields from the table: "users_2fa" */
  users_2fa_aggregate: Users_2fa_Aggregate;
  /** fetch data from the table: "users_2fa" using primary key columns */
  users_2fa_by_pk?: Maybe<Users_2fa>;
  /** fetch data from the table in a streaming manner: "users_2fa" */
  users_2fa_stream: Array<Users_2fa>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "users_wallet" */
  users_wallet: Array<Users_Wallet>;
  /** fetch aggregated fields from the table: "users_wallet" */
  users_wallet_aggregate: Users_Wallet_Aggregate;
  /** fetch data from the table: "users_wallet" using primary key columns */
  users_wallet_by_pk?: Maybe<Users_Wallet>;
  /** fetch data from the table in a streaming manner: "users_wallet" */
  users_wallet_stream: Array<Users_Wallet>;
  /** fetch data from the table: "wallet_accounts" */
  wallet_accounts: Array<Wallet_Accounts>;
  /** fetch aggregated fields from the table: "wallet_accounts" */
  wallet_accounts_aggregate: Wallet_Accounts_Aggregate;
  /** fetch data from the table: "wallet_accounts" using primary key columns */
  wallet_accounts_by_pk?: Maybe<Wallet_Accounts>;
  /** fetch data from the table in a streaming manner: "wallet_accounts" */
  wallet_accounts_stream: Array<Wallet_Accounts>;
  /** An array relationship */
  workflow_nodes: Array<Workflow_Nodes>;
  /** An aggregate relationship */
  workflow_nodes_aggregate: Workflow_Nodes_Aggregate;
  /** fetch data from the table: "workflow_nodes" using primary key columns */
  workflow_nodes_by_pk?: Maybe<Workflow_Nodes>;
  /** fetch data from the table in a streaming manner: "workflow_nodes" */
  workflow_nodes_stream: Array<Workflow_Nodes>;
  /** fetch data from the table: "workflow_runs" */
  workflow_runs: Array<Workflow_Runs>;
  /** fetch aggregated fields from the table: "workflow_runs" */
  workflow_runs_aggregate: Workflow_Runs_Aggregate;
  /** fetch data from the table: "workflow_runs" using primary key columns */
  workflow_runs_by_pk?: Maybe<Workflow_Runs>;
  /** fetch data from the table in a streaming manner: "workflow_runs" */
  workflow_runs_stream: Array<Workflow_Runs>;
  /** An array relationship */
  workflow_triggers: Array<Workflow_Triggers>;
  /** An aggregate relationship */
  workflow_triggers_aggregate: Workflow_Triggers_Aggregate;
  /** fetch data from the table: "workflow_triggers" using primary key columns */
  workflow_triggers_by_pk?: Maybe<Workflow_Triggers>;
  /** fetch data from the table in a streaming manner: "workflow_triggers" */
  workflow_triggers_stream: Array<Workflow_Triggers>;
  /** An array relationship */
  workflows: Array<Workflows>;
  /** An aggregate relationship */
  workflows_aggregate: Workflows_Aggregate;
  /** fetch data from the table: "workflows" using primary key columns */
  workflows_by_pk?: Maybe<Workflows>;
  /** fetch data from the table in a streaming manner: "workflows" */
  workflows_stream: Array<Workflows>;
};


export type Subscription_RootComponentsArgs = {
  distinct_on?: InputMaybe<Array<Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Components_Order_By>>;
  where?: InputMaybe<Components_Bool_Exp>;
};


export type Subscription_RootComponents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Components_Order_By>>;
  where?: InputMaybe<Components_Bool_Exp>;
};


export type Subscription_RootComponents_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootComponents_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Components_Stream_Cursor_Input>>;
  where?: InputMaybe<Components_Bool_Exp>;
};


export type Subscription_RootNowpayments_TxnsArgs = {
  distinct_on?: InputMaybe<Array<Nowpayments_Txns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nowpayments_Txns_Order_By>>;
  where?: InputMaybe<Nowpayments_Txns_Bool_Exp>;
};


export type Subscription_RootNowpayments_Txns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nowpayments_Txns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Nowpayments_Txns_Order_By>>;
  where?: InputMaybe<Nowpayments_Txns_Bool_Exp>;
};


export type Subscription_RootNowpayments_Txns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNowpayments_Txns_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Nowpayments_Txns_Stream_Cursor_Input>>;
  where?: InputMaybe<Nowpayments_Txns_Bool_Exp>;
};


export type Subscription_RootRun_LogsArgs = {
  distinct_on?: InputMaybe<Array<Run_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Run_Logs_Order_By>>;
  where?: InputMaybe<Run_Logs_Bool_Exp>;
};


export type Subscription_RootRun_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Run_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Run_Logs_Order_By>>;
  where?: InputMaybe<Run_Logs_Bool_Exp>;
};


export type Subscription_RootRun_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRun_Logs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Run_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Run_Logs_Bool_Exp>;
};


export type Subscription_RootUser_TopupsArgs = {
  distinct_on?: InputMaybe<Array<User_Topups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Topups_Order_By>>;
  where?: InputMaybe<User_Topups_Bool_Exp>;
};


export type Subscription_RootUser_Topups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Topups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Topups_Order_By>>;
  where?: InputMaybe<User_Topups_Bool_Exp>;
};


export type Subscription_RootUser_Topups_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Topups_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Topups_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Topups_Bool_Exp>;
};


export type Subscription_RootUser_Turnkey_Api_KeysArgs = {
  distinct_on?: InputMaybe<Array<User_Turnkey_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Turnkey_Api_Keys_Order_By>>;
  where?: InputMaybe<User_Turnkey_Api_Keys_Bool_Exp>;
};


export type Subscription_RootUser_Turnkey_Api_Keys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Turnkey_Api_Keys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Turnkey_Api_Keys_Order_By>>;
  where?: InputMaybe<User_Turnkey_Api_Keys_Bool_Exp>;
};


export type Subscription_RootUser_Turnkey_Api_Keys_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Turnkey_Api_Keys_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Turnkey_Api_Keys_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Turnkey_Api_Keys_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_2faArgs = {
  distinct_on?: InputMaybe<Array<Users_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_2fa_Order_By>>;
  where?: InputMaybe<Users_2fa_Bool_Exp>;
};


export type Subscription_RootUsers_2fa_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_2fa_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_2fa_Order_By>>;
  where?: InputMaybe<Users_2fa_Bool_Exp>;
};


export type Subscription_RootUsers_2fa_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_2fa_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_2fa_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_2fa_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_WalletArgs = {
  distinct_on?: InputMaybe<Array<Users_Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Wallet_Order_By>>;
  where?: InputMaybe<Users_Wallet_Bool_Exp>;
};


export type Subscription_RootUsers_Wallet_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Wallet_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Wallet_Order_By>>;
  where?: InputMaybe<Users_Wallet_Bool_Exp>;
};


export type Subscription_RootUsers_Wallet_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_Wallet_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Wallet_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Wallet_Bool_Exp>;
};


export type Subscription_RootWallet_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wallet_Accounts_Order_By>>;
  where?: InputMaybe<Wallet_Accounts_Bool_Exp>;
};


export type Subscription_RootWallet_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wallet_Accounts_Order_By>>;
  where?: InputMaybe<Wallet_Accounts_Bool_Exp>;
};


export type Subscription_RootWallet_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWallet_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Wallet_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Wallet_Accounts_Bool_Exp>;
};


export type Subscription_RootWorkflow_NodesArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Nodes_Order_By>>;
  where?: InputMaybe<Workflow_Nodes_Bool_Exp>;
};


export type Subscription_RootWorkflow_Nodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Nodes_Order_By>>;
  where?: InputMaybe<Workflow_Nodes_Bool_Exp>;
};


export type Subscription_RootWorkflow_Nodes_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorkflow_Nodes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workflow_Nodes_Stream_Cursor_Input>>;
  where?: InputMaybe<Workflow_Nodes_Bool_Exp>;
};


export type Subscription_RootWorkflow_RunsArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Runs_Order_By>>;
  where?: InputMaybe<Workflow_Runs_Bool_Exp>;
};


export type Subscription_RootWorkflow_Runs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Runs_Order_By>>;
  where?: InputMaybe<Workflow_Runs_Bool_Exp>;
};


export type Subscription_RootWorkflow_Runs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorkflow_Runs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workflow_Runs_Stream_Cursor_Input>>;
  where?: InputMaybe<Workflow_Runs_Bool_Exp>;
};


export type Subscription_RootWorkflow_TriggersArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Triggers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Triggers_Order_By>>;
  where?: InputMaybe<Workflow_Triggers_Bool_Exp>;
};


export type Subscription_RootWorkflow_Triggers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Triggers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Triggers_Order_By>>;
  where?: InputMaybe<Workflow_Triggers_Bool_Exp>;
};


export type Subscription_RootWorkflow_Triggers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorkflow_Triggers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workflow_Triggers_Stream_Cursor_Input>>;
  where?: InputMaybe<Workflow_Triggers_Bool_Exp>;
};


export type Subscription_RootWorkflowsArgs = {
  distinct_on?: InputMaybe<Array<Workflows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflows_Order_By>>;
  where?: InputMaybe<Workflows_Bool_Exp>;
};


export type Subscription_RootWorkflows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflows_Order_By>>;
  where?: InputMaybe<Workflows_Bool_Exp>;
};


export type Subscription_RootWorkflows_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootWorkflows_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workflows_Stream_Cursor_Input>>;
  where?: InputMaybe<Workflows_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_topups" */
export type User_Topups = {
  created_at: Scalars['timestamptz']['output'];
  credits: Scalars['Int']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  nowpayments_txn?: Maybe<Nowpayments_Txns>;
  reason?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "user_topups" */
export type User_TopupsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "user_topups" */
export type User_Topups_Aggregate = {
  aggregate?: Maybe<User_Topups_Aggregate_Fields>;
  nodes: Array<User_Topups>;
};

export type User_Topups_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Topups_Aggregate_Bool_Exp_Count>;
};

export type User_Topups_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Topups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Topups_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_topups" */
export type User_Topups_Aggregate_Fields = {
  avg?: Maybe<User_Topups_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Topups_Max_Fields>;
  min?: Maybe<User_Topups_Min_Fields>;
  stddev?: Maybe<User_Topups_Stddev_Fields>;
  stddev_pop?: Maybe<User_Topups_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Topups_Stddev_Samp_Fields>;
  sum?: Maybe<User_Topups_Sum_Fields>;
  var_pop?: Maybe<User_Topups_Var_Pop_Fields>;
  var_samp?: Maybe<User_Topups_Var_Samp_Fields>;
  variance?: Maybe<User_Topups_Variance_Fields>;
};


/** aggregate fields of "user_topups" */
export type User_Topups_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Topups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_topups" */
export type User_Topups_Aggregate_Order_By = {
  avg?: InputMaybe<User_Topups_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Topups_Max_Order_By>;
  min?: InputMaybe<User_Topups_Min_Order_By>;
  stddev?: InputMaybe<User_Topups_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Topups_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Topups_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Topups_Sum_Order_By>;
  var_pop?: InputMaybe<User_Topups_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Topups_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Topups_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Topups_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "user_topups" */
export type User_Topups_Arr_Rel_Insert_Input = {
  data: Array<User_Topups_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Topups_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Topups_Avg_Fields = {
  credits?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_topups" */
export type User_Topups_Avg_Order_By = {
  credits?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_topups". All fields are combined with a logical 'AND'. */
export type User_Topups_Bool_Exp = {
  _and?: InputMaybe<Array<User_Topups_Bool_Exp>>;
  _not?: InputMaybe<User_Topups_Bool_Exp>;
  _or?: InputMaybe<Array<User_Topups_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credits?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  nowpayments_txn?: InputMaybe<Nowpayments_Txns_Bool_Exp>;
  reason?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_topups" */
export type User_Topups_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_topups_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Topups_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Topups_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Topups_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "user_topups" */
export type User_Topups_Inc_Input = {
  credits?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_topups" */
export type User_Topups_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credits?: InputMaybe<Scalars['Int']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  nowpayments_txn?: InputMaybe<Nowpayments_Txns_Obj_Rel_Insert_Input>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Topups_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  credits?: Maybe<Scalars['Int']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_topups" */
export type User_Topups_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Topups_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  credits?: Maybe<Scalars['Int']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_topups" */
export type User_Topups_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reason?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_topups" */
export type User_Topups_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Topups>;
};

/** input type for inserting object relation for remote table "user_topups" */
export type User_Topups_Obj_Rel_Insert_Input = {
  data: User_Topups_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Topups_On_Conflict>;
};

/** on_conflict condition type for table "user_topups" */
export type User_Topups_On_Conflict = {
  constraint: User_Topups_Constraint;
  update_columns?: Array<User_Topups_Update_Column>;
  where?: InputMaybe<User_Topups_Bool_Exp>;
};

/** Ordering options when selecting data from "user_topups". */
export type User_Topups_Order_By = {
  created_at?: InputMaybe<Order_By>;
  credits?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  nowpayments_txn?: InputMaybe<Nowpayments_Txns_Order_By>;
  reason?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_topups */
export type User_Topups_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Topups_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "user_topups" */
export type User_Topups_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'credits'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'reason'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "user_topups" */
export type User_Topups_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credits?: InputMaybe<Scalars['Int']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type User_Topups_Stddev_Fields = {
  credits?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_topups" */
export type User_Topups_Stddev_Order_By = {
  credits?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Topups_Stddev_Pop_Fields = {
  credits?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_topups" */
export type User_Topups_Stddev_Pop_Order_By = {
  credits?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Topups_Stddev_Samp_Fields = {
  credits?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_topups" */
export type User_Topups_Stddev_Samp_Order_By = {
  credits?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_topups" */
export type User_Topups_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Topups_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Topups_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credits?: InputMaybe<Scalars['Int']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type User_Topups_Sum_Fields = {
  credits?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_topups" */
export type User_Topups_Sum_Order_By = {
  credits?: InputMaybe<Order_By>;
};

/** update columns of table "user_topups" */
export type User_Topups_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'credits'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'reason'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

export type User_Topups_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Topups_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Topups_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Topups_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Topups_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Topups_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Topups_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Topups_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Topups_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Topups_Var_Pop_Fields = {
  credits?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_topups" */
export type User_Topups_Var_Pop_Order_By = {
  credits?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Topups_Var_Samp_Fields = {
  credits?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_topups" */
export type User_Topups_Var_Samp_Order_By = {
  credits?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Topups_Variance_Fields = {
  credits?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_topups" */
export type User_Topups_Variance_Order_By = {
  credits?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys = {
  created_at: Scalars['timestamptz']['output'];
  curve_type: Scalars['String']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  name: Scalars['String']['output'];
  private_key: Scalars['String']['output'];
  public_key: Scalars['String']['output'];
  turnkey_user_id: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "user_turnkey_api_keys" */
export type User_Turnkey_Api_KeysMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Aggregate = {
  aggregate?: Maybe<User_Turnkey_Api_Keys_Aggregate_Fields>;
  nodes: Array<User_Turnkey_Api_Keys>;
};

/** aggregate fields of "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<User_Turnkey_Api_Keys_Max_Fields>;
  min?: Maybe<User_Turnkey_Api_Keys_Min_Fields>;
};


/** aggregate fields of "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Turnkey_Api_Keys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Turnkey_Api_Keys_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "user_turnkey_api_keys". All fields are combined with a logical 'AND'. */
export type User_Turnkey_Api_Keys_Bool_Exp = {
  _and?: InputMaybe<Array<User_Turnkey_Api_Keys_Bool_Exp>>;
  _not?: InputMaybe<User_Turnkey_Api_Keys_Bool_Exp>;
  _or?: InputMaybe<Array<User_Turnkey_Api_Keys_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  curve_type?: InputMaybe<String_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  private_key?: InputMaybe<String_Comparison_Exp>;
  public_key?: InputMaybe<String_Comparison_Exp>;
  turnkey_user_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'user_turnkey_api_keys_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'user_turnkey_api_keys_pkey'
  /** unique or primary key constraint on columns "turnkey_user_id" */
  | 'user_turnkey_api_keys_turnkey_user_id_key'
  /** unique or primary key constraint on columns "user_id" */
  | 'user_turnkey_api_keys_user_id_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Turnkey_Api_Keys_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Turnkey_Api_Keys_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Turnkey_Api_Keys_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  curve_type?: InputMaybe<Scalars['String']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  private_key?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  turnkey_user_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Turnkey_Api_Keys_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  curve_type?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  private_key?: Maybe<Scalars['String']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  turnkey_user_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type User_Turnkey_Api_Keys_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  curve_type?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  private_key?: Maybe<Scalars['String']['output']>;
  public_key?: Maybe<Scalars['String']['output']>;
  turnkey_user_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Turnkey_Api_Keys>;
};

/** input type for inserting object relation for remote table "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Obj_Rel_Insert_Input = {
  data: User_Turnkey_Api_Keys_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Turnkey_Api_Keys_On_Conflict>;
};

/** on_conflict condition type for table "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_On_Conflict = {
  constraint: User_Turnkey_Api_Keys_Constraint;
  update_columns?: Array<User_Turnkey_Api_Keys_Update_Column>;
  where?: InputMaybe<User_Turnkey_Api_Keys_Bool_Exp>;
};

/** Ordering options when selecting data from "user_turnkey_api_keys". */
export type User_Turnkey_Api_Keys_Order_By = {
  created_at?: InputMaybe<Order_By>;
  curve_type?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  private_key?: InputMaybe<Order_By>;
  public_key?: InputMaybe<Order_By>;
  turnkey_user_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_turnkey_api_keys */
export type User_Turnkey_Api_Keys_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Turnkey_Api_Keys_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'curve_type'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'name'
  /** column name */
  | 'private_key'
  /** column name */
  | 'public_key'
  /** column name */
  | 'turnkey_user_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  curve_type?: InputMaybe<Scalars['String']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  private_key?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  turnkey_user_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Turnkey_Api_Keys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Turnkey_Api_Keys_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  curve_type?: InputMaybe<Scalars['String']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  private_key?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['String']['input']>;
  turnkey_user_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_turnkey_api_keys" */
export type User_Turnkey_Api_Keys_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'curve_type'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'name'
  /** column name */
  | 'private_key'
  /** column name */
  | 'public_key'
  /** column name */
  | 'turnkey_user_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

export type User_Turnkey_Api_Keys_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Turnkey_Api_Keys_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Turnkey_Api_Keys_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Turnkey_Api_Keys_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Turnkey_Api_Keys_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Turnkey_Api_Keys_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Turnkey_Api_Keys_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Turnkey_Api_Keys_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  created_at: Scalars['timestamptz']['output'];
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  topups: Array<User_Topups>;
  /** An aggregate relationship */
  topups_aggregate: User_Topups_Aggregate;
  /** An object relationship */
  turnkey_api_key?: Maybe<User_Turnkey_Api_Keys>;
  /** An object relationship */
  two_fa?: Maybe<Users_2fa>;
  updated_at: Scalars['timestamp']['output'];
  version: Scalars['String']['output'];
  /** An object relationship */
  wallet?: Maybe<Users_Wallet>;
  /** An array relationship */
  workflows: Array<Workflows>;
  /** An aggregate relationship */
  workflows_aggregate: Workflows_Aggregate;
};


/** columns and relationships of "users" */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "users" */
export type UsersTopupsArgs = {
  distinct_on?: InputMaybe<Array<User_Topups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Topups_Order_By>>;
  where?: InputMaybe<User_Topups_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTopups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Topups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Topups_Order_By>>;
  where?: InputMaybe<User_Topups_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorkflowsArgs = {
  distinct_on?: InputMaybe<Array<Workflows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflows_Order_By>>;
  where?: InputMaybe<Workflows_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWorkflows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflows_Order_By>>;
  where?: InputMaybe<Workflows_Bool_Exp>;
};

/** columns and relationships of "users_2fa" */
export type Users_2fa = {
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  encoding: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  is_verified: Scalars['Boolean']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  secret: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "users_2fa" */
export type Users_2faMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "users_2fa" */
export type Users_2fa_Aggregate = {
  aggregate?: Maybe<Users_2fa_Aggregate_Fields>;
  nodes: Array<Users_2fa>;
};

/** aggregate fields of "users_2fa" */
export type Users_2fa_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Users_2fa_Max_Fields>;
  min?: Maybe<Users_2fa_Min_Fields>;
};


/** aggregate fields of "users_2fa" */
export type Users_2fa_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_2fa_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_2fa_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "users_2fa". All fields are combined with a logical 'AND'. */
export type Users_2fa_Bool_Exp = {
  _and?: InputMaybe<Array<Users_2fa_Bool_Exp>>;
  _not?: InputMaybe<Users_2fa_Bool_Exp>;
  _or?: InputMaybe<Array<Users_2fa_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encoding?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_verified?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  secret?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_2fa" */
export type Users_2fa_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'users_2fa_pkey'
  /** unique or primary key constraint on columns "user_id" */
  | 'users_2fa_user_id_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_2fa_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_2fa_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_2fa_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "users_2fa" */
export type Users_2fa_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encoding?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_verified?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Users_2fa_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  encoding?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Users_2fa_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  encoding?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "users_2fa" */
export type Users_2fa_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_2fa>;
};

/** input type for inserting object relation for remote table "users_2fa" */
export type Users_2fa_Obj_Rel_Insert_Input = {
  data: Users_2fa_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_2fa_On_Conflict>;
};

/** on_conflict condition type for table "users_2fa" */
export type Users_2fa_On_Conflict = {
  constraint: Users_2fa_Constraint;
  update_columns?: Array<Users_2fa_Update_Column>;
  where?: InputMaybe<Users_2fa_Bool_Exp>;
};

/** Ordering options when selecting data from "users_2fa". */
export type Users_2fa_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  encoding?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_verified?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  secret?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_2fa */
export type Users_2fa_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_2fa_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "users_2fa" */
export type Users_2fa_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'encoding'
  /** column name */
  | 'id'
  /** column name */
  | 'is_verified'
  /** column name */
  | 'metadata'
  /** column name */
  | 'secret'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "users_2fa" */
export type Users_2fa_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encoding?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_verified?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "users_2fa" */
export type Users_2fa_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_2fa_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_2fa_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encoding?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_verified?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  secret?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "users_2fa" */
export type Users_2fa_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'encoding'
  /** column name */
  | 'id'
  /** column name */
  | 'is_verified'
  /** column name */
  | 'metadata'
  /** column name */
  | 'secret'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

export type Users_2fa_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_2fa_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_2fa_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_2fa_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_2fa_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_2fa_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_2fa_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_2fa_Bool_Exp;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_balance?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  topups?: InputMaybe<User_Topups_Bool_Exp>;
  topups_aggregate?: InputMaybe<User_Topups_Aggregate_Bool_Exp>;
  turnkey_api_key?: InputMaybe<User_Turnkey_Api_Keys_Bool_Exp>;
  two_fa?: InputMaybe<Users_2fa_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
  wallet?: InputMaybe<Users_Wallet_Bool_Exp>;
  workflows?: InputMaybe<Workflows_Bool_Exp>;
  workflows_aggregate?: InputMaybe<Workflows_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'users_email_key'
  /** unique or primary key constraint on columns "id" */
  | 'users_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'users_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  topups?: InputMaybe<User_Topups_Arr_Rel_Insert_Input>;
  turnkey_api_key?: InputMaybe<User_Turnkey_Api_Keys_Obj_Rel_Insert_Input>;
  two_fa?: InputMaybe<Users_2fa_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  wallet?: InputMaybe<Users_Wallet_Obj_Rel_Insert_Input>;
  workflows?: InputMaybe<Workflows_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  credit_balance?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  topups_aggregate?: InputMaybe<User_Topups_Aggregate_Order_By>;
  turnkey_api_key?: InputMaybe<User_Turnkey_Api_Keys_Order_By>;
  two_fa?: InputMaybe<Users_2fa_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  wallet?: InputMaybe<Users_Wallet_Order_By>;
  workflows_aggregate?: InputMaybe<Workflows_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "users" */
export type Users_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'name'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'version';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export type Users_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'name'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'version';

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  /** A computed field, executes function "user_credit_balance" */
  credit_balance?: Maybe<Scalars['Int']['output']>;
};

/** columns and relationships of "users_wallet" */
export type Users_Wallet = {
  /** An array relationship */
  accounts: Array<Wallet_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Wallet_Accounts_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  name: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  provider_id: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "users_wallet" */
export type Users_WalletAccountsArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wallet_Accounts_Order_By>>;
  where?: InputMaybe<Wallet_Accounts_Bool_Exp>;
};


/** columns and relationships of "users_wallet" */
export type Users_WalletAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallet_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wallet_Accounts_Order_By>>;
  where?: InputMaybe<Wallet_Accounts_Bool_Exp>;
};


/** columns and relationships of "users_wallet" */
export type Users_WalletMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "users_wallet" */
export type Users_Wallet_Aggregate = {
  aggregate?: Maybe<Users_Wallet_Aggregate_Fields>;
  nodes: Array<Users_Wallet>;
};

/** aggregate fields of "users_wallet" */
export type Users_Wallet_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Wallet_Max_Fields>;
  min?: Maybe<Users_Wallet_Min_Fields>;
};


/** aggregate fields of "users_wallet" */
export type Users_Wallet_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Wallet_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Wallet_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "users_wallet". All fields are combined with a logical 'AND'. */
export type Users_Wallet_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Wallet_Bool_Exp>>;
  _not?: InputMaybe<Users_Wallet_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Wallet_Bool_Exp>>;
  accounts?: InputMaybe<Wallet_Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Wallet_Accounts_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  provider_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_wallet" */
export type Users_Wallet_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'users_wallet_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'users_wallet_pkey'
  /** unique or primary key constraint on columns "provider", "provider_id" */
  | 'users_wallet_provider_provider_id_key'
  /** unique or primary key constraint on columns "user_id" */
  | 'users_wallet_user_id_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Wallet_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Wallet_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Wallet_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "users_wallet" */
export type Users_Wallet_Insert_Input = {
  accounts?: InputMaybe<Wallet_Accounts_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Users_Wallet_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Users_Wallet_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "users_wallet" */
export type Users_Wallet_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Wallet>;
};

/** input type for inserting object relation for remote table "users_wallet" */
export type Users_Wallet_Obj_Rel_Insert_Input = {
  data: Users_Wallet_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_Wallet_On_Conflict>;
};

/** on_conflict condition type for table "users_wallet" */
export type Users_Wallet_On_Conflict = {
  constraint: Users_Wallet_Constraint;
  update_columns?: Array<Users_Wallet_Update_Column>;
  where?: InputMaybe<Users_Wallet_Bool_Exp>;
};

/** Ordering options when selecting data from "users_wallet". */
export type Users_Wallet_Order_By = {
  accounts_aggregate?: InputMaybe<Wallet_Accounts_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_wallet */
export type Users_Wallet_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Wallet_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "users_wallet" */
export type Users_Wallet_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'name'
  /** column name */
  | 'provider'
  /** column name */
  | 'provider_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "users_wallet" */
export type Users_Wallet_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "users_wallet" */
export type Users_Wallet_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Wallet_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Wallet_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "users_wallet" */
export type Users_Wallet_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'name'
  /** column name */
  | 'provider'
  /** column name */
  | 'provider_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

export type Users_Wallet_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Wallet_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Wallet_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Wallet_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Wallet_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Wallet_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Wallet_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Wallet_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "wallet_accounts" */
export type Wallet_Accounts = {
  address: Scalars['String']['output'];
  blockchain: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  wallet: Users_Wallet;
  wallet_id: Scalars['uuid']['output'];
};


/** columns and relationships of "wallet_accounts" */
export type Wallet_AccountsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "wallet_accounts" */
export type Wallet_Accounts_Aggregate = {
  aggregate?: Maybe<Wallet_Accounts_Aggregate_Fields>;
  nodes: Array<Wallet_Accounts>;
};

export type Wallet_Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Wallet_Accounts_Aggregate_Bool_Exp_Count>;
};

export type Wallet_Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Wallet_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Wallet_Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "wallet_accounts" */
export type Wallet_Accounts_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Wallet_Accounts_Max_Fields>;
  min?: Maybe<Wallet_Accounts_Min_Fields>;
};


/** aggregate fields of "wallet_accounts" */
export type Wallet_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wallet_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "wallet_accounts" */
export type Wallet_Accounts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Wallet_Accounts_Max_Order_By>;
  min?: InputMaybe<Wallet_Accounts_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Wallet_Accounts_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "wallet_accounts" */
export type Wallet_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Wallet_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Wallet_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "wallet_accounts". All fields are combined with a logical 'AND'. */
export type Wallet_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Wallet_Accounts_Bool_Exp>>;
  _not?: InputMaybe<Wallet_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Wallet_Accounts_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  blockchain?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  wallet?: InputMaybe<Users_Wallet_Bool_Exp>;
  wallet_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "wallet_accounts" */
export type Wallet_Accounts_Constraint =
  /** unique or primary key constraint on columns "address" */
  | 'wallet_accounts_address_key'
  /** unique or primary key constraint on columns "id" */
  | 'wallet_accounts_pkey'
  /** unique or primary key constraint on columns "blockchain", "wallet_id" */
  | 'wallet_accounts_wallet_id_blockchain_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Wallet_Accounts_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Wallet_Accounts_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Wallet_Accounts_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "wallet_accounts" */
export type Wallet_Accounts_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  blockchain?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  wallet?: InputMaybe<Users_Wallet_Obj_Rel_Insert_Input>;
  wallet_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Wallet_Accounts_Max_Fields = {
  address?: Maybe<Scalars['String']['output']>;
  blockchain?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  wallet_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "wallet_accounts" */
export type Wallet_Accounts_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  blockchain?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  wallet_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Wallet_Accounts_Min_Fields = {
  address?: Maybe<Scalars['String']['output']>;
  blockchain?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  wallet_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "wallet_accounts" */
export type Wallet_Accounts_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  blockchain?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  wallet_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "wallet_accounts" */
export type Wallet_Accounts_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Wallet_Accounts>;
};

/** on_conflict condition type for table "wallet_accounts" */
export type Wallet_Accounts_On_Conflict = {
  constraint: Wallet_Accounts_Constraint;
  update_columns?: Array<Wallet_Accounts_Update_Column>;
  where?: InputMaybe<Wallet_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "wallet_accounts". */
export type Wallet_Accounts_Order_By = {
  address?: InputMaybe<Order_By>;
  blockchain?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  wallet?: InputMaybe<Users_Wallet_Order_By>;
  wallet_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: wallet_accounts */
export type Wallet_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Wallet_Accounts_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "wallet_accounts" */
export type Wallet_Accounts_Select_Column =
  /** column name */
  | 'address'
  /** column name */
  | 'blockchain'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'wallet_id';

/** input type for updating data in table "wallet_accounts" */
export type Wallet_Accounts_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  blockchain?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  wallet_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "wallet_accounts" */
export type Wallet_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Wallet_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Wallet_Accounts_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  blockchain?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  wallet_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "wallet_accounts" */
export type Wallet_Accounts_Update_Column =
  /** column name */
  | 'address'
  /** column name */
  | 'blockchain'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'wallet_id';

export type Wallet_Accounts_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Wallet_Accounts_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Wallet_Accounts_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Wallet_Accounts_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Wallet_Accounts_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Wallet_Accounts_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Wallet_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Wallet_Accounts_Bool_Exp;
};

/** columns and relationships of "workflow_nodes" */
export type Workflow_Nodes = {
  /** An object relationship */
  component: Components;
  component_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  input: Scalars['jsonb']['output'];
  label?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  workflow: Workflows;
  workflow_id: Scalars['uuid']['output'];
};


/** columns and relationships of "workflow_nodes" */
export type Workflow_NodesInputArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "workflow_nodes" */
export type Workflow_NodesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "workflow_nodes" */
export type Workflow_Nodes_Aggregate = {
  aggregate?: Maybe<Workflow_Nodes_Aggregate_Fields>;
  nodes: Array<Workflow_Nodes>;
};

export type Workflow_Nodes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workflow_Nodes_Aggregate_Bool_Exp_Count>;
};

export type Workflow_Nodes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workflow_Nodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workflow_Nodes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workflow_nodes" */
export type Workflow_Nodes_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Workflow_Nodes_Max_Fields>;
  min?: Maybe<Workflow_Nodes_Min_Fields>;
};


/** aggregate fields of "workflow_nodes" */
export type Workflow_Nodes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workflow_Nodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workflow_nodes" */
export type Workflow_Nodes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workflow_Nodes_Max_Order_By>;
  min?: InputMaybe<Workflow_Nodes_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Nodes_Append_Input = {
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "workflow_nodes" */
export type Workflow_Nodes_Arr_Rel_Insert_Input = {
  data: Array<Workflow_Nodes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_Nodes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workflow_nodes". All fields are combined with a logical 'AND'. */
export type Workflow_Nodes_Bool_Exp = {
  _and?: InputMaybe<Array<Workflow_Nodes_Bool_Exp>>;
  _not?: InputMaybe<Workflow_Nodes_Bool_Exp>;
  _or?: InputMaybe<Array<Workflow_Nodes_Bool_Exp>>;
  component?: InputMaybe<Components_Bool_Exp>;
  component_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  input?: InputMaybe<Jsonb_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  workflow?: InputMaybe<Workflows_Bool_Exp>;
  workflow_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workflow_nodes" */
export type Workflow_Nodes_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'workflow_nodes_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Workflow_Nodes_Delete_At_Path_Input = {
  input?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Workflow_Nodes_Delete_Elem_Input = {
  input?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Workflow_Nodes_Delete_Key_Input = {
  input?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "workflow_nodes" */
export type Workflow_Nodes_Insert_Input = {
  component?: InputMaybe<Components_Obj_Rel_Insert_Input>;
  component_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workflow?: InputMaybe<Workflows_Obj_Rel_Insert_Input>;
  workflow_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Workflow_Nodes_Max_Fields = {
  component_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  workflow_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "workflow_nodes" */
export type Workflow_Nodes_Max_Order_By = {
  component_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workflow_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workflow_Nodes_Min_Fields = {
  component_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  workflow_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "workflow_nodes" */
export type Workflow_Nodes_Min_Order_By = {
  component_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workflow_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workflow_nodes" */
export type Workflow_Nodes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workflow_Nodes>;
};

/** on_conflict condition type for table "workflow_nodes" */
export type Workflow_Nodes_On_Conflict = {
  constraint: Workflow_Nodes_Constraint;
  update_columns?: Array<Workflow_Nodes_Update_Column>;
  where?: InputMaybe<Workflow_Nodes_Bool_Exp>;
};

/** Ordering options when selecting data from "workflow_nodes". */
export type Workflow_Nodes_Order_By = {
  component?: InputMaybe<Components_Order_By>;
  component_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workflow?: InputMaybe<Workflows_Order_By>;
  workflow_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workflow_nodes */
export type Workflow_Nodes_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Nodes_Prepend_Input = {
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "workflow_nodes" */
export type Workflow_Nodes_Select_Column =
  /** column name */
  | 'component_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'input'
  /** column name */
  | 'label'
  /** column name */
  | 'metadata'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'workflow_id';

/** input type for updating data in table "workflow_nodes" */
export type Workflow_Nodes_Set_Input = {
  component_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workflow_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "workflow_nodes" */
export type Workflow_Nodes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workflow_Nodes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workflow_Nodes_Stream_Cursor_Value_Input = {
  component_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workflow_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "workflow_nodes" */
export type Workflow_Nodes_Update_Column =
  /** column name */
  | 'component_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'input'
  /** column name */
  | 'label'
  /** column name */
  | 'metadata'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'workflow_id';

export type Workflow_Nodes_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Workflow_Nodes_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Workflow_Nodes_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Workflow_Nodes_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Workflow_Nodes_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Workflow_Nodes_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workflow_Nodes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workflow_Nodes_Bool_Exp;
};

/** columns and relationships of "workflow_runs" */
export type Workflow_Runs = {
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  logs: Array<Run_Logs>;
  /** An aggregate relationship */
  logs_aggregate: Run_Logs_Aggregate;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  run_completed_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  workflow: Workflows;
  workflow_id: Scalars['uuid']['output'];
};


/** columns and relationships of "workflow_runs" */
export type Workflow_RunsLogsArgs = {
  distinct_on?: InputMaybe<Array<Run_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Run_Logs_Order_By>>;
  where?: InputMaybe<Run_Logs_Bool_Exp>;
};


/** columns and relationships of "workflow_runs" */
export type Workflow_RunsLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Run_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Run_Logs_Order_By>>;
  where?: InputMaybe<Run_Logs_Bool_Exp>;
};


/** columns and relationships of "workflow_runs" */
export type Workflow_RunsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "workflow_runs" */
export type Workflow_Runs_Aggregate = {
  aggregate?: Maybe<Workflow_Runs_Aggregate_Fields>;
  nodes: Array<Workflow_Runs>;
};

export type Workflow_Runs_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workflow_Runs_Aggregate_Bool_Exp_Count>;
};

export type Workflow_Runs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workflow_Runs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workflow_Runs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workflow_runs" */
export type Workflow_Runs_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Workflow_Runs_Max_Fields>;
  min?: Maybe<Workflow_Runs_Min_Fields>;
};


/** aggregate fields of "workflow_runs" */
export type Workflow_Runs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workflow_Runs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workflow_runs" */
export type Workflow_Runs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workflow_Runs_Max_Order_By>;
  min?: InputMaybe<Workflow_Runs_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Runs_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "workflow_runs" */
export type Workflow_Runs_Arr_Rel_Insert_Input = {
  data: Array<Workflow_Runs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_Runs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workflow_runs". All fields are combined with a logical 'AND'. */
export type Workflow_Runs_Bool_Exp = {
  _and?: InputMaybe<Array<Workflow_Runs_Bool_Exp>>;
  _not?: InputMaybe<Workflow_Runs_Bool_Exp>;
  _or?: InputMaybe<Array<Workflow_Runs_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  error?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logs?: InputMaybe<Run_Logs_Bool_Exp>;
  logs_aggregate?: InputMaybe<Run_Logs_Aggregate_Bool_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  run_completed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  workflow?: InputMaybe<Workflows_Bool_Exp>;
  workflow_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workflow_runs" */
export type Workflow_Runs_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'workflow_runs_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Workflow_Runs_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Workflow_Runs_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Workflow_Runs_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "workflow_runs" */
export type Workflow_Runs_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  logs?: InputMaybe<Run_Logs_Arr_Rel_Insert_Input>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  run_completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workflow?: InputMaybe<Workflows_Obj_Rel_Insert_Input>;
  workflow_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Workflow_Runs_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  run_completed_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  workflow_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "workflow_runs" */
export type Workflow_Runs_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  run_completed_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workflow_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workflow_Runs_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  run_completed_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  workflow_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "workflow_runs" */
export type Workflow_Runs_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  run_completed_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workflow_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workflow_runs" */
export type Workflow_Runs_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workflow_Runs>;
};

/** input type for inserting object relation for remote table "workflow_runs" */
export type Workflow_Runs_Obj_Rel_Insert_Input = {
  data: Workflow_Runs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_Runs_On_Conflict>;
};

/** on_conflict condition type for table "workflow_runs" */
export type Workflow_Runs_On_Conflict = {
  constraint: Workflow_Runs_Constraint;
  update_columns?: Array<Workflow_Runs_Update_Column>;
  where?: InputMaybe<Workflow_Runs_Bool_Exp>;
};

/** Ordering options when selecting data from "workflow_runs". */
export type Workflow_Runs_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  error?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logs_aggregate?: InputMaybe<Run_Logs_Aggregate_Order_By>;
  metadata?: InputMaybe<Order_By>;
  run_completed_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workflow?: InputMaybe<Workflows_Order_By>;
  workflow_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workflow_runs */
export type Workflow_Runs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Runs_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "workflow_runs" */
export type Workflow_Runs_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'error'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'run_completed_at'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'workflow_id';

/** input type for updating data in table "workflow_runs" */
export type Workflow_Runs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  run_completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workflow_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "workflow_runs" */
export type Workflow_Runs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workflow_Runs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workflow_Runs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  run_completed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workflow_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "workflow_runs" */
export type Workflow_Runs_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'error'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'run_completed_at'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'workflow_id';

export type Workflow_Runs_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Workflow_Runs_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Workflow_Runs_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Workflow_Runs_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Workflow_Runs_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Workflow_Runs_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workflow_Runs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workflow_Runs_Bool_Exp;
};

/** columns and relationships of "workflow_triggers" */
export type Workflow_Triggers = {
  /** An object relationship */
  component: Components;
  component_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  input: Scalars['jsonb']['output'];
  label?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  workflow: Workflows;
  workflow_id: Scalars['uuid']['output'];
};


/** columns and relationships of "workflow_triggers" */
export type Workflow_TriggersInputArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "workflow_triggers" */
export type Workflow_TriggersMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "workflow_triggers" */
export type Workflow_Triggers_Aggregate = {
  aggregate?: Maybe<Workflow_Triggers_Aggregate_Fields>;
  nodes: Array<Workflow_Triggers>;
};

export type Workflow_Triggers_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workflow_Triggers_Aggregate_Bool_Exp_Count>;
};

export type Workflow_Triggers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workflow_Triggers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workflow_Triggers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workflow_triggers" */
export type Workflow_Triggers_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Workflow_Triggers_Max_Fields>;
  min?: Maybe<Workflow_Triggers_Min_Fields>;
};


/** aggregate fields of "workflow_triggers" */
export type Workflow_Triggers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workflow_Triggers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workflow_triggers" */
export type Workflow_Triggers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workflow_Triggers_Max_Order_By>;
  min?: InputMaybe<Workflow_Triggers_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Triggers_Append_Input = {
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "workflow_triggers" */
export type Workflow_Triggers_Arr_Rel_Insert_Input = {
  data: Array<Workflow_Triggers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_Triggers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workflow_triggers". All fields are combined with a logical 'AND'. */
export type Workflow_Triggers_Bool_Exp = {
  _and?: InputMaybe<Array<Workflow_Triggers_Bool_Exp>>;
  _not?: InputMaybe<Workflow_Triggers_Bool_Exp>;
  _or?: InputMaybe<Array<Workflow_Triggers_Bool_Exp>>;
  component?: InputMaybe<Components_Bool_Exp>;
  component_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  input?: InputMaybe<Jsonb_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  workflow?: InputMaybe<Workflows_Bool_Exp>;
  workflow_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workflow_triggers" */
export type Workflow_Triggers_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'workflow_triggers_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'workflow_triggers_pkey'
  /** unique or primary key constraint on columns "workflow_id" */
  | 'workflow_triggers_workflow_id_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Workflow_Triggers_Delete_At_Path_Input = {
  input?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Workflow_Triggers_Delete_Elem_Input = {
  input?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Workflow_Triggers_Delete_Key_Input = {
  input?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "workflow_triggers" */
export type Workflow_Triggers_Insert_Input = {
  component?: InputMaybe<Components_Obj_Rel_Insert_Input>;
  component_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workflow?: InputMaybe<Workflows_Obj_Rel_Insert_Input>;
  workflow_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Workflow_Triggers_Max_Fields = {
  component_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  workflow_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "workflow_triggers" */
export type Workflow_Triggers_Max_Order_By = {
  component_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workflow_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workflow_Triggers_Min_Fields = {
  component_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  workflow_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "workflow_triggers" */
export type Workflow_Triggers_Min_Order_By = {
  component_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workflow_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workflow_triggers" */
export type Workflow_Triggers_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workflow_Triggers>;
};

/** input type for inserting object relation for remote table "workflow_triggers" */
export type Workflow_Triggers_Obj_Rel_Insert_Input = {
  data: Workflow_Triggers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflow_Triggers_On_Conflict>;
};

/** on_conflict condition type for table "workflow_triggers" */
export type Workflow_Triggers_On_Conflict = {
  constraint: Workflow_Triggers_Constraint;
  update_columns?: Array<Workflow_Triggers_Update_Column>;
  where?: InputMaybe<Workflow_Triggers_Bool_Exp>;
};

/** Ordering options when selecting data from "workflow_triggers". */
export type Workflow_Triggers_Order_By = {
  component?: InputMaybe<Components_Order_By>;
  component_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workflow?: InputMaybe<Workflows_Order_By>;
  workflow_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workflow_triggers */
export type Workflow_Triggers_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Workflow_Triggers_Prepend_Input = {
  input?: InputMaybe<Scalars['jsonb']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "workflow_triggers" */
export type Workflow_Triggers_Select_Column =
  /** column name */
  | 'component_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'input'
  /** column name */
  | 'label'
  /** column name */
  | 'metadata'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'workflow_id';

/** input type for updating data in table "workflow_triggers" */
export type Workflow_Triggers_Set_Input = {
  component_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workflow_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "workflow_triggers" */
export type Workflow_Triggers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workflow_Triggers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workflow_Triggers_Stream_Cursor_Value_Input = {
  component_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['jsonb']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workflow_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "workflow_triggers" */
export type Workflow_Triggers_Update_Column =
  /** column name */
  | 'component_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'input'
  /** column name */
  | 'label'
  /** column name */
  | 'metadata'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'workflow_id';

export type Workflow_Triggers_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Workflow_Triggers_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Workflow_Triggers_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Workflow_Triggers_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Workflow_Triggers_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Workflow_Triggers_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workflow_Triggers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workflow_Triggers_Bool_Exp;
};

/** columns and relationships of "workflows" */
export type Workflows = {
  created_at: Scalars['timestamptz']['output'];
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  nodes: Array<Workflow_Nodes>;
  /** An aggregate relationship */
  nodes_aggregate: Workflow_Nodes_Aggregate;
  /** An array relationship */
  runs: Array<Workflow_Runs>;
  /** An aggregate relationship */
  runs_aggregate: Workflow_Runs_Aggregate;
  status: Scalars['String']['output'];
  /** An object relationship */
  trigger?: Maybe<Workflow_Triggers>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "workflows" */
export type WorkflowsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "workflows" */
export type WorkflowsNodesArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Nodes_Order_By>>;
  where?: InputMaybe<Workflow_Nodes_Bool_Exp>;
};


/** columns and relationships of "workflows" */
export type WorkflowsNodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Nodes_Order_By>>;
  where?: InputMaybe<Workflow_Nodes_Bool_Exp>;
};


/** columns and relationships of "workflows" */
export type WorkflowsRunsArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Runs_Order_By>>;
  where?: InputMaybe<Workflow_Runs_Bool_Exp>;
};


/** columns and relationships of "workflows" */
export type WorkflowsRuns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workflow_Runs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workflow_Runs_Order_By>>;
  where?: InputMaybe<Workflow_Runs_Bool_Exp>;
};

/** aggregated selection of "workflows" */
export type Workflows_Aggregate = {
  aggregate?: Maybe<Workflows_Aggregate_Fields>;
  nodes: Array<Workflows>;
};

export type Workflows_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workflows_Aggregate_Bool_Exp_Count>;
};

export type Workflows_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workflows_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workflows_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workflows" */
export type Workflows_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Workflows_Max_Fields>;
  min?: Maybe<Workflows_Min_Fields>;
};


/** aggregate fields of "workflows" */
export type Workflows_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workflows_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workflows" */
export type Workflows_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workflows_Max_Order_By>;
  min?: InputMaybe<Workflows_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Workflows_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "workflows" */
export type Workflows_Arr_Rel_Insert_Input = {
  data: Array<Workflows_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflows_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workflows". All fields are combined with a logical 'AND'. */
export type Workflows_Bool_Exp = {
  _and?: InputMaybe<Array<Workflows_Bool_Exp>>;
  _not?: InputMaybe<Workflows_Bool_Exp>;
  _or?: InputMaybe<Array<Workflows_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nodes?: InputMaybe<Workflow_Nodes_Bool_Exp>;
  nodes_aggregate?: InputMaybe<Workflow_Nodes_Aggregate_Bool_Exp>;
  runs?: InputMaybe<Workflow_Runs_Bool_Exp>;
  runs_aggregate?: InputMaybe<Workflow_Runs_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  trigger?: InputMaybe<Workflow_Triggers_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workflows" */
export type Workflows_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'workflows_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Workflows_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Workflows_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Workflows_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "workflows" */
export type Workflows_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodes?: InputMaybe<Workflow_Nodes_Arr_Rel_Insert_Input>;
  runs?: InputMaybe<Workflow_Runs_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  trigger?: InputMaybe<Workflow_Triggers_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Workflows_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "workflows" */
export type Workflows_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workflows_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "workflows" */
export type Workflows_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workflows" */
export type Workflows_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workflows>;
};

/** input type for inserting object relation for remote table "workflows" */
export type Workflows_Obj_Rel_Insert_Input = {
  data: Workflows_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workflows_On_Conflict>;
};

/** on_conflict condition type for table "workflows" */
export type Workflows_On_Conflict = {
  constraint: Workflows_Constraint;
  update_columns?: Array<Workflows_Update_Column>;
  where?: InputMaybe<Workflows_Bool_Exp>;
};

/** Ordering options when selecting data from "workflows". */
export type Workflows_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nodes_aggregate?: InputMaybe<Workflow_Nodes_Aggregate_Order_By>;
  runs_aggregate?: InputMaybe<Workflow_Runs_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  trigger?: InputMaybe<Workflow_Triggers_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workflows */
export type Workflows_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Workflows_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "workflows" */
export type Workflows_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'name'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "workflows" */
export type Workflows_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "workflows" */
export type Workflows_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workflows_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workflows_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "workflows" */
export type Workflows_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'metadata'
  /** column name */
  | 'name'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

export type Workflows_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Workflows_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Workflows_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Workflows_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Workflows_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Workflows_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workflows_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workflows_Bool_Exp;
};
