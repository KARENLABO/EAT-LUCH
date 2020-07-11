import React, { useEffect, useContext } from 'react';
import getRestaurants from '../FetchRestaurantes/GetRestaurants'
import CardRestaurant from './CardRestaurant/CardRestaurant'
import { UserContext } from '../../Context/RestaurantContext'
import './CardsRestaurants.css'

function CardsRestaurants() {

    const { restaurants, SetRestaurants } = useContext(UserContext);

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
        </>
    )
}

export default CardsRestaurants