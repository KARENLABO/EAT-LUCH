import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar/NavBar';
import Restaurants from './Components/restaurants/CardsRestaurants/CardsRestaurants'
import './App.css';
import RestaurantDetail from './Components/restaurants/MapsRestaurants/MapsRestaurants'

function App() {

  useEffect(() => {
    isMobile() ? setComponent(<Restaurants />) : setComponent(<NavBar />)
  }, [])

  const [component, setComponent] = useState(<Restaurants />)
  return (
    <div>
      <NavBar />
      <RestaurantDetail />
      {/* {component} */}
    </div>
  );
}

const isMobile = () => window.innerWidth <= 768 ? true : false;

export default App;
