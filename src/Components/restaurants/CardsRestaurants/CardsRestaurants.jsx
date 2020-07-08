import React, { useState, useEffect } from 'react';
import getRestaurants from '../FetchRestaurantes/GetRestaurants'
import CardRestaurant from './CardRestaurant/CardRestaurant'
import './CardsRestaurants.css'

function CardsRestaurants() {
    const [restaurants, SetRestaurants] = useState([])

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
        <div >

            <div className='cards'>
                {restaurants.map(restaurant => (

                    <div key={restaurant.name}>
                        <CardRestaurant inforestaurant={restaurant} />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default CardsRestaurants