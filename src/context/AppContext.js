import { createContext, useContext, useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const ProductContext = createContext();

export const useApp = () => useContext(ProductContext);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  //ASIDE
  const [action, setAction] = useState(false);
  //auth status
  // const [status, setStatus] = useState(null);

  // onAuthStateChanged(auth, (user) => {
  //   console.log(user);
  //   user ? setStatus(user) : setStatus(false);
  // });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(auth);
      user ? console.log(true) : console.log(false);
    });
  }, []);

  useEffect(() => {
    const data = [];
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
        return data.length >= 12 ? setProducts(data) : null;
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
        // status,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
