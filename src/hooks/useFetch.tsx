import { useEffect, useState } from "react";

type FetchProps = {
    url: string;
    method?: string;
    body?: any;
    headers?: any;
}

type FetchState<T> = {
    data: T | [];
    loading: boolean;
    error: Error | null;
}


export default function useFetch<T>({ url } : FetchProps): FetchState<T> {
  const [data, setData] = useState<T | []>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
            setData(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}
