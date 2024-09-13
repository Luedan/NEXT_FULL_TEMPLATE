import { HttpAdapter } from "./http.adapter";

/**
 * Represents an HTTP adapter using the Fetch API.
 */
export class FetchAdapter implements HttpAdapter {
  constructor(private readonly _typeResponse: string = "json") {}

  async get<T>(url: string, options?: RequestInit): Promise<T> {
    const data = await fetch(url, options);

    if (!data.ok) {
      throw new Error("Error Getting Data with status: " + data.status);
    }

    const response: T = await this.resolveData(data);

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

    const response: T = await this.resolveData(data);

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

    const response: T = await this.resolveData(data);

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

    const response: T = await this.resolveData(data);

    return response;
  }

  async resolveData<T>(data: any): Promise<T | any>{
    if (this._typeResponse === "json") {
      return await data.json() as T; 
    } else {
      return await data.text() as unknown as T;
    }
  }
}
