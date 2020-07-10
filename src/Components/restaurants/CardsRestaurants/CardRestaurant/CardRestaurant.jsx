import React, { useContext, useEffect } from 'react';
import '../CardRestaurant/CardRestaurant.css'
import gradiantImg from '../../../../assets/Cuts/cellGradientBackground@3x.png'
import { UserContext } from '../../../Context/RestaurantContext'



function CardRestaurant({ inforestaurant }) {

    const { setIsmobile, SetRestaurantDetail, component, Controller, setComponent, setActivateOnclick } = useContext(UserContext);

    function detailsRestaurant() {
        setIsmobile(() => window.innerWidth <= 768 ? true : false);
        setActivateOnclick(true);
        SetRestaurantDetail(inforestaurant);
        setComponent();
        Controller()
        console.log(component);
    }

    return (

        <div onClick={() => detailsRestaurant()} className="card text-white">
            <img src={inforestaurant.backgroundImageURL} className="card-img" alt="..." />
            <img src={gradiantImg} className='ssa' alt='ss' />
            <div className="card-img-overlay">
                <h5 className="card-title">{inforestaurant.name}</h5>
                <p className="card-text">{inforestaurant.category}</p>
            </div>
        </div>

    )
}

export default CardRestaurant