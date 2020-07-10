import React from 'react';
import '../CardRestaurant/CardRestaurant.css'
import gradiantImg from '../../../../assets/Cuts/cellGradientBackground@3x.png'




function CardRestaurant({ inforestaurant }) {

    function hola() {
        console.log('entre')


    }

    return (

        <div onClick={() => hola()} className="card text-white">
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