import React, { useState } from "react";
import styles from "./ProductCard.module.scss";

import ProductRating from "./ProductRating/ProductRating";

export const ProductCard = ({ product, productsBlockColumns }) => {
    let bigSizes, sizes;
    sizes = [...product.sizes];
    bigSizes = [...product.bigSizes];
    if (product.bigSizes.length > 2) {
        bigSizes = bigSizes.map(e => {
            return {
                ...e,
                size: e.size.replace("- повнорозмірний флакон", "")
            };
        });
    }

    const [chosenSize, setChosenSize] = useState(sizes[0].id);

    const findPriceBySize = (sizes, bigSizes, chosenSize) => {
        let price = null;
        const sizeObj = sizes.find(sizeObj => sizeObj.id === chosenSize);
        if (sizeObj) {
            price = sizeObj.price;
        } else {
            const bigSizeObj = bigSizes.find(sizeObj => sizeObj.id === chosenSize);
            if (bigSizeObj) {
                price = bigSizeObj.price;
            }
        }
        return price;
    };

    const price = findPriceBySize(sizes, bigSizes, chosenSize);
    console.log(chosenSize);
    return (
        <a href="#" className={styles["product-card"]} key={product.name}>
            <img src={product.image}  alt={product.name}/>
            <div className={styles["product-card_content"]}>
                {/* <div className={`${styles["product-card_rating"]} ${styles["rating"]}`}>
                    <div className={styles["rating_star"]}></div>
                    <div className={styles["rating_star"]}></div>
                    <div className={styles["rating_star"]}></div>
                    <div className={styles["rating_star"]}></div>
                    <div className={styles["rating_star"]}></div>
                </div> */}
                <ProductRating rating={product.rating} />
                <p className={styles["product-card_brand"]}>{product.brand}</p>
                <h1 className={styles["product-card_title"]}>{product.name}</h1>
                <div className={styles["product_sizes"]}>
                {sizes.map((sizeObj, index) => (
                    <a
                        onClick={() => setChosenSize(sizeObj.id)}
                        key={index} 
                        href="#" 
                        className={`${styles["product_size"]} ${chosenSize === sizeObj.id ? styles["red"] : ""} ${styles["product_square-block"]}`}
                    >
                        {sizeObj.size}
                    </a>
                ))}
                </div>
                <div className={`${styles["product_big-sizes"]} ${product.bigSizes.length < 3 ? styles["product_big-sizes_column"] : ""}`}>
                {bigSizes.map((sizeObj, index) => (
                    <a
                        onClick={() => setChosenSize(sizeObj.id)}
                        key={index} 
                        href="#" 
                        className={`${styles["product_size"]} ${chosenSize === sizeObj.id ? styles["active"] : ""} ${styles["product_square-block"]}`}
                    >
                        {sizeObj.size}
                    </a>
                ))}
                </div>
                <div className={styles["product_buy-block"]}>
                    <a href="#" className={`${styles.red}`}>Купити</a>
                    <div>{price}$</div>
                </div>
            </div>
        </a>
    );
}
