import React from 'react'
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
                <li key={item.products.name} className={styles.product}>
                    <span>{item.products.name}</span> <span>{item.products.amount}</span>
                </li>
            ))}
        </ul>
    </li>
);

export default ListItem;