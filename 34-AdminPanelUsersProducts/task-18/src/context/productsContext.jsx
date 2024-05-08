import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
const [data, setData] = useState([]);
const [sortdata, setSortData] = useState([]);

  return (
    <ProductsContext.Provider
      value={{ data, setData, sortdata, setSortData }}
    >
      {children}
    </ProductsContext.Provider>
  );
};