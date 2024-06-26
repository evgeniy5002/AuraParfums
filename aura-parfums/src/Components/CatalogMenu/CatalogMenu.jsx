import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./CatalogMenu.module.scss";

const CatalogMenu = ({ products }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;

    const [category, setCategory] = useState("");

    const categories = [
        { key: "niche", label: "Нішева парфумерія" },
        { key: "lux", label: "Люксова парфумерія" },
        { key: "female", label: "Жіноча парфумерія" },
        { key: "male", label: "Чоловіча парфумерія" },
        { key: "bestsellers", label: "Бестселлери" },
        { key: "fullBottles", label: "Цілі флакони" },
    ];

    const updateURL = (category, value) => {
        const params = new URLSearchParams(location.search);
        if (value) {
            params.set(category, value);
        } else {
            params.delete(category);
        }
        navigate(`/catalogs?${params.toString()}`, { replace: true });
    };

    const handleClick = (selectedCategory) => {
        if (category === selectedCategory) {
            setCategory("");
            updateURL('category', null);
        } else {
            setCategory(selectedCategory);
            updateURL('category', selectedCategory);
        }
    };

    return (
        <div className={styles["catalog-menu"]}>
            <div className={`${styles["catalog-menu_container"]} container`}>
                <h2>Каталог ароматів</h2>
                <p>Виключно оригінальна продукція</p>
                <div className={styles["categories"]}>
                    {categories.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => handleClick(key)}
                            className={`${styles["category"]} ${category === key ? "default-button" : ""}`}
                        >
                            {label.split(" ").map((line, index) => (
                                <React.Fragment key={index}>
                                    {line} <br />
                                </React.Fragment>
                            ))}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogMenu;
