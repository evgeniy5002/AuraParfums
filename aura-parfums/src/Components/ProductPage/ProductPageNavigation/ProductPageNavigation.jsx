import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductPageNavigation.module.scss";

const ProductPageNavigation = () => {

    const renderNavLink = (to, text) => {
        return (
            <NavLink className={({ isActive }) => `${styles["nav-link"]} ${isActive ? styles["active-nav-link"] : ""}`} to={to}>
                <span>{text}</span>
            </NavLink>
        );
    };

    return (
        <div className={styles["product-page-navigation"]}>
            <nav className={styles["nav-container"]}>
                {renderNavLink("description", "Опис")}
                {renderNavLink("additional-information", "Додаткова інформація")}
                {renderNavLink("reviews", "Відгуки (0)")}
            </nav>
        </div>
    )
}

export default ProductPageNavigation;