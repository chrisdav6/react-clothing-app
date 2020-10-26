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
      <h2>I already have an account.</h2>
      <span className='title'>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={signIn.email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={signIn.password}
          handleChange={handleChange}
          label='password'
          required
        />
        <CustomButton type='submit'>Submit Form</CustomButton>
        <CustomButton
          onClick={signInWithGoogle}
          style={{ marginLeft: '5px' }}
          isGoogleSignIn
        >
          Sign in with Google
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
