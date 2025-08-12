import type { FetchOptions } from 'ofetch';
import type { ApiResponse } from "~/models/ApiResponse";

export async function FetchApi<T>(
  url: string,
  config: FetchOptions = {}
): Promise<ApiResponse<T>> {
    var customConfig = {
        baseURL :'https://shop-api.codeyad-project.ir/api',
        ...config,
    }
  return $fetch(url, customConfig);
}
