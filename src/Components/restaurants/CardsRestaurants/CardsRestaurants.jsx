import React, { useEffect, useContext } from 'react';
import getRestaurants from '../FetchRestaurantes/GetRestaurants'
import CardRestaurant from './CardRestaurant/CardRestaurant'
import { UserContext } from '../../Context/RestaurantContext'
import Map from '../MapsRestaurants/MapsRestaurants'
import CloseIcon from '../../../assets/Cuts/ic_close@3x.png'
import './CardsRestaurants.css'

// this function bring the info of API , and maped the info to create the cards to every restaurant
function CardsRestaurants() {
    // we import the statates that we are going to use from context
    const { restaurants, SetRestaurants, restaurantSelected, setRestaurantSelected } = useContext(UserContext);

    // useEffect was used to bring the restaurants after the rendering of the components
    useEffect(() => {
        getInfo()
    }, [])
    // get info brings the info from the Api
    const getInfo = async () => {
        try {
            const info = await getRestaurants();
            // after the API return with the info it is saved on a state of context
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
                        <div className='container1'>
                            <div className='MapRestaurantsDesktop'>
                                <div className='miniNavMap'>
                                    <img onClick={() => setRestaurantSelected('')} className='closeIconImage' src={CloseIcon} alt='closeIcon' />
                                    <Map />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default CardsRestaurants