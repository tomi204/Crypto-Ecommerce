import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    return (
        <DataContext.Provider value={{
            blogs,
            setBlogs,


        }}>
            {children}
        </DataContext.Provider>
    )
}