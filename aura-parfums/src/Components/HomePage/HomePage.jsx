import React from "react";
import styles from "./HomePage.module.scss";
import { ProductsBlock } from "../ProductsBlock/ProductsBlock";
import CatalogLink from "../CatalogLink/CatalogLink";
import Bestsellers, { bestsellers } from "../Bestsellers/Bestsellers"

const HomePage = ({products}) => {
   
    return (
        <main className={styles.main}>
            <CatalogLink></CatalogLink>
            <ProductsBlock 
                bestsellers={true} 
                loadCardsCount={4} 
                products={products} 
                maxColumns={4}>
            </ProductsBlock>
            <Bestsellers
                products = {products}
            ></Bestsellers>

        </main>
    )
}

export default HomePage;