import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ListItem.module.scss';

const ListItem = ({
    icon,
    category,
    unit,
    products
}) => (
    <li className={styles.listItem}>
        <div className={styles.header}>
             <FontAwesomeIcon icon={icon} className={styles.icon}/>
            <h3 className={styles.category}>{category} <span className={styles.unit}>({unit})</span></h3>
        </div>
        <ul className={styles.productsList}>
            {products.map(item => (
                <li key={item.name} className={styles.product}>
                    <span>{item.name}</span> <span>{item.amount}</span>
                </li>
            ))}
        </ul>
    </li>
);

ListItem.propTypes = {
    icon: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ListItem;