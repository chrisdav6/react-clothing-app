import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Homepage from '../pages/homepage/Homepage';
import Shop from '../pages/shop/Shop';
import './app.scss';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
