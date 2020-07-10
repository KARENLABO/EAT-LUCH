import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/RestaurantContext'
import Map from '../restaurants/MapsRestaurants/MapsRestaurants'

import Allrestaurants from '../restaurants/CardsRestaurants/CardsRestaurants'


function ContainerController() {
    const {
        isMobile,
        isOnClickActivated } = useContext(UserContext);

    console.log(isMobile);
    console.log(isOnClickActivated);


    return (
        <div>

            <Allrestaurants />

        </div>
    )
}



export default ContainerController;