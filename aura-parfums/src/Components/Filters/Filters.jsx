import React from "react";
import styles from "./Filters.module.scss";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Filter from "../Filter/Filter";
// import { Range, getTrackBackground } from 'react-range';
const Filters = ({ products, brands, sizes }) => {
    const [price, setPrice] = useState("")
    const location = useLocation();
    const navigate = useNavigate();
    
    const updateURL = (category, value) => {
        const params = new URLSearchParams(location.search);
        params.set(category, value);
        
        navigate(`/catalogs?${params.toString()}`, { replace: true });
    };
    function trackRange(e) {
        setPrice(e.target.value);
        
        updateURL('price', price);
    }
    return(
        <div className={styles["filters"]}>
            <Filter filterName={"Бренди"} options={brands}></Filter>
            <Filter filterName={"Об’єм"} options={sizes}></Filter>
            <div className={styles["filter"]}>Об’єм</div>
            <input max={200} onChange={trackRange} type="range" name="priceRange" />
            <label htmlFor="priceRange">price range</label>
        </div>
    )
}

export default Filters;
