import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({tag: Tag, name, label}) => (
    <div className={styles.item}>
        <Tag
            className={Tag === 'textarea' ? styles.textarea : styles.input}
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
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }
  
export default Input;