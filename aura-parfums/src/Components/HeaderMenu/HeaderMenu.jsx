
import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const HeaderMenu = () => {
    return (
        <div className={`${styles.header_container} container`}>
            <FontAwesomeIcon className={styles.burger_icon} icon={faBars} />

            <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/catalogs">
                            <span style={{ color: "$red" }}>Каталог</span>
                        </Link>
                        <img src={"Images/header/arrow-icon.svg"} alt="arrow-down" />
                    </li>
                    <li>
                        <Link to="/brands"><span>Бренды</span></Link>
                    </li>
                    <li>
                        <Link to="/contacts"><span>Контакты</span></Link>
                    </li>
                    <li>
                        <Link to="/fragnance-choice"><span>Подобрать аромат</span></Link>
                    </li>
                </ul>
            </nav>

            <form className={styles.search_form}>
                <button type="submit">
                    <img src="Images/header/search-icon.svg" alt="" />
                </button>
                <input type="text" />
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
    )
}

