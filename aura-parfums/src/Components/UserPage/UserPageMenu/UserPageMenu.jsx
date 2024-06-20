import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserPageMenu.module.scss";

const UserPageMenu = () => {
    const [isLoggedIn, setLoggedIn] = React.useState(true);

    const renderNavLink = (to, text) => {
        return (
            <NavLink className={({ isActive }) => `${styles["nav-link"]} ${isActive ? styles["active-nav-link"] : ""}`} to={to}>
                <span>{text}</span>
            </NavLink>
        );
    };

    return (
        <div className={styles["user-page-menu"]}>
            <nav className={styles["nav-container"]}>
                {isLoggedIn ? (
                    <>
                        {renderNavLink("workshop", "Майстерня")}
                        {renderNavLink("orders", "Замовлення")}
                        {renderNavLink("profile", "Профіль")}

                        {/* имитация выхода из аккаунта */}
                        <div className={styles["nav-link"]} onClick={() => setLoggedIn(false)}>
                            <span>Вийти</span>
                        </div>
                    </>
                ) : (
                    <>
                        {renderNavLink("login", "Увійти")}
                        {renderNavLink("registration", "Зареєструватись")}
                        {renderNavLink("restore-password", "Відновити пароль")}
                    </>
                )}
            </nav>
        </div>
    );
}

export default UserPageMenu;