import React from 'react';
import Nav from '../../Navbar/NavBar'
import './AllRestaurantsView.css'

import Allrestaurants from '../../restaurants/CardsRestaurants/CardsRestaurants'


function AllrestaurantsView() {

    return (
        <>
            <Nav />
            <Allrestaurants />
        </>
    )
}



export default AllrestaurantsView;