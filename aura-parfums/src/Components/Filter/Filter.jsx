import React from "react";
import styles from "./Filter.module.scss";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { Range, getTrackBackground } from 'react-range';
const Filter = ({ filterName, options = [] }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [filterState, setFilter] = useState({filterName: "", filterValue: ""})
    const [optionsShown, setOptionsState] = useState(false)

    const updateURL = (category, value) => {
        const params = new URLSearchParams(location.search);
        params.set(category, value);
        console.log(params.toString());
        navigate(`/catalogs?${params.toString()}`, { replace: true });
    };

    function applyFilter(name, value) {
        setFilter({ filterName: name, filterValue: value });
        updateURL(name, value);
    }
    function changeOptionsState(){
        optionsShown === true ? setOptionsState(false) : setOptionsState(true)
    }
    return(
        <div className={styles["filter"]}>

            <a className={styles["filter-header"]} onClick={changeOptionsState}>
                <span>{filterName}</span>
                <img src="Images/arrow-icon.svg" alt="" />
            </a>
            <div className={styles["filter-options"]} style={optionsShown === true ? {display: "flex"} : {display: "none"}}>
                {
                    options.map((option, index) => {
                        return(
                            <div key={index} className={styles["option"]}>
                               <input onChange={() => applyFilter(filterName, option.name)} type="checkbox" />


                                <label key={index}> {option.name}</label>
                            </div>
                         
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Filter;
