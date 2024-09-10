import { HttpAdapter } from "./http.adapter";

/**
 * Represents an HTTP adapter using the Fetch API.
 */
export class FetchAdapter implements HttpAdapter {
  async get<T>(url: string, options?: RequestInit): Promise<T> {
    const data = await fetch(url, options);

    if (!data.ok) {
      throw new Error("Error Getting Data with status: " + data.status);
    }

    const response: T = await data.json();

    return response;
  }

  async post<T, R>(url: string, body: R, options?: RequestInit): Promise<T> {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      ...options,
    });

    if (!data.ok) {
      throw new Error("Error Posting Data with status: " + data.status);
    }

    const response: T = await data.json();

    return response;
  }

  async put<T, R>(url: string, body: R, options?: RequestInit): Promise<T> {
    const data = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      ...options,
    });

    if (!data.ok) {
      throw new Error("Error Putting Data with status: " + data.status);
    }

    const response: T = await data.json();

    return response;
  }

  async delete<T>(url: string, options?: RequestInit): Promise<T> {
    const data = await fetch(url, {
      method: "DELETE",
      ...options,
    });

    if (!data.ok) {
      throw new Error("Error Deleting Data with status: " + data.status);
    }

    const response: T = await data.json();

    return response;
  }
}
