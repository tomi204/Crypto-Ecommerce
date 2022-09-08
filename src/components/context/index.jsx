import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const { CartItem, setCartItem } = useState([]);





    const addToCart = (blogs) => {

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


    const decreaseQty = (blogs) => {

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


    const deleteQty = (blogs) => {
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
            deleteQty
        }}>
            {children}
        </DataContext.Provider>
    )
}