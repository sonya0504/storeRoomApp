import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({name, label}) => (
    <div className={styles.item}>
        <input
            className={styles.input}
            type="text"
            name={name}
            id={name}
            required
            placeholder=" "
        />
        <label className={styles.label} htmlFor={name}>
            {label}
        </label>
        <div className={styles.itemBar} />
  </div>
);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }
  
export default Input;