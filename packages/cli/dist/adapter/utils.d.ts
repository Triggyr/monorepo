export declare function loadConfig(): Promise<{
    componentsDir: string;
    connection: {
        graphqlUrl: string;
        graphqlSecret: string;
    };
}>;
export declare function isRequired(input: string): true | "You must provide a value";
export declare function collectInputFields(): Promise<{
    type: any;
    default: any;
    enum: string[] | undefined;
    key: any;
    description: any;
    required: any;
    nullable: any;
    hidden: any;
}[]>;
export declare function collectOutputFields(): Promise<{
    key: any;
    type: any;
    description: any;
    required: any;
    nullable: any;
}[]>;
