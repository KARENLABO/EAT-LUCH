import React, { useEffect, useContext } from 'react';
import getRestaurants from '../FetchRestaurantes/GetRestaurants'
import CardRestaurant from './CardRestaurant/CardRestaurant'
import { UserContext } from '../../Context/RestaurantContext'
import Map from '../MapsRestaurants/MapsRestaurants'
import CloseIcon from '../../../assets/Cuts/ic_close@3x.png'
import './CardsRestaurants.css'


function CardsRestaurants() {

    const { restaurants, SetRestaurants, restaurantSelected, setRestaurantSelected } = useContext(UserContext);

    useEffect(() => {
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

    return (
        <>
            <div className='ContainerCardsRestaurant'>

                {restaurants.map(restaurant => (
                    <div className='ContainerEveryCard' key={restaurant.name}>
                        <CardRestaurant inforestaurant={restaurant} />
                    </div>
                ))}
                {
                    restaurantSelected && window.innerWidth > 729 && (
                        <div className='MapRestaurantsDesktop'>
                            <div className='miniNavMap'>
                                <img onClick={() => setRestaurantSelected('')} className='closeIconImage' src={CloseIcon} alt='closeIcon'></img>
                            </div>
                            <Map />
                        </div>)
                }
            </div>

        </>
    )
}

export default CardsRestaurants