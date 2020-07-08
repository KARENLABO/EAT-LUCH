import React, { useState, useEffect } from 'react';
import MapsIcon from '../../assets/Cuts/icon_map@3x.png'
import './Navbar.css'
import BackIcon from '../../assets/Cuts/ic_webBack@3x.png'
import CloseIcon from '../../assets/Cuts/ic_close@3x.png'

function NavBar() {
    const [icon, SetIcon] = useState();


    useEffect(() => {
        isMobile() ? SetIcon(BackIcon) : SetIcon(CloseIcon)
    }, [])

    const isMobile = () => window.innerWidth <= 768 ? true : false;

    return (
        <div className="navbar">
            <img className='closeOrBackIcon' src={icon} alt='icon'></img>
            <h2 className='TextNavLuchTime'>Lunch Tyme</h2>
            <img className='navbarMapsIcon' alt='iconMaps' src={MapsIcon}></img>
        </div>
    )
}

export default NavBar