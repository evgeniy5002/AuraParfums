import React, { useState, useEffect } from "react";
import styles from "./HeaderMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export const HeaderMenu = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State для открытия/закрытия меню
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State для открытия/закрытия выпадающего списка

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 1400) {
                setIsMenuOpen(false); // Close the menu if width is greater than 1400px
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [search, setSearch] = useState("");

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function applySearch(e) {
        e.preventDefault();
        const params = new URLSearchParams();
        params.set("search", search);
        navigate(`/catalogs?${params.toString()}`, { replace: true });
    }

    // Функция для переключения состояния открытия/закрытия меню
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Закрытие меню при клике на ссылку в мобильном меню
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Функция для переключения состояния открытия/закрытия выпадающего списка
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`${styles.header_container} container`}>
            <FontAwesomeIcon
                className={styles.burger_icon}
                icon={faBars}
                onClick={toggleMenu} // Добавляем onClick для переключения меню
            />

            {/* Сайдбар для мобильного меню */}
            {isMenuOpen && (
                <div className={styles.mobile_menu_right}>
                    <ul>
                        <li>
                            <Link to="/catalogs" onClick={closeMenu}>Каталог</Link>
                        </li>
                        <li>
                            <Link to="/brands" onClick={closeMenu}>Бренди</Link>
                        </li>
                        <li>
                            <Link to="/contacts" onClick={closeMenu}>Контакти</Link>
                        </li>
                        <li>
                            <Link to="/fragnance-choice" onClick={closeMenu}>Підібрати аромат</Link>
                        </li>
                    </ul>
                </div>
            )}

            <nav>
                <ul className={styles.menu}>
                    <li className={styles.dropdown} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <Link to="/catalogs">
                            <span>Каталог</span>
                        </Link>
                        <FontAwesomeIcon icon={faAngleDown} onClick={toggleDropdown} />
                        {isDropdownOpen && (
                            <ul className={styles.dropdown_menu}>
                                <li><Link to="/catalogs?category=niche">Нішева парфумерія</Link></li>
                                <li><Link to="/catalogs?category=lux">Люксова парфумерія</Link></li>
                                <li><Link to="/catalogs?category=female">Жіноча парфумерія</Link></li>
                                <li><Link to="/catalogs?category=male">Чоловіча парфумерія</Link></li>
                                <li><Link to="#">Сети парфумів</Link></li>
                                <li><Link to="/catalogs?category=fullBottles">Цілі флакони</Link></li>
                                <li><Link to="/brands">Бренди</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/brands"><span>Бренди</span></Link>
                    </li>
                    <li>
                        <Link to="/contacts"><span>Контакти</span></Link>
                    </li>
                    <li>
                        <Link to="/fragnance-choice"><span>Підібрати аромат</span></Link>
                    </li>
                </ul>
            </nav>

            <form onSubmit={applySearch} className={styles.search_form}>
                <button type="submit">
                    <img src="Images/header/search-icon.svg" alt="search" />
                </button>
                <input onChange={handleSearch} type="text" />
            </form>

            <div className={styles.userLinks}>
                <Link to="/user-page">
                    <img src={"Images/header/user-icon.svg"} alt="user" />
                </Link>

                <Link to="/wishlist">
                    <img src={"Images/header/heart-icon.svg"} alt="heart" />
                </Link>

                <Link to="/cart">
                    <img src={"Images/header/cart-icon.svg"} alt="cart" />
                </Link>
            </div>
        </div>
    );
};
