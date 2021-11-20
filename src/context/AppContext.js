import { createContext, useContext, useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const ProductContext = createContext();

export const useApp = () => useContext(ProductContext);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  //ASIDE
  const [action, setAction] = useState(false);

  useEffect(() => {
    const data = [];
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
        return data.length !== 0 ? setProducts(data) : null;
      });
    };
    getData();
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
