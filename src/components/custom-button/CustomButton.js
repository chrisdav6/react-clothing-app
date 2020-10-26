import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} CustomButton`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
