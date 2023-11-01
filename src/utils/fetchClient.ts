import {URL_BASE} from "@/utils/constants";

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

async function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  const response = await fetch(URL_BASE + url, options);

  if (!response.ok) {
    throw new Error(`Error fetching ${url} with method ${method}`);
  }

  return response.json();
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
