import React from 'react';
import Nav from '../../Navbar/NavBar'
import Map from '../../restaurants/MapsRestaurants/MapsRestaurants'
import './RestaurantDetail.css'

// this component is only for mobiles when the user selected a restaurant.
function RestaurantDetailView() {
    return (
        <>
            <Nav>
            </Nav>
            <div className='containerMapDetailView'>
                <Map />
            </div>
        </>
    )
}

export default RestaurantDetailView
