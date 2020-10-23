import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/homepage/Homepage';
import './app.scss';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
