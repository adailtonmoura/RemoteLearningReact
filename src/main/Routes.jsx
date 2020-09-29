import React from 'react';

import {BrowserRouter ,Route, Switch, Redirect} from 'react-router-dom';

import Disciplines from '../components/Discipline'

export default (props) => 
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Disciplines} />
            <Redirect from='*'to='/'/>
        </Switch>
    </BrowserRouter>

  