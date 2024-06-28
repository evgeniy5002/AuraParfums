import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "./Catalogs.module.scss";
import CatalogMenu from "../CatalogMenu/CatalogMenu";
import { ProductsBlock } from "../ProductsBlock/ProductsBlock";
import Bestsellers from "../Bestsellers/Bestsellers";
import FragnanceChoice from "../FragnanceChoice/FragnanceChoice";
import BrandsBlock from "../BrandsBlock/BrandsBlock";
import Filters from "../Filters/Filters";
import OftenQuestion from "../OftenQuestions/OftenQuestions"

const Catalogs = ({ products = [], brands = [], sizes = [] }) => {
    console.log("HEHRHERHEHR", sizes);
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [category, setCategory] = useState("");
    const [brandsChosen, setBrands] = useState([]);
    const [sizesChosen, setSizes] = useState([]);
    const [searchState, setSearch] = useState("");

    useEffect(() => {
        const categoryParam = searchParams.get("category");
        const brandsParam = searchParams.get("brands");
        const sizesParam = searchParams.get("sizes");
        const searchParam = searchParams.get("search");

        if (categoryParam) {
            setCategory(categoryParam);
        } else {
            setCategory([])
        }

        setSearch(searchParam);

        if (brandsParam) {
            setBrands(brandsParam.split(","));
        } else {
            setBrands([])
        }
        if (sizesParam) {
            setSizes(sizesParam.split(","));
        } else {
            setSizes([])
        }
    }, [searchParams]);

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

    let filteredProducts = filterProductsByCategory(products, category);

    if (brandsChosen.length > 0) {
        filteredProducts = filteredProducts.filter(product => brandsChosen.includes(product.brand));
    }

    if (searchState) {
        if (searchState.toString().length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchState.toLowerCase())
            );
        }
    }

    if (sizesChosen.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return sizesChosen.every(sizeChosen =>
                product.sizes.some(sizeObj => sizeObj.size === sizeChosen)
            );

        });
    }

    return (
        <main className="main">
            <CatalogMenu />

            <div className={styles["catalog-body"]}>
                <div className={`${styles["catalog-container"]} container`}>
                    <Filters brands={brands} products={products} sizes={sizes}></Filters>
                    <ProductsBlock products={filteredProducts} maxColumns={3} />
                </div>
            </div>

            <Bestsellers products={products} />
            <FragnanceChoice />
            <BrandsBlock brands={brands} />
            <OftenQuestion />
        </main>
    );
};

export default Catalogs;