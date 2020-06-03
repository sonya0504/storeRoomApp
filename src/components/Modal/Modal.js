import React from "react";
import styles from "./Modal.module.scss";
import Form from "components/Form/Form";

const Modal = ({ submitFn, items, closeModalFn }) => (
  <div className={styles.wrapperRoot}>
    <div className={styles.wrapper}>
      <button className={styles.closeButton} onClick={closeModalFn}></button>
      <Form submitFn={submitFn} items={items} />
    </div>
  </div>
);

export default Modal;
