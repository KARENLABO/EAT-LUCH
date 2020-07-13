import React, { useContext } from 'react';
import MapsIcon from '../../assets/Cuts/icon_map@3x.png'
import BackIcon from '../../assets/Cuts/ic_webBack@3x.png'
import { UserContext } from '../Context/RestaurantContext'
import { Link } from 'react-router-dom'
import './Navbar.css'

function NavBar() {
    // we import the states created on use context and we use, and update the info.
    const { restaurantSelected, setRestaurantSelected } = useContext(UserContext);

    return (
        <nav className="navbar fixed-top">
            {
                // only if is mobile and if there is a restaurant selected, back icon will be appear.
                restaurantSelected && window.innerWidth <= 768 && (
                    // here I used link because if you want to redirect with history, react show an error
                    <Link className='OptionsToAuth' to='/'>
                        <img className='closeOrBackIcon'
                            src={BackIcon}
                            alt='icon'
                            // Also i had to change the state of the restaurant, because if i dont use, when you return to allrestaurants the map will be there.
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