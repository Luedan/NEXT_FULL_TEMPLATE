import { useEffect, useState } from "react";

/**
 * Custom hook to handle API calls.
 *
 * @template T - The type of the data returned by the API function.
 * @template P - The type of the parameters passed to the API function. Defaults to void.
 * @param {function} apiFunction - The API function to be called. It should return a Promise of type T.
 * @param {P} [params] - Optional parameters to be passed to the API function.
 * @returns {object} An object containing the following properties:
 * - `data` (T | null): The data returned by the API function, or null if not yet available.
 * - `loading` (boolean): A boolean indicating whether the API call is in progress.
 * - `error` (Error | null): An error object if the API call failed, or null if no error occurred.
 */
export function useApi<T, P = void>(
  apiFunction: (params: P) => Promise<T>,
  params?: P
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await apiFunction(params as P);
        setData(result);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiFunction, params]);

  return { data, loading, error };
}

type executeProps<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
};

/**
 * Custom hook to lazily execute an API function and manage its state.
 *
 * @template T - The type of the data returned by the API function.
 * @template P - The type of the parameters accepted by the API function. Defaults to `void`.
 *
 * @param {function} apiFunction - The API function to be executed. It should return a promise that resolves to the data of type `T`.
 *
 * @returns {[function, { data: T | null, loading: boolean, error: Error | null }]} - Returns a tuple where the first element is the execute function to call the API, and the second element is an object containing the state: `data`, `loading`, and `error`.
 */
export function useLazyApi<T, P = void>(
  apiFunction: (params: P) => Promise<T>
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = async (params: P, options?: executeProps<T>) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiFunction(params);
      setData(result);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);

      if (error && options?.onError) {
        options?.onError?.(error);
      } else {
        options?.onSuccess && options.onSuccess?.(data as T);
      }
    }
  };

  return [execute, { data, loading, error }] as const;
}
