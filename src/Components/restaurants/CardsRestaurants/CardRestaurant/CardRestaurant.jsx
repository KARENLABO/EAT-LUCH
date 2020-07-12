import React, { useContext } from 'react';
import '../CardRestaurant/CardRestaurant.css'
import gradiantImg from '../../../../assets/Cuts/cellGradientBackground@3x.png'
import { UserContext } from '../../../Context/RestaurantContext'
import Mapa from '../../MapsRestaurants/MapsRestaurants'
import MobileOnly from '../../../MobileOnly'
import { useHistory } from 'react-router-dom'

const isWindowMobile = () => window.innerWidth <= 768;

function CardRestaurant({ inforestaurant }) {
    const history = useHistory()
    const { restaurantSelected, setRestaurantSelected } = useContext(UserContext);

    function detailsRestaurant(inforestaurant) {
        setRestaurantSelected(inforestaurant);
        if (isWindowMobile()) {
            history.push('/RestaurantDetail')
        }
    }

    // const mostrarMapa = restaurantSelected && inforestaurant.name === restaurantSelected.name

    return (
        <>

            <div onClick={() => detailsRestaurant(inforestaurant)} className="card text-white">
                <img src={inforestaurant.backgroundImageURL} className="card-img" alt="..." />
                <img src={gradiantImg} className='ssa' alt='ss' />
                <div className="card-img-overlay">
                    <h5 className="card-title">{inforestaurant.name}</h5>
                    <p className="card-text">{inforestaurant.category}</p>
                </div>
            </div>
        </>

    )
}

export default CardRestaurant