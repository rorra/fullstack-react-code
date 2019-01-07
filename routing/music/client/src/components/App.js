import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import TopBar from './TopBar';
import PrivateRoute from './PrivateRoute';
import AlbumsContainer from './AlbumsContainer';
import Login from './Login';
import Logout from './Logout';

import '../styles/App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar/>
    <div className='spacer row'/>
    <div className='row'>
      <Switch>
        <PrivateRoute path='/albums' component={ AlbumsContainer }/>
        <Route path='/login' component={ Login }/>
        <Route path='/logout' component={ Logout }/>

        <Route exact path='/' render={ () => (
          <Redirect
            to='/albums'
          />
        ) }/>
      </Switch>
    </div>
  </div>
);

export default App;
