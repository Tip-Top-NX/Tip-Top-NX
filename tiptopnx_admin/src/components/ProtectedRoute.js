import React from 'react';  
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (
      sessionStorage.getItem("isAdmin")     
       ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )

  export default PrivateRoute;