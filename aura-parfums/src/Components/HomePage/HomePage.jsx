import React from "react";
import styles from "./HomePage.module.scss";
import { ProductsBlock } from "../ProductsBlock/ProductsBlock";
import CatalogLink from "../CatalogLink/CatalogLink";
import Bestsellers, { bestsellers } from "../Bestsellers/Bestsellers"
import FragnanceChoice from "../FragnanceChoice/FragnanceChoice";
import BrandsBlock from "../BrandsBlock/BrandsBlock";
import NewFragnances from "../NewFragnances/NewFragnances";
import CatalogMenu from "../CatalogMenu/CatalogMenu";

const HomePage = ({products, brands}) => {

    return (
        <main className={styles.main}>
            <CatalogLink></CatalogLink>
            <CatalogMenu></CatalogMenu>
            <NewFragnances products={products}></NewFragnances>
            <Bestsellers
                products = {products}
            ></Bestsellers>
            <FragnanceChoice></FragnanceChoice>
            <BrandsBlock brands={brands}></BrandsBlock>
        </main>
    )
}

export default HomePage;