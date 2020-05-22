import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListWrapper.module.scss';
import ListItem from './ListItem/ListItem';

const ListWrapper = ({items}) => (
    <ul className={styles.wrapper}>
        {items.map(item => (
            <ListItem key={item.id} {...item} />
        ))}
    </ul>
);

ListWrapper.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListWrapper;