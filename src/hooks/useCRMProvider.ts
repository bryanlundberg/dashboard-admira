import { useEffect, useState } from "react";
// import { GoogleAds, MetaAds } from "../interfaces/api";

interface useCRMProviderProps {
  url: string;
}

const useCRMProvider = <T>({ url }: useCRMProviderProps) => {
  const [data, setData] = useState<T | null>(null);
  const [needUpdate, setNeedUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const triggerSync = () => {
    setNeedUpdate(true);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData({ ...data }))
      .finally(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, [needUpdate, url]);

  return { data, isLoading, triggerSync };
};

export default useCRMProvider;
