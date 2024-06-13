import React from "react";
import styles from "./Filters.module.scss";
// import { Range, getTrackBackground } from 'react-range';
const Filters = ({ products }) => {


    function trackRange(e) {
        console.log(e.target.value);
    }
    return(
        <div className={styles["filters"]}>
            <div className={styles["filter"]}>
                <button>Бренди</button>
                <div className={styles["filter-options"]}>

                </div>
            </div>
            <div className={styles["filter"]}>Об’єм</div>
            <input max={200} onChange={trackRange} type="range" name="priceRange" />
            <label htmlFor="priceRange">price range</label>
        </div>
    )
}

export default Filters;
