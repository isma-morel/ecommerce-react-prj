import { createContext, useContext, useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const ProductContext = createContext();

export const useApp = () => useContext(ProductContext);

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(null);
  //ASIDE
  const [action, setAction] = useState(false);
  //auth status
  const [status, setStatus] = useState(null);

  //order
  const [orders, setOrders] = useState(null);
  //toggle
  const [getOrder, setGetOrder] = useState();

  //cart
  const addToCart = (src, price, name, isNew, id, stock) => {
    const cartLocal = JSON.parse(localStorage.getItem('cart'));
    const obj = {
      stock: stock,
      src: src,
      price: price,
      name: name,
      isNew: isNew,
      id: id,
    };
    cartLocal ? getCart(obj) : setterCart(obj);
  };
  const setterCart = (obj) => {
    const newCart = [];
    obj.idCart = 1;
    console.log(obj);
    newCart.push(obj);
    setCart([...newCart]);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const getCart = (obj) => {
    const cartLocal = JSON.parse(localStorage.getItem('cart'));
    obj.idCart = cartLocal[cartLocal.length - 1].idCart + 1;
    console.log(obj);
    cartLocal.push(obj);
    setCart([...cartLocal]);
    localStorage.setItem('cart', JSON.stringify(cartLocal));
  };

  const removeItem = (id) => {
    const objRemoved = cart.filter((obj) => obj.idCart !== id);
    setCart(objRemoved.length === 0 ? null : objRemoved);
    objRemoved.length === 0
      ? localStorage.removeItem('cart')
      : localStorage.setItem('cart', JSON.stringify(objRemoved));
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart(null);
  };

  //total
  useEffect(() => {
    let totalPrice = 0.0;
    cart ? cart.forEach(({ price }) => (totalPrice += price)) : 0;
    setTotal(parseFloat(totalPrice).toFixed(2));
  }, [cart]);

  //Status
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user !== null ? setStatus(true) : setStatus(false);
    });
  }, []);

  //fireStore
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
  //orders
  useEffect(() => {
    const ordersData = [];
    const getData = async () => {
      const queryOrders = await getDocs(collection(db, 'orders'));
      queryOrders.forEach((doc) => {
        const {
          _key: {
            path: { segments },
          },
        } = doc;
        const orderId = segments[segments.length - 1];
        const singularDoc = doc.data();
        singularDoc.orderId = orderId;
        ordersData.push(singularDoc);
        const ordersFiltered = ordersData.filter(
          ({ buyer: { email } }) => email === auth.currentUser.email,
        );
        return setOrders(ordersFiltered);
      });
    };
    status && getData();
  }, [status, getOrder]);

  return (
    <ProductContext.Provider
      value={{
        products,
        action,
        toggleAction: () => setAction(!action),
        closeAction: () => setAction(false),
        setStatus: setStatus,
        status,
        cart: cart,
        addToCart: addToCart,
        clearCart: clearCart,
        removeItem: removeItem,
        total,
        orders,
        getOrder,
        setGetOrder: setGetOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
