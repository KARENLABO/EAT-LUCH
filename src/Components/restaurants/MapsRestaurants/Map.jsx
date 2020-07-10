import React, { useContext } from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'
import { UserContext } from '../../Context/RestaurantContext'
import './MapsRestaurants.css'


const Map = (props) => {
    const { restaurantDetail } = useContext(UserContext);

    // location of restaurant
    const latitud = restaurantDetail.location.lat;
    const longitud = restaurantDetail.location.lng;

    return (
        <div>
            <GoogleMap
                defaultZoom={20}
                defaultCenter={{ lat: latitud, lng: longitud }}
            />

            <div className='containerNameRestaurantMap'>
                <h5> {restaurantDetail.name}</h5>
                <p>{restaurantDetail.category}</p>
            </div>

            <div>
                <h5>
                    {restaurantDetail.location.address}
                </h5>
                <h6>
                    {restaurantDetail.location.crossStreet}
                </h6>
                <p>
                    {restaurantDetail.contact.formattedPhone}
                </p>
                <p>
                    {'@twitter' + restaurantDetail.contact.twitter}
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