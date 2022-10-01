import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const DataContext = createContext();

// data provider context component
export const DataProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [CartItem, setCartItem] = useState([]);
  const [count, setCount] = useState(1);
  const [isSelected, setIsSelected] = useState(true);
  const [buttonText, setButtonText] = useState("Connect wallet");
  const [account, setAccount] = useState(null);

  // add to cart function
  const addToCart = (blog) => {
    const productExit = CartItem.find((item) => item.id === blog.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === blog.id
            ? {
                ...productExit,
                qty: productExit.qty + 1,
              }
            : item
        )
      );
    } else {
      setCartItem([
        ...CartItem,
        {
          ...blog,
          qty: 1,
          ...blog,
          sort: count,
          ...blog,
          selected: isSelected,
        },
      ]);
    }
  };
  //total price
  const totalQttyPerItem = (id) => {
    let index = CartItem.map((item) => item.id).indexOf(id);
    return CartItem[index].cover * CartItem[index].qty;
  };
  //total quantity
  const totalQtty = () => {
    let total = CartItem.map((item) => totalQttyPerItem(item.id));
    if (total.length > 0) {
      return total.reduce((prev, curr) => prev + curr);
    }
  };
  // calculando total

  const calcTotal = () => {
    return totalQtty();
  };

  // delete item from cart
  const decreaseQty = (blog) => {
    const productExit = CartItem.find((item) => item.id === blog.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== blog.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === blog.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  // delete all from cart
  const deleteQty = (id) => {
    setCartItem(CartItem.filter((item) => item.id !== id));
  };

  //eth api
  const getEthPrice = async () => {
    const response = await fetch("https://api.coinlore.net/api/ticker/?id=80");
    const data = await response.json();
    const parseNumber1 = data[0].price_usd;
    const parseNumber2 = parseInt(parseNumber1);
    return parseNumber2;
  };
  const ethPrice = getEthPrice.toString();

  return (
    <DataContext.Provider
      value={{
        blogs,
        setBlogs,
        CartItem,
        setCartItem,
        addToCart,
        decreaseQty,
        deleteQty,
        count,
        setCount,
        isSelected,
        setIsSelected,
        calcTotal,
        getEthPrice,
        account,
        setAccount,
        buttonText,
        setButtonText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
