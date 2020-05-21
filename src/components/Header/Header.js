import React from "react";
import styles from "./Header.module.scss";
import HeaderNavigation from "./HeaderNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button/Button";

const Header = () => (
  <header className={styles.wrapper}>
    <FontAwesomeIcon icon={faShoppingBag} className={styles.logo} />
    <HeaderNavigation />
    <Button secondary>new item</Button>
  </header>
);

export default Header;
