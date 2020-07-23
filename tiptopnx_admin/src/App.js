import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import Login from "./containers/Login/Login";
import Home from "./containers/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Drawer from "./components/Drawer";
import Add from "./containers/Add";
import ProductCard from "./components/ProductCard";
import PendingOrders from "./containers/PendingOrders";
import ConfirmedOrders from "./containers/ConfirmedOrders";
import History from "./containers/History";
import axios from "./utils/axios";
import { getConfig } from "./utils/config";
import DeletedProducts from "./components/Deleted";
import Signup from "./containers/Signup";
import User from './containers/User';

function App() {
  const [change, setChange] = React.useState(false);
  const [pending, setPending] = React.useState([]);
  const [confirmed, setConfirmed] = React.useState([]);
  const [completed, setCompleted] = React.useState([]);

  useEffect(() => {
    if(sessionStorage.getItem("token")){
      axios
      .get("/admin/orders/", getConfig())
      .then((res) => {
        filterProducts(res.data);
      })
      .catch((err) => console.log(err));
    }
  }, [change]);

  const filterProducts = (data) => {
    const pending = data.filter((o) => o.status === "Pending");
    const confirmed = data.filter((o) => o.status === "Confirmed");
    const completed = data.filter(
      (o) => o.status === "Cancelled" || o.status === "Delivered"
    );
    setPending([...pending]);
    setCompleted([...completed]);
    setConfirmed([...confirmed]);
  };

  return (
    <Switch>
      <ProtectedRoute
        path="/admin"
        component={() => (
          <Drawer
            pending={pending.length}
            confirmed={confirmed.length}
            completed={completed.length}
          >
          <Route exact path="/admin" component={Home} />
            <Route exact path="/admin/add-admin" component={Signup} />
            <Route exact path="/admin/use-points" component={User} />
            <Route exact path="/admin/add" component={Add} />
            <Route exact path="/admin/deleted" component={DeletedProducts} />
            <Route exact path="/admin/product" component={ProductCard} />
            <Route
              exact
              path="/admin/pending-orders"
              component={() => (
                <PendingOrders
                  orders={pending}
                  fetchOrders={() => setChange(!change)}
                />
              )}
            />
            <Route
              exact
              path="/admin/confirmed-orders"
              component={() => (
                <ConfirmedOrders
                  orders={confirmed}
                  fetchOrders={() => setChange(!change)}
                />
              )}
            />
            <Route
              exact
              path="/admin/history"
              component={() => (
                <History
                  orders={completed}
                  fetchOrders={() => setChange(!change)}
                />
              )}
            />
          </Drawer>
        )}
      />
      <Route path="/" component={() => 
        <Login filterProducts={(data) => filterProducts(data)} />
      } />
    </Switch>
  );
}

export default App;
