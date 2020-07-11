import React from 'react';
import RestaurantDetail from './Components/Views/RestaurantDetail/RestaurantDetail'
import AllRestaurantsView from './Components/Views/AllRestaurantsView/AllRestaurantsView'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContextProvider } from "./Components/Context/RestaurantContext";
import PrivateRoute from './Components/Context/PrivateRoute';

import './App.css';



function App() {

    return (
        <Router>
            <UserContextProvider>
                <Switch>
                    <Route exact path='/' component={AllRestaurantsView} />
                    <PrivateRoute path='/RestaurantDetail' component={RestaurantDetail} />
                </Switch>
            </UserContextProvider>
        </Router >

    )
}



export default App;
