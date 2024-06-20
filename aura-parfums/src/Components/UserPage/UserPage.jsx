import React from "react";
import styles from "./UserPage.module.scss";
import { Outlet } from "react-router-dom";
import UserPageMenu from "./UserPageMenu/UserPageMenu";

const UserPage = () => {
    return (
        <div className={styles["user-page"]}>
            <UserPageMenu />
            <Outlet />
        </div>
    );
}

export default UserPage;