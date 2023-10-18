import { DozerClient, DozerClientOptions } from "@dozerjs/dozer";

export function useDozerClient(options?: DozerClientOptions) {
    const client = new DozerClient(options);
    return { client };
}