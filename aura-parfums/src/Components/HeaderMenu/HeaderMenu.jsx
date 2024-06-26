import { React,useState } from "react";
import styles from "./HeaderMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate } from "react-router-dom";

export const HeaderMenu = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("")
    function handleSearch (e) {
        setSearch(e.target.value);
        console.log(search);
    };
    function applySearch(e) {
        e.preventDefault(); 
        const params = new URLSearchParams();
        params.set("search", search);
        navigate(`/catalogs?${params.toString()}`, {replace: true}); 
    }
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

            <form onSubmit={applySearch}  className={styles.search_form}>
                <button type="submit">
                    <img src="Images/search-icon.svg" alt="" />
                </button>
                <input onChange={handleSearch} type="text" />
            </form>


            <div className={styles.userLinks}>
                <a href="#">
                    <img src={"Images/user-icon.svg"} alt="user" />
                </a>
                <a href="#">
                    <img src={"Images/heart-icon.svg"} alt="heart" />
                </a>
                <Link to="/cart"><img src={"Images/cart-icon.svg"} alt="cart" /></Link>
     
            </div>

        </div>
    )
}

