import React from "react";
import styles from "./NewFragnances.module.scss";
import { ProductsBlock } from "../ProductsBlock/ProductsBlock";
import { useState } from "react";

const NewFragnances = ({ products }) => {
    const [category, setCategory] = useState("");

    function handleClick(category) {
        setCategory(category);
    }

    return (
        <div className={styles["new-fragnances"]}>
            <div className={styles["new-fragnances_header"]}>
                <img src="Images/new-fragnances-bg.jpg" alt="" />
                <div className={styles["new-fragnances_text"]}>
                    <h2>New Fragrances</h2>
                    <p>Презентуємо наші новинки</p>
                </div>
            </div>
            <div className={styles["categories"]}>
                <button onClick={() => handleClick({ niche: true })} className={styles["category"]}>Нішева парфумерія</button>
                <button onClick={() => handleClick({ lux: true })} className={styles["category"]}>Люксова парфумерія</button>
                <button onClick={() => handleClick({ female: true })} className={styles["category"]}>Жіноча парфумерія</button>
                <button onClick={() => handleClick({ male: true })} className={styles["category"]}>Чоловіча парфумерія</button>
                <button onClick={() => handleClick({ bestsellers: true })} className={styles["category"]}>Бестселлери</button>
                <button onClick={() => handleClick({ fullBottles: true })} className={styles["category"]}>Цілі флакони</button>
            </div>
            <div className="container">
                <ProductsBlock 
                products={products} 
                niche={category.niche} 
                lux={category.lux}
                male={category.male} 
                female={category.female} 
                fullBottles={category.fullBottle}  
                bestsellers={category.bestsellers} 
                newProducts={category.new} 
                maxColumns={4} 
                loadCardsCount={4} />
            </div>
        </div>
    );
}

export default NewFragnances;
