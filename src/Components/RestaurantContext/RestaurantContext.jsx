import React, { createContext, useState } from 'react'

//initializing create context Hook 
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [restaurants, SetRestaurants] = useState([]);


    return (
        <UserContext.Provider
            value={{ restaurants, SetRestaurants }}>{children}
        </UserContext.Provider>
    );
}