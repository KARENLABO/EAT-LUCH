import React from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'
import './MapsRestaurants.css'


const Map = (props, { infoRestaurant }) => {
    console.log(infoRestaurant)
    return (
        <div>
            <GoogleMap
                defaultZoom={20}
                defaultCenter={{ lat: 32.950787, lng: -96.821118 }}
            />
            <div className='containerNameRestaurantMap'>
                <h5> Restaurant Name </h5>
                <p>category Type</p>
            </div>

            <div>
                <h5>direccion</h5>
                <p>
                    telefono
                </p>
                <p>
                    twitter
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