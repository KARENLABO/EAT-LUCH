import React, { useState, useEffect } from 'react';
import getRestaurants from '../restaurants/FetchRestaurantes/GetRestaurants'
import MapsIcon from '../../assets/Cuts/icon_map@3x.png'
import BackIcon from '../../assets/Cuts/ic_webBack@3x.png'
import CloseIcon from '../../assets/Cuts/ic_close@3x.png'
import './Navbar.css'


function NavBar() {
    const [icon, SetIcon] = useState();
    const [restaurants, SetRestaurants] = useState([]);


    useEffect(() => {
        isMobile() ? SetIcon(BackIcon) : SetIcon(CloseIcon)
        getInfo()
    }, [])

    const getInfo = async () => {
        try {
            const info = await getRestaurants();
            SetRestaurants(info.restaurants)
        } catch (err) {
            alert('intente de nuevo')
        }
    }

    const isMobile = () => window.innerWidth <= 768 ? true : false;


    return (
        <nav className="navbar">
            <img className='closeOrBackIcon' src={icon} alt='icon'></img>
            <h2 className='TextNavLuchTime'>Lunch Tyme</h2>
            <img className='navbarMapsIcon' alt='iconMaps' src={MapsIcon}></img>

        </nav>
    )
}

export default NavBar