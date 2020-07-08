import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import Restaurants from './Components/restaurants/CardsRestaurants/CardsRestaurants'
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Restaurants />
    </div>
  );
}

export default App;
