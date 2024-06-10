import React from "react";
import styles from "./ProductCard.module.scss";

export const ProductCard = ({ product, productsBlockColumns }) => {

    let bigSizes;
    if (product.bigSizes.length > 2) {
        bigSizes = product.bigSizes.map(e => {
            e.size = e.size.replace("- повнорозмірний флакон", "");
            return e;
        });
    }
    return (
        <a href="#" className={styles["product-card"]} key={product.name}>
            <img src={product.image}  alt={product.name}/>
            <div className={styles["product-card_content"]}>
                <div className={`${styles["product-card_rating"]} ${styles["rating"]}`}>
                    <div className={styles["rating_star"]}></div>
                    <div className={styles["rating_star"]}></div>
                    <div className={styles["rating_star"]}></div>
                    <div className={styles["rating_star"]}></div>
                    <div className={styles["rating_star"]}></div>
                </div>
                <p className={styles["product-card_brand"]}>{product.brand}</p>
                <h1 className={styles["product-card_title"]}>{product.name}</h1>
                <div className={styles["product_sizes"]}>
                {product.sizes.map((sizeObj, index) => (
                    <a 
                        key={index} 
                        href="#" 
                        className={`${styles["product_size"]} ${styles["product_square-block"]}`}
                    >
                        {sizeObj.size}
                    </a>
                ))}
                </div>
                <div className={`${styles["product_big-sizes"]} ${product.bigSizes.length < 3 ? styles["product_big-sizes_column"] : ""}`}>
                {product.bigSizes.map((sizeObj, index) => (
                    <a 
                        key={index} 
                        href="#" 
                        className={`${styles["product_size"]} ${styles["product_square-block"]}`}
                    >
                        {sizeObj.size}
                    </a>
                ))}
                </div>

                
                <div className={styles["product_buy-block"]}>
                    <a href="#" className={`${styles.red}`}>Купити</a>
                    <div>Ціна: {product.price}</div>
                </div>
            </div>
            
        </a>
    );
}
