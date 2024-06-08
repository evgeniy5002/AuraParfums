import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useLocation } from 'react-router-dom';
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";

const Header = () => {
    const location = useLocation();

    const getHeaderClass = () => {
        const path = location.pathname;

        if (path.startsWith('/catalogs')) {
            return 'headerCatalogs';
        }
        else if (path.startsWith('/contacts')) {
            return 'headerContacts';
        }
        else if (path.startsWith('/brands')) {
            return 'headerBrands';
        }
        else if (path.startsWith('/')) {
            return 'headerHomepage';
        }
        else {
            return 'headerDefault';
        }
    };

    return (
        <header className={[styles.container, styles[getHeaderClass()]].join(" ")}>
            
            <div className={styles.logo}>
                <Link to="/">
                    <img src={"Images/AuraLogo.png"} alt="" />
                </Link>
            </div>
            
                <HeaderMenu></HeaderMenu>

        </header>
    );
}
export default Header;
