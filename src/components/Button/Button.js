import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, secondary}) => {
  
  const buttonClass = secondary ? styles.secondary : styles.button;

  return (
    
  <button className={buttonClass}>{children}</button>
  )
};

export default Button;