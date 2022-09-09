import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
export const DataContext = createContext();

// data provider context component
export const DataProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [CartItem, setCartItem] = useState([]);
    const [count, setCount] = useState(1);
    const [isSelected, setIsSelected] = useState(true)
    console.log("hola brother", blogs)


    // add to cart function
    const addToCart = () => {

        const productExit = CartItem.find((item) => item.id === blogs.id);

        if (productExit) {
            setCartItem(
                CartItem.map((item) =>
                    item.id === blogs.id
                        ?
                        {
                            ...productExit, qty: productExit.qty + 1,
                        }
                        : item
                )
            );
        } else {

            setCartItem([...CartItem, {
                ...blogs, qty: 1,
                ...blogs, sort: count,
                ...blogs, selected: isSelected
            }]);
        }
    };

    // delete item from cart
    const decreaseQty = () => {

        const productExit = CartItem.find((item) => item.id === blogs.id);


        if (productExit.qty === 1) {
            setCartItem(CartItem.filter((item) => item.id !== blogs.id));
        } else {
            setCartItem(
                CartItem.map((item) =>
                    item.id === blogs.id
                        ? { ...productExit, qty: productExit.qty - 1 }
                        : item
                )
            );
        }
    };

    // delete all from cart
    const deleteQty = () => {
        setCartItem(CartItem.filter((item) => item.id !== blogs.id));
    }


    return (
        <DataContext.Provider value={{
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
            setIsSelected

        }}>
            {children}
        </DataContext.Provider>
    )
}