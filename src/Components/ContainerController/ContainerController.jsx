import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/RestaurantContext'
import Map from '../restaurants/MapsRestaurants/MapsRestaurants'

import Allrestaurants from '../restaurants/CardsRestaurants/CardsRestaurants'


function ContainerController() {

    return (
        <div>
            <Allrestaurants />
        </div>
    )
}



export default ContainerController;