import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({children, secondary}) => {
  
  const buttonClass = secondary ? styles.secondary : styles.button;

  return (
    
  <button className={buttonClass}>{children}</button>
  )
};

Button.propTypes = {
  secondary: PropTypes.bool,
  children: PropTypes.string.isRequired
}

Button.defaultProps = {
  secondary: false
}

export default Button;