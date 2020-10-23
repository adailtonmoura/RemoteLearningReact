import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage"
import Disciplines from "./pages/Disciplines"

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/discipline" component={Disciplines}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes