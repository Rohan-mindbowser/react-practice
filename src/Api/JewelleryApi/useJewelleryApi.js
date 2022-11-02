import { useQuery } from "react-query";

export const useJewelleryApi = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:8000/api/products/allproducts").then((res) =>
      res.json()
    )
  );

  return { isLoading, data };
};

export const useSingleJewelleryApi = (id) => {
  const { isLoading, error, data } = useQuery("singleJewellery", () =>
    fetch(`http://localhost:8000/api/products/singleproduct?id=${id}`).then(
      (res) => res.json()
    )
  );

  return { isLoading, data };
};

export const useJewelleryByCategoryApi = (cat) => {
  const { isLoading, error, data } = useQuery("byCategory", () =>
    fetch(
      `http://localhost:8000/api/products/productbycategory?cat=${cat}`
    ).then((res) => res.json())
  );

  return { isLoading, data };
};
