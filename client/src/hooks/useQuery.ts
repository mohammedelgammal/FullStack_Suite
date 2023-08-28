import { useState, useEffect } from "react";

// Libraries
import axios, { AxiosError, AxiosResponse } from "axios";

interface QueryResponse {
  isLoading: boolean;
  error?: AxiosError;
  data?: AxiosResponse;
}

interface Props {
  url: string;
  method: string;
  payload?: object;
}

const useQuery = ({ url, method, payload }: Props): QueryResponse => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();
  const [data, setData] = useState<AxiosResponse>();

  const handleApiCall = ({ url, method, payload }: Props) => {
    axios({
      method,
      url,
      data: payload,
    })
      .then(
        (response: AxiosResponse): void => {
          setData(response.data);
          setIsLoading(false);
        },
        (error: AxiosError): void => {
          setError(error);
          setIsLoading(false);
        }
      )
      .finally((): void => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleApiCall({ url, method, payload });
  }, []);

  return { isLoading, error, data };
};

export default useQuery;
