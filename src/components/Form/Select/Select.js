import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = ({ category }) =>  (
    <div className={styles.item}>
            <select 
                className={styles.select}
                id="categories">

                {category.map(item => (
                    <option key={item.category} 
                        className={styles.product}
                        value={item.category}    
                    >
                        {item.category}                    
                    </option>
                ))}
            </select>
            <label 
                className={styles.label}
                htmlFor="categories">Choose a category:
            </label>
        </div>
    );

Select.propTypes = {
    category: PropTypes.array
}

export default Select;