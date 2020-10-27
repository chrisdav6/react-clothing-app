import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './signUp.scss';

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = signUp;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setSignUp({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  return (
    <div className='SignUp'>
      <h2 className='title'>I do not have an account.</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={signUp.displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={signUp.email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={signUp.password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={signUp.confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;