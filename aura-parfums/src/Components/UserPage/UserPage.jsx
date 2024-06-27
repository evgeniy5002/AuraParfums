import React from "react";
import styles from "./UserPage.module.scss";
import { Outlet } from "react-router-dom";
import UserPageMenu from "./UserPageMenu/UserPageMenu";

const UserPage = () => {
    return (
        <main className="main">
            <UserPageMenu />
            <Outlet />
        </main>
    );
}

export default UserPage;