import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './signIn.scss';

const SignIn = () => {
  const [signIn, setSignIn] = useState({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    setSignIn({ email: '', password: '' });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  return (
    <div className='SignIn'>
      <h2 className='title'>I already have an account.</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={signIn.email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={signIn.password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Submit Form</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
