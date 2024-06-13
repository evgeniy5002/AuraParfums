
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
                        <img src={"Images/arrow-icon.svg"} alt="arrow-down" />
                    </li>
                    <li>
                        <Link to="/brands"><span>Бренды</span></Link>
                    </li>
                    <li>
                        <Link to="/contacts"><span>Контакты</span></Link>
                    </li>
                    <li>
                        <span>Подобрать аромат</span>
                    </li>
                </ul>
            </nav>
            {/* <div className={styles.input}>
                <input type="text" />
            </div> */}

            <form className={styles.search_form}>
                <button type="submit">
                    <img src="Images/search-icon.svg" alt="" />
                </button>
                <input type="text" />
               
            </form>


            <div className={styles.userLinks}>
                <a href="#">
                    <img src={"Images/user-icon.svg"} alt="user" />
                </a>
                <a href="#">
                    <img src={"Images/heart-icon.svg"} alt="heart" />
                </a>
                <a href="#">
                    <img src={"Images/cart-icon.svg"} alt="cart" />
                </a>
            </div>

        </div>
    )
}

