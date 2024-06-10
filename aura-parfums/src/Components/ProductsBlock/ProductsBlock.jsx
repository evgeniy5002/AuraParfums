import React from "react";
import styles from "./ProductsBlock.module.scss";
import { ProductCard } from "./ProductCard/ProductCard";

export const ProductsBlock = ({ bestsellers, products, loadCardsCount, maxColumns }) => {
    products.sort((a, b) => b.rating - a.rating);

    const productElements = (bestsellers ? products.filter(product => product.bestseller) : products).slice(0, loadCardsCount).map((product) => (
        <ProductCard key={product.name} product={product} productsBlockColumns={maxColumns} />
    ));



    if (maxColumns == 3) {
        return (
            <div className="container">
                <div className={`${styles.products_block} ${styles.products_block_three_columns}`}>

                    {productElements}
                </div>
            </div>
        );
    }else if (maxColumns == 4){
        return (
            <div className="container">
                <div className={`${styles.products_block} ${styles.products_block_four_columns}`}>

                    {productElements}
                </div>
            </div>
        );
    }

}