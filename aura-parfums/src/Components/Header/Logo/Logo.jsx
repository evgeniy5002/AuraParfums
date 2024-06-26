import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = ({ styleName }) => {
    return (
        <div className={`${styles["logo"]} ${styles[styleName]}`}>
            <Link to="/">
                <img src={"Images/header/AuraLogo.svg"} alt="" />
            </Link>
        </div>
    )
}

export default Logo;