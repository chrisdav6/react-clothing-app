import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './header/Header';
import Homepage from '../pages/homepage/Homepage';
import Shop from '../pages/shop/Shop';
import SignInAndSignUp from '../pages/sign-in-and-sign-up/SignInAndSignUp';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.actions';
import './app.scss';

const App = props => {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    const { setCurrentUser } = props;

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      setCurrentUser(userAuth);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
