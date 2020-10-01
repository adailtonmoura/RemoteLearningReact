import React from 'react';

import {BrowserRouter ,Route, Switch, Redirect} from 'react-router-dom';

import Disciplines from '../components/disciplines/Discipline'
import RemoteClass from '../components/remoteclass/RemoteClass';

export default () => 
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Disciplines} />
            <Route path='/disciplines/:id' component={RemoteClass} />
            <Redirect from='*'to='/'/>
        </Switch>
    </BrowserRouter>

  