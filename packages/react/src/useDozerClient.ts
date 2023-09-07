import { DozerClient, DozerClientOptions } from "@dozerjs/dozer/src";

const defaultDozerClientOptions: DozerClientOptions = {
    serverAddress: "http://localhost:50051",
};

export function useDozerClient(value?: DozerClientOptions) {
    const options = value ?? defaultDozerClientOptions;
    const client = new DozerClient(options);
    return { client };
}