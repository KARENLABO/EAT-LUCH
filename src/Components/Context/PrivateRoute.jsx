import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './RestaurantContext';


// this is de private route that is used to show the map on mobile mode.
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { restaurantSelected } = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={(routeProps) => (
                !!restaurantSelected
                    ? (<Component {...routeProps} />)
                    : (<Redirect to="/" />)
            )}
        />
    );
};

export default PrivateRoute;