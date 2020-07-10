import React, { useContext } from 'react';
import '../CardRestaurant/CardRestaurant.css'
import gradiantImg from '../../../../assets/Cuts/cellGradientBackground@3x.png'
import { UserContext } from '../../../Context/RestaurantContext'
import Mapa from '../../MapsRestaurants/MapsRestaurants'
import MobileOnly from '../../../MobileOnly'



function CardRestaurant({ inforestaurant }) {

    const { restaurantSelected, setRestaurantSelected } = useContext(UserContext);

    function detailsRestaurant(inforestaurant) {
        setRestaurantSelected(inforestaurant);
    }

    const mostrarMapa = restaurantSelected && inforestaurant.name === restaurantSelected.name

    return (
        <>
            {mostrarMapa && (
                <MobileOnly>
                    <Mapa location={inforestaurant} />

                </MobileOnly>
            )}
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