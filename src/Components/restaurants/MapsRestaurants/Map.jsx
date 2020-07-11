import React, { useContext } from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'
import { UserContext } from '../../Context/RestaurantContext'
import './MapsRestaurants.css'
import {
    PHONE_NOT_AVAILABLE,
    NOT_AVAILABLE,
    ADDRESS_NOT_AVAILABLE,
    CROSS_STREET_NOT_AVAILABLE
} from '../../../utils/constants'


const Map = (props) => {
    const { restaurantSelected } = useContext(UserContext);
    // location of restaurant
    const validInfo = (infoToCheck, keyword) => {
        return (infoToCheck === null || infoToCheck === undefined ? keyword : infoToCheck);
    }
    console.log('this is restaurants selected')
    console.log(restaurantSelected)
    const latitud = restaurantSelected?.location?.lat;
    const longitud = restaurantSelected?.location?.lng;
    const adress = validInfo(restaurantSelected?.location?.address, ADDRESS_NOT_AVAILABLE);
    const crossStreet = validInfo(restaurantSelected?.location?.crossStreet, CROSS_STREET_NOT_AVAILABLE);
    let formattedPhone = validInfo(restaurantSelected?.contact?.formattedPhone, PHONE_NOT_AVAILABLE);
    const twitter = '@twitter ' + validInfo(restaurantSelected?.contact?.twitter, NOT_AVAILABLE);

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
                    {adress}
                </h5>
                <h6>
                    {crossStreet}
                </h6>
                <p>
                    {formattedPhone}
                </p>
                <p>
                    {twitter}
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