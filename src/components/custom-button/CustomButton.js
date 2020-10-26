import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className='CustomButton' {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
