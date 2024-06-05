import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useLocation } from 'react-router-dom';

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
                <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1712966400&semt=ais" alt="" />
            </div>

            <nav className={styles.navigation}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalogs">Каталог</Link></li>
                    <li><Link to="/brands">Бренды</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                    <li>Подобрать аромат</li>
                    {/* <li><Link to="/homepage">Homepage</Link></li> */}
                </ul>
            </nav>

        </header>
    );
}

export default Header;