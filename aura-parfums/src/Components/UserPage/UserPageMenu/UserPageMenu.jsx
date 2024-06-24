import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { removeUser } from "../../../Store/Actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./UserPageMenu.module.scss";

const UserPageMenu = () => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const renderNavLink = (to, text) => {
        return (
            <NavLink className={({ isActive }) => `${styles["nav-link"]} ${isActive ? styles["active-nav-link"] : ""}`} to={to}>
                <span>{text}</span>
            </NavLink>
        );
    };

    const handleLogOut = () => {
        dispatch(removeUser());
        navigate("login");
    }

    return (
        <div className={styles["user-page-menu"]}>
            <nav className={styles["nav-container"]}>
                {
                    isAuth ? (
                        <>
                            {renderNavLink("workshop", "Майстерня")}
                            {renderNavLink("orders", "Замовлення")}
                            {renderNavLink("profile", "Профіль")}
                            <button className={styles["nav-link"]} onClick={handleLogOut}>Вийти</button>
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