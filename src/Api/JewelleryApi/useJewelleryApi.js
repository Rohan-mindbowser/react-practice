import { useQuery } from "react-query";

export const useJewelleryApi = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:8000/api/products/allproducts").then((res) =>
      res.json()
    )
  );

  return { isLoading, data };
};
