import React, { useState, useEffect } from 'react';
import NavBar from './Components/Navbar/NavBar';
import Restaurants from './Components/restaurants/CardsRestaurants/CardsRestaurants'
import './App.css';
import { UserContextProvider } from "../src/Components/RestaurantContext/RestaurantContext";
import RestaurantDetail from './Components/restaurants/MapsRestaurants/MapsRestaurants'



function App() {

  useEffect(() => {
    isMobile() ? setComponent(<Restaurants />) : setComponent(<RestaurantDetail hola={'hola'} />)
  }, [])

  const [component, setComponent] = useState(<Restaurants />)
  return (
    <UserContextProvider>
      <div>
        <NavBar />
        {component}
      </div>
    </UserContextProvider>
  );
}

const isMobile = () => window.innerWidth <= 768 ? true : false;

export default App;
