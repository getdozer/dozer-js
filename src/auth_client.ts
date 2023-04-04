import {GetAuthTokenRequest, GetAuthTokenResponse} from "./generated/protos/auth_pb";
import {Metadata} from "grpc-web";
import {AuthGrpcServiceClient} from "./generated/protos/AuthServiceClientPb";

export interface AuthClientOptions {
    serverAddress?: string,
    authToken?: string | null
}

const defaultAuthClientOptions = {
    serverAddress: 'http://localhost:50051',
    authToken: null
}

export class AuthClient {
    private service: AuthGrpcServiceClient;
    private readonly authMetadata: Metadata;

    constructor(clientOptions?: AuthClientOptions) {
        const options = {...defaultAuthClientOptions, ...clientOptions};
        this.authMetadata = (options.authToken ? { Authorization: 'Bearer ' + options.authToken} : {}) as Metadata;
        this.service = new AuthGrpcServiceClient(options.serverAddress, this.authMetadata);
    }

    async getAuthToken(accessFilter: string): Promise<GetAuthTokenResponse> {
        let request = new GetAuthTokenRequest().setAccessFilter(accessFilter);

        return await this.service.getAuthToken(request, this.authMetadata);
    }
}