import { useState, useEffect } from "react";
import ProductGroup from "./ProductGroup";

const ObtainData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <ProductGroup data={data} />;
};

export default ObtainData;
