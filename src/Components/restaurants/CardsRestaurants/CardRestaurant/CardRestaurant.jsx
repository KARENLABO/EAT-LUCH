import React, { useContext } from 'react';
import gradiantImg from '../../../../assets/Cuts/cellGradientBackground@3x.png'
import { UserContext } from '../../../Context/RestaurantContext'
import { useHistory } from 'react-router-dom'
import '../CardRestaurant/CardRestaurant.css'

// this function checked if is mobile.
const isWindowMobile = () => window.innerWidth <= 768;


// this function recived the info of every restaurant and coverted it on a card of boostrap
function CardRestaurant({ inforestaurant }) {

    const history = useHistory()

    const { setRestaurantSelected } = useContext(UserContext);

    function detailsRestaurant(inforestaurant) {
        // we saved the info of the restaurant selected in context
        setRestaurantSelected(inforestaurant);
        if (isWindowMobile()) {
            // we redirect to restaurant detail, only if is mobile.
            history.push('/RestaurantDetail')
        }
    }

    // this is the template to create every card
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