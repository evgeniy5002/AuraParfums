import { React } from "react";
import { useLocation } from 'react-router-dom';
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import Logo from "./Logo/Logo.jsx";
import styles from "./Header.module.scss";

const Header = () => {
    const location = useLocation();

    const getHeaderClass = () => {
        const path = location.pathname;

        const headerClasses = {
            '/catalogs': 'header-catalogs',
            '/contacts': 'header-contacts',
            '/brands': 'header-brands',
            '/': 'header-homepage'
        };

        for (const key in headerClasses) {
            if (path.startsWith(key)) {
                return headerClasses[key];
            }
        }

        return 'header-default';
    };
    
    return (
        <header className={styles["header"]}>
            <Logo />
            <HeaderMenu styleName={getHeaderClass()} />
        </header>
    );
}

export default Header;
