import React, { useContext } from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'
import { UserContext } from '../../Context/RestaurantContext'
import './MapsRestaurants.css'


const Map = (props) => {
    const { restaurantSelected } = useContext(UserContext);

    // location of restaurant
    const latitud = restaurantSelected.location.lat;
    const longitud = restaurantSelected.location.lng;

    return (
        <div>
            <GoogleMap
                defaultZoom={20}
                defaultCenter={{ lat: latitud, lng: longitud }}
            />

            <div className='containerNameRestaurantMap'>
                <h5> {restaurantSelected.name}</h5>
                <p>{restaurantSelected.category}</p>
            </div>

            <div>
                <h5>
                    {restaurantSelected.location.address}
                </h5>
                <h6>
                    {restaurantSelected.location.crossStreet}
                </h6>
                <p>
                    {restaurantSelected.contact.formattedPhone}
                </p>
                <p>
                    {'@twitter' + restaurantSelected.contact.twitter}
                </p>
            </div>
        </div>
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
);