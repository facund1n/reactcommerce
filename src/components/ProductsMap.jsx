import { useState, useEffect } from "react";
import Loader from "./Loader";

import ProductsGrid from "./ProductsGrid";

// consumimos API a atrvés de ObatainData y le pasamos a ProductGrouping por medio de props

const ProductMap = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ProductsGrid data={data} />}</>;
};

export default ProductMap;
