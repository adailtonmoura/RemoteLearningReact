import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Disciplines from "../components/disciplines";
import RemoteClass from "../components/remoteclass";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/disciplines" component={Disciplines} />
      <Route path="/disciplines/:id" component={RemoteClass} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
