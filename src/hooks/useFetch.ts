import { useCallback, useEffect, useReducer } from "react";
import axios from "axios";

type StateProps<T> = {
  data?: T;
  error?: Error;
  isLoading: boolean;
};

type ActionProps<T> =
  | {
      type: "loading";
    }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

function useFetchData<T = unknown>(url: string) {
  const initialState: StateProps<T> = {
    error: undefined,
    data: undefined,
    isLoading: true,
  };

  const reducer = (state: StateProps<T>, action: ActionProps<T>) => {
    switch (action.type) {
      case "loading":
        return { ...initialState, isLoading: true };
      case "fetched":
        return { ...initialState, data: action.payload, isLoading: false };
      case "error":
        return { ...initialState, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFetch = useCallback(async () => {
    dispatch({ type: "loading" });

    try {
      const response = await axios.get(url);
      dispatch({ type: "fetched", payload: response.data });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data) {
        dispatch({ type: "error", payload: err as Error });
      }
    }
  }, [url]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return {
    data: state.data,
    error: state.error,
    isLoading: state.isLoading,
  };
}

export default useFetchData;
