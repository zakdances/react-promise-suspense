declare const deepEqual: any;
interface PromiseCache {
    promise?: Promise<void>;
    inputs: Array<any>;
    error?: any;
    response?: any;
}
declare const promiseCaches: PromiseCache[];
export declare const usePromise: (promise: (...inputs: any) => any, inputs: any[], lifespan?: number) => any;
