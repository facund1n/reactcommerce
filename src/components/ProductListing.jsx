import { useState, useEffect } from "react";
import ProductGrouping from "./ProductGrouping";

// consumimos API a atrvés de ObatainData y le pasamos a ProductGrouping por medio de props

const ObtainData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <ProductGrouping data={data} />;
};

export default ObtainData;
