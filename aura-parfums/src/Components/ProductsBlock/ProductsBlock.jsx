import React, { useEffect } from 'react';
import styles from "./ProductsBlock.module.scss";
import { ProductCard } from "./ProductCard/ProductCard";

export const ProductsBlock = ({niche = false, fullBottles = false, lux = false, male = false, female = false,  newProducts = false, bestsellers = false,  products, loadCardsCount = 0, maxColumns = 4 }) => {
    if (!products) {
        return null; // Или другое поведение, если данные не загружены
      }

    products.sort((a, b) => b.rating - a.rating);
    if(loadCardsCount == 0 ){
        loadCardsCount = products.length
    }

    
    
    let filteredProducts = products;
    if (bestsellers) {
      filteredProducts = filteredProducts.filter(product => product.bestseller);
    }
    if (newProducts) {
      filteredProducts = filteredProducts.filter(product => product.new);
    }
    if (fullBottles) {
        filteredProducts = filteredProducts.filter(product => product.fullBottles);
    }
    if (lux) {
        filteredProducts = filteredProducts.filter(product => product.lux);
    }
    if (niche) {
        filteredProducts = filteredProducts.filter(product => product.niche);
    }
    if (male) {
        filteredProducts = filteredProducts.filter(product => product.gender === 'male' );
    }
    if (female) {
        filteredProducts = filteredProducts.filter(product => product.gender === 'female' );
    }
   

  
    const productElements = filteredProducts.slice(0, loadCardsCount).map((product) => (
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