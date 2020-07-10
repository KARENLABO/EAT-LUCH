import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import ContainerController from './Components/ContainerController/ContainerController'
import { UserContextProvider } from "./Components/Context/RestaurantContext";
import './App.css';



function App() {

    return (
        <UserContextProvider>
            <NavBar />
            <ContainerController />
        </UserContextProvider>
    );
}



export default App;
