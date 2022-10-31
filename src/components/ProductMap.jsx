import { useState, useEffect } from "react";
import Loader from "./Loader";

import ProductGrouping from "./ProductGrouping";

// consumimos API a atrvés de ObatainData y le pasamos a ProductGrouping por medio de props

const ProductData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ProductGrouping data={data} />}</>;
};

export default ProductData;
