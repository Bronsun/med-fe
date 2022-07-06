import axios from "axios";
import { useState } from "react";
import { ApiConfig, ApiResult, ErrorWithCode, ServiceState } from "./APIutilities";

export const APIservice = (): ApiResult<any | undefined> => {
  const [result, setResult] = useState<any | undefined>(undefined);
  const [error, setError] = useState<ErrorWithCode | undefined>(undefined);
  const [state, setState] = useState<ServiceState>(ServiceState.NoRequest);

  const execute = (
    config: ApiConfig,
    body: JSON,
    parseFunction: Function = (a: any) => a.response
  ) => {
    setState(ServiceState.InProgress);

    axios({
      url: config.url,
      data: body,
      method: config.method,
      headers: config.header,
    })
      .then((res) => {
        setResult(parseFunction(res.data));
        setState(ServiceState.Fetched);
      })
      .catch((e: any) => {
        setError({ code: e.code, message: e.message } as ErrorWithCode);
        setState(ServiceState.Error);
      });
  };

  return { result, error, state, execute };
};
