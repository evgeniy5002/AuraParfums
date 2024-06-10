import React from "react";
import styles from "./HomePage.module.scss";
import { ProductsBlock } from "../ProductsBlock/ProductsBlock";


const HomePage = ({products}) => {
   
    return (
        <main className={styles.main}>
            <ProductsBlock bestsellers={true} loadCardsCount={4} products={products} maxColumns={4}>

            </ProductsBlock>


        </main>
    )
}

export default HomePage;