import React, { createContext, useState } from 'react'

//initializing create context Hook 
export const UserContext = createContext();

//this is the function that contains the information that will be used in the others components.
export const UserContextProvider = ({ children }) => {
    //  we created the states Here.
    const [restaurants, SetRestaurants] = useState([]);
    const [restaurantSelected, setRestaurantSelected] = useState();

    return (
        //  we export the states here.
        <UserContext.Provider
            value={{
                restaurants,
                SetRestaurants,
                restaurantSelected,
                setRestaurantSelected
            }}>{children}
        </UserContext.Provider>
    );
}