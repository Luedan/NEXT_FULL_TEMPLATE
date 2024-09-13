
/**
 * Represents an abstract HTTP adapter.
 */
export abstract class HttpAdapter {
  /**
   * Performs a GET request.
   * @param url The URL.
   * @param options The options.
   * @returns The response.
   */
  abstract get<T>(url: string, options?: RequestInit): Promise<T>;

  /**
   * Performs a POST request.
   * @param url The URL.
   * @param body The body.
   * @param options The options.
   * @returns The response.
   */
  abstract post<T, R>(
    url: string,
    body: R,
    options?: RequestInit
  ): Promise<T>;

  /**
   * Performs a PUT request.
   * @param url The URL.
   * @param body The body.
   * @param options The options.
   * @returns The response.
   */
  abstract put<T, R>(
    url: string,
    body: R,
    options?: RequestInit
  ): Promise<T>;

  /**
   * Performs a DELETE request.
   * @param url The URL.
   * @param options The options.
   * @returns The response.
   */
  abstract delete<T>(url: string, options?: RequestInit): Promise<T>;
}

