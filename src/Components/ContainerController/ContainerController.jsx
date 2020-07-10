import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/RestaurantContext'
import Map from '../restaurants/MapsRestaurants/MapsRestaurants'

import Allrestaurants from '../restaurants/CardsRestaurants/CardsRestaurants'


function ContainerController() {
    useEffect(() => {
        Controller()
    }, [])

    const {
        component,
        isMobile,
        isOnClickActivated, setComponent, } = useContext(UserContext);



    console.log(isMobile);
    console.log(isOnClickActivated);
    console.log(component)
    const Controller = () => (isMobile === true) && (isOnClickActivated === true) ? setComponent(<Map />) : setComponent(<Allrestaurants />)



    return (
        <div>

            {component}

        </div>
    )
}



export default ContainerController;