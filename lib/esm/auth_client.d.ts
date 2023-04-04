import { GetAuthTokenResponse } from "./generated/protos/auth_pb";
export interface AuthClientOptions {
    serverAddress?: string;
    authToken?: string | null;
}
export declare class AuthClient {
    private service;
    private readonly authMetadata;
    constructor(clientOptions?: AuthClientOptions);
    getAuthToken(accessFilter: string): Promise<GetAuthTokenResponse>;
}
