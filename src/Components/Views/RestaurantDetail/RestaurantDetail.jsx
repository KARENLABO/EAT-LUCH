import React from 'react';
import Nav from '../../Navbar/NavBar'
import Map from '../../restaurants/MapsRestaurants/MapsRestaurants'
import './RestaurantDetail.css'


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
