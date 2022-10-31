import { useState, useEffect } from "react";
import ProductGroup from "../components/ProductGroup";

export const ObtainData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <ProductGroup data={data} />
    </>
  );
};

export default ObtainData;
