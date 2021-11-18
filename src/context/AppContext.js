import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const useApp = () => useContext(ProductContext);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  //ASIDE
  const [action, setAction] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      await fetch("https://6186e9b4cd8530001765ac12.mockapi.io/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        action,
        toggleAction: () => setAction(!action),
        closeAction: () => setAction(false),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
