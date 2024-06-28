import React from "react";
import styles from "./HomePage.module.scss";
import CatalogLink from "../CatalogLink/CatalogLink";
import Bestsellers from "../Bestsellers/Bestsellers"
import FragnanceChoice from "../FragnanceChoice/FragnanceChoice";
import BrandsBlock from "../BrandsBlock/BrandsBlock";
import NewFragnances from "../NewFragnances/NewFragnances";
import CatalogMenu from "../CatalogMenu/CatalogMenu";
import OftenQuestions from "../OftenQuestions/OftenQuestions";

const HomePage = ({products, brands}) => {
    return (
        <main className="main">
            <CatalogLink></CatalogLink>
            <CatalogMenu></CatalogMenu>
            <NewFragnances products={products}></NewFragnances>
            <Bestsellers products={products}></Bestsellers>
            <FragnanceChoice></FragnanceChoice>
            <BrandsBlock brands={brands}></BrandsBlock>
            <OftenQuestions/>
        </main>
    )
}

export default HomePage;