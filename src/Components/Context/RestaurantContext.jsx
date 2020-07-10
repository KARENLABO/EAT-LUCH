import React, { createContext, useState } from 'react'
//initializing create context Hook 
export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
    const [restaurants, SetRestaurants] = useState([]);
    const [restaurantDetail, SetRestaurantDetail] = useState(
        {
            "name": "Hopdoddy Burger Bar",
            "backgroundImageURL": "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/Images/hopdoddy.png",
            "category": "Burgers",
            "contact": {
                "phone": "9723872337",
                "formattedPhone": "(972) 387-2337",
                "twitter": "hopdoddy"
            },
            "location": {
                "address": "5100 Belt Line Road, STE 502",
                "crossStreet": "Dallas North Tollway",
                "lat": 32.950787,
                "lng": -96.821118,
                "postalCode": "75254",
                "cc": "US",
                "city": "Addison",
                "state": "TX",
                "country": "United States",
                "formattedAddress": [
                    "5100 Belt Line Road, STE 502 (Dallas North Tollway)",
                    "Addison, TX 75254",
                    "United States",
                ]
            }
        })

    const [isMobile, setIsmobile] = useState(false);
    const [isOnClickActivated, setActivateOnclick] = useState(false)
    const [restaurantSelected, setRestaurantSelected] = useState();

    return (
        <UserContext.Provider
            value={{
                restaurants,
                SetRestaurants,
                isMobile,
                setIsmobile,
                isOnClickActivated,
                setActivateOnclick,
                restaurantDetail,
                SetRestaurantDetail,
                restaurantSelected,
                setRestaurantSelected
            }}>{children}
        </UserContext.Provider>
    );
}