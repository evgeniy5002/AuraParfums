import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";

const HeaderMenu = ({ styleName }) => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("")

    function handleSearch(e) {
        setSearch(e.target.value);
    };

    function applySearch(e) {
        e.preventDefault();

        const params = new URLSearchParams();
        params.set("search", search);

        navigate(`/catalogs?${params.toString()}`, { replace: true });
    }

    return (
        <div className={`${styles["header-menu"]} ${styles[styleName]}`}>
            <div className={`${styles["header-menu-container"]}`}>
                <FontAwesomeIcon className={styles.burger_icon} icon={faBars} />

                <nav className={styles["nav-container"]}>
                    <ul className={styles["links"]}>
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

                <form onSubmit={applySearch} className={styles.search_form}>
                    <button type="submit">
                        <img src="Images/header/search-icon.svg" alt="" />
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
        </div>
    )
}

export default HeaderMenu;