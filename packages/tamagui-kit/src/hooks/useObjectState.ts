import { useState } from "react";

type UpdateState<T extends object> = (
  newState: Partial<T> | ((state: T) => Partial<T>),
) => void;

// Do not use this for nested objects
export const useObjectState = <T extends object>(
  initialState: T,
): [T, UpdateState<T>] => {
  const [state, setState] = useState(initialState);

  const updateState: UpdateState<T> = (newState) => {
    setState((prev) => {
      const _newState =
        typeof newState === "function" ? newState(prev) : newState;
      return { ...prev, ..._newState };
    });
  };

  return [state, updateState];
};
