import React from 'react'
import Map from './Map'
import credentials from './Credentials'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.41&key=${credentials.mapsKey}`;


// with this function, we make the petition to google Maps API
const MapsRestaurants = () => {
    return (
        <div className='conttainerMaprestaurant'>
            <Map googleMapURL={mapURL}
                containerElement={<div style={{ height: '180px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
                loadingElement={<p>Loading...</p>}
            />
        </div>
    );
}

export default MapsRestaurants;