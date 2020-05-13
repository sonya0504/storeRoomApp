import React from 'react';
import styles from './ListWrapper.module.scss';
import ListItem from './ListItem/ListItem';

const ListWrapper = (props) => (
    <ul className={styles.wrapper}>
        {props.items.map(item => (
            <ListItem key={item} {...item} />
        ))}
    </ul>
);

export default ListWrapper;