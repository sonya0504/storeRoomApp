import React from 'react';
import styles from './Modal.module.scss';
import Form from "components/Form/Form";

const Modal = ({ submitFn, items }) => (
<div className={styles.wrapper}>
    <Form submitFn={submitFn} items={items}/>
</div>
);

export default Modal;