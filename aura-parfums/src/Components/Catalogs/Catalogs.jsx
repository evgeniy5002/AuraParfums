import React from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import styles from "./Catalogs.module.scss";

const Catalogs = () => {
    return (
        <div className={styles.container}>
            <span>Catalogs page</span>
        </div>
    )
}

export default Catalogs;