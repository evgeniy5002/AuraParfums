import React from "react";
import styles from "./CatalogMenu.module.scss";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const CatalogMenu = ({ products }) => {

    const location = useLocation();
    const path = location.pathname;

    const categories = [
        { key: "niche", label: "Нішева парфумерія" },
        { key: "lux", label: "Люксова парфумерія" },
        { key: "female", label: "Жіноча парфумерія" },
        { key: "male", label: "Чоловіча парфумерія" },
        { key: "bestsellers", label: "Бестселлери" },
        { key: "fullBottles", label: "Цілі флакони" },
    ];

    const [category, setCategory] = useState("");

    function handleClick(category) {
        setCategory(category);
    }

    if (path.includes('catalogs')) {
        return (
            <div className={styles["catalog-menu"]}>
                <div className={`${styles["catalog-menu_container"]} container`}>
                    <h2>Каталог ароматів</h2>
                    <p>Виключно оригінальна продукція</p>
                    <div className={styles["categories"]}>
                        <button
                            onClick={() => handleClick({ niche: true })}
                            className={styles["category"]}>
                            Нішева <br></br> парфумерія
                        </button>
                        <button
                            onClick={() => handleClick({ lux: true })}
                            className={styles["category"]}>
                            Люксова <br></br> парфумерія
                        </button>
                        <button
                            onClick={() => handleClick({ female: true })}
                            className={styles["category"]}>
                            Жіноча <br></br> парфумерія
                        </button>
                        <button
                            onClick={() => handleClick({ male: true })}
                            className={styles["category"]}>
                            Чоловіча <br></br> парфумерія
                        </button>
                        <button
                            onClick={() => handleClick({ bestsellers: true })}
                            className={styles["category"]}>
                            Бестселлери
                        </button>
                        <button
                            onClick={() => handleClick({ fullBottles: true })}
                            className={styles["category"]}>
                            Цілі <br></br> флакони
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles["catalog-menu"]}>
                <div className={`${styles["catalog-menu_container"]} container`}>
                    <h2>Каталог ароматів</h2>
                    <p>Виключно оригінальна продукція</p>
                    <div className={styles["categories"]}>
                        {categories.map(({ key, label }) => (
                            <Link
                                key={key}
                                to="/catalogs"
                                state={{ selectedCategory: key }}

                                className={styles["category"]}
                            >
                                {label.split(" ").map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line} <br />
                                    </React.Fragment>
                                ))}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }



}

export default CatalogMenu;
