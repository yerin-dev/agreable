import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Home from "../pages/Home";
import Cart from "./../pages/Cart";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
