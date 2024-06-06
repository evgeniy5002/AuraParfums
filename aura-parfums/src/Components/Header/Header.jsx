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
                <Link to="/">
                    <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1712966400&semt=ais" alt="" />
                </Link>
            </div>

            <nav className={styles.navigation}>
                <div className={styles.nanContainer}>
                    <div>
                        <ul>
                            <li><Link to="/catalogs">Каталог</Link></li>
                            <li><Link to="/brands">Бренды</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                            <li>Подобрать аромат</li>
                            {/* <li><Link to="/homepage">Homepage</Link></li> */}
                        </ul>
                    </div>

                    <div className={styles.input}>
                        <input type="text" />
                    </div>

                    <div className={styles.userLinks}>
                        <a href="#">
                            <img src={"Images/user.png"} alt="user" />
                        </a>

                        <a href="#">
                            <img src={"Images/heart.png"} alt="heart" />
                        </a>

                        <a href="#">
                            <img src={"Images/cart.png"} alt="cart" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;