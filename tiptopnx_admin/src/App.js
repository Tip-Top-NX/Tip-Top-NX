import React from "react";
import { Switch, Route } from "react-router";
import Login from "./containers/Login/Login";
import Home from "./containers/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Drawer from "./components/Drawer";
import Add from "./containers/Add";
import ProductCard from "./components/ProductCard";
import PendingOrders from "./containers/PendingOrders";
import ConfirmedOrders from './containers/ConfirmedOrders';
import History from './containers/History';

function App() {
  return (
    <Switch>
      <ProtectedRoute
        path="/admin"
        component={() => (
          <Drawer>
            <Route exact path="/admin" component={Home} />
            <Route exact path="/admin/add" component={Add} />
            <Route exact path="/admin/product" component={ProductCard} />
            <Route exact path="/admin/pending-orders"component={PendingOrders}/>
            <Route exact path="/admin/confirmed-orders"component={ConfirmedOrders}/>
            <Route exact path="/admin/history"component={History}/>
          </Drawer>
        )}
      />
      <Route path="/" component={Login} />
    </Switch>
  );
}

export default App;
