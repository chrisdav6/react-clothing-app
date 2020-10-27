import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './signInAndSignUp.scss';

const SignInAndSignUp = () => {
  return (
    <div className='SignInAndSignUp'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
