import React from 'react';
// import gradiantImg from '../../../../assets/Cuts/cellGradientBackground@3x.png'


function CardRestaurant({ inforestaurant }) {

    return (
        <div className="card text-white">
            <img src={inforestaurant.backgroundImageURL} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h5 className="card-title">{inforestaurant.name}</h5>
                <p className="card-text">{inforestaurant.category}</p>
            </div>
        </div>
    )
}

export default CardRestaurant