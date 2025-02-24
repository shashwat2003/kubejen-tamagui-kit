type UpdateState<T extends object> = (newState: Partial<T> | ((state: T) => Partial<T>)) => void;
export declare const useObjectState: <T extends object>(initialState: T) => [T, UpdateState<T>];
export {};
//# sourceMappingURL=useObjectState.d.ts.map