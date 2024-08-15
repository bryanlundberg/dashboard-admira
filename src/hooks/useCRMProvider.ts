import { useEffect, useState } from "react";

interface useCRMProviderProps {
  url: string;
}

const useCRMProvider = <T>({ url }: useCRMProviderProps) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData({ ...data }))
      .finally(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, [url]);

  return { data, isLoading, setData };
};

export default useCRMProvider;
