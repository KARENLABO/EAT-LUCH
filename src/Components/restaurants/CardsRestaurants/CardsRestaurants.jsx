import React, { useEffect, useContext } from 'react';
import getRestaurants from '../FetchRestaurantes/GetRestaurants'
import CardRestaurant from './CardRestaurant/CardRestaurant'
import { UserContext } from '../../Context/RestaurantContext'
import Map from '../MapsRestaurants/MapsRestaurants'
import './CardsRestaurants.css'

function CardsRestaurants() {

    const { restaurants, SetRestaurants, restaurantSelected } = useContext(UserContext);

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

            </div>
            {
                restaurantSelected && (<div className='MapRestaurantsDesktop'> <Map /></div>)
            }
        </>
    )
}

export default CardsRestaurants