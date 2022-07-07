export interface ApiResult<T> {
  result: T;
  error?: ErrorWithCode;
  state: ServiceState;
  execute?: Function;
}

export enum ServiceState {
  NoRequest,
  InProgress,
  Fetched,
  Error,
}

export interface ApiConfig {
  method: any;
  header: any;
  url: string;
}

export interface ErrorWithCode {
  code: number;
  message: string;
}

export const GetQueryParameters = (query: any) => {
  var parameters = "";
  for (var key of Object.keys(query)) {
    if (typeof query[key] === "string" && query[key].length === 0) continue;
    if (parameters.length !== 0) parameters += "&";
    parameters += key + "=" + query[key];
  }
  return parameters;
};
