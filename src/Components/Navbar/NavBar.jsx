import React, { useState, useEffect, useContext } from 'react';
import MapsIcon from '../../assets/Cuts/icon_map@3x.png'
import BackIcon from '../../assets/Cuts/ic_webBack@3x.png'
import { UserContext } from '../Context/RestaurantContext'
import { Link } from 'react-router-dom'

import './Navbar.css'


function NavBar() {
    const { restaurantSelected, setRestaurantSelected } = useContext(UserContext);




    return (
        <nav className="navbar">
            {
                restaurantSelected && window.innerWidth <= 768 && (
                    <Link className='OptionsToAuth' to='/'>
                        <img className='closeOrBackIcon'
                            src={BackIcon}
                            alt='icon'
                            onClick={() => setRestaurantSelected()}
                        >
                        </img>
                    </Link>
                )}
            <h2 className='TextNavLuchTime'>Lunch Tyme</h2>
            <img className='navbarMapsIcon' alt='iconMaps' src={MapsIcon}></img>

        </nav>
    )
}

export default NavBar