import React from "react";

type FetchResponse<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  request: (url: string) => Promise<{ jsonResponse: any }>;
};

const useHandleFetch = <T,>(): FetchResponse<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const request = React.useCallback(async (url: string) => {
    let jsonResponse;
    let response;

    try {
      setData(null);
      setLoading(true);
      response = await fetch(url);
      jsonResponse = await response.json();
      setData(jsonResponse);
    } catch {
      setLoading(false);
      setData(null);
      setError("Algum erro ocorreu :(");
    } finally {
      setLoading(false)
      return { jsonResponse, response };
    }
  }, []);

  return {
    data,
    loading,
    request,
    error,
  };
};

export default useHandleFetch;
