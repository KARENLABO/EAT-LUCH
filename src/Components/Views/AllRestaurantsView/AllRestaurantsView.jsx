import React from 'react';
import Nav from '../../Navbar/NavBar'
import Allrestaurants from '../../restaurants/CardsRestaurants/CardsRestaurants'
import './AllRestaurantsView.css'

// This is the component that shows all restaurants
function AllrestaurantsView() {
    return (
        <>
            <Nav />
            <Allrestaurants />
        </>
    )
}



export default AllrestaurantsView;