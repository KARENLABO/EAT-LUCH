import React from 'react'
import Map from './Map'
import credentials from './Credentials'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.41&key=${credentials.mapsKey}`;

const MapsRestaurants = () => {
    return (
        <div className='conttainerMaprestaurant'>
            <Map googleMapURL={mapURL}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                loadingElement={<p>Loading...</p>}

            />
        </div>
    );
}

export default MapsRestaurants;