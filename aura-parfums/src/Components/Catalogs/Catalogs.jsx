import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "./Catalogs.module.scss";
import CatalogMenu from "../CatalogMenu/CatalogMenu";
import { ProductsBlock } from "../ProductsBlock/ProductsBlock";
import Bestsellers from "../Bestsellers/Bestsellers";
import FragnanceChoice from "../FragnanceChoice/FragnanceChoice";
import BrandsBlock from "../BrandsBlock/BrandsBlock";
import Filters from "../Filters/Filters";

const Catalogs = ({ products, brands, sizes }) => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [category, setCategory] = useState("");

    useEffect(() => {
        const categoryParam = searchParams.get("category");
        if (categoryParam) {
            setCategory(categoryParam);
        }
    }, [searchParams])

    const filterProductsByCategory = (products, category) => {
        switch (category) {
            case "niche":
                return products.filter(product => product.niche);
            case "lux":
                return products.filter(product => product.lux);
            case "female":
                return products.filter(product => product.gender === "female");
            case "male":
                return products.filter(product => product.gender === "male");
            case "bestsellers":
                return products.filter(product => product.bestseller);
            case "fullBottles":
                return products.filter(product => product.fullBottle);
            default:
                return products;
        }
    };

    const filteredProducts = filterProductsByCategory(products, category);

    return (
        <>
            <CatalogMenu />
            <div className={styles["catalog-body"]}> 
                <div className={`${styles["catalog-container"]} container`}>
                    <Filters brands={brands} sizes={sizes}></Filters>
                    <ProductsBlock  products={filteredProducts} maxColumns={3} />
                </div>
            </div>
            
            <Bestsellers products={products} />
            <FragnanceChoice />
            <BrandsBlock brands={brands}/>
        </>
    );
}

export default Catalogs;
