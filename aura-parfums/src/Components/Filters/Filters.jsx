import React from "react";
import styles from "./Filters.scss";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactSlider from "react-slider";
import Filter from "../Filter/Filter";
// import { Range, getTrackBackground } from 'react-range';
const Filters = ({ products, brands, sizes }) => {
    const [priceRange, setPriceRange] = useState([""])
    const location = useLocation();
    const navigate = useNavigate();
    
    const updateURL = (category, value) => {
        const params = new URLSearchParams(location.search);
        params.set(category, value);
        navigate(`/catalogs?${params.toString()}`, { replace: true });
    };
    function trackRange(value) {
        setPriceRange(value);
        updateURL('min-price', value[0]);
            updateURL('max-price', value[1]);
    }

    const brandsInProducts = products.map(product => product.brand);

    return(
        <div className={"filters"}>
            <Filter brandsAvailable={brandsInProducts} filterTitle={"Бренди"} filterName={"brands"} options={brands}></Filter>
            <Filter filterTitle={"Об’єм"} filterName={"sizes"} options={sizes}></Filter>
            <div className={styles["filter"]}>Об’єм</div>
            {/* <input max={200} onChange={trackRange} type="range" name="priceRange" />
            <label htmlFor="priceRange">price range</label> */}
            <ReactSlider
                className={"price-range"}
                defaultValue={[0,200]}
                min={0}
                max={200}
                thumbClassName="example-thumb"
                trackClassName="example-track"
                onChange={(value, index) => trackRange(value)}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            >
            </ReactSlider>
        </div>
    )
}

export default Filters;
