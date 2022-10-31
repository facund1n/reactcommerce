import { useState, useEffect } from "react";
import Loader from "./Loader";

import ProductGrouping from "./ProductGrouping";

// consumimos API a atrvés de ObatainData y le pasamos a ProductGrouping por medio de props

const ObtainData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ProductGrouping data={data} />}</>;
};

export default ObtainData;