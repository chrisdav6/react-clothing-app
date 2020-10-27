import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Homepage from '../pages/homepage/Homepage';
import Shop from '../pages/shop/Shop';
import SignInAndSignUp from '../pages/sign-in-and-sign-up/SignInAndSignUp';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import './app.scss';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
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
      setCurrentUser({ currentUser: userAuth });
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

export default App;
