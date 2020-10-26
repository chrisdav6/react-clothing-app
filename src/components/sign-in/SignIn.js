import React, { useState } from 'react';
import './signIn.scss';

const SignIn = () => {
  const [signIn, setSignIn] = useState({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    setSignIn({ email: '', password: '' });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setSignIn({ [name]: value });
  };

  return (
    <div className='SignIn'>
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          value={signIn.email}
          onChange={handleChange}
          required
        />
        <label htmlFor='email'>Email</label>
        <input
          type='password'
          name='password'
          value={signIn.password}
          onChange={handleChange}
          required
        />
        <label htmlFor='password'>Password</label>
        <button>Submit Form</button>
      </form>
    </div>
  );
};

export default SignIn;
