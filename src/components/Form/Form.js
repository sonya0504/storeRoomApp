import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import Input from './Input/Input';
import Select from './Select/Select';

const Form = ({submitFn, items}) => (
    <div className={styles.wrapper}>
        <h2>Add new product</h2>
        <form 
            autoComplete="off"
            className={styles.form}
            onSubmit={submitFn}
            category={items}
        >
            <Select category={items} />
            <Input name="name" label="Name" />
            <Input name="amount" label="Amount" />
            
            <button type="submit" className={styles.button}>
                add new item
            </button>
        </form>
    </div>
);

Form.propTypes = {
    submitFn: PropTypes.func,
    items: PropTypes.array,
}  

export default Form;