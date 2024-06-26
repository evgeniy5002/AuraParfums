import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Filter.module.scss";

const Filter = ({ filterName, brandsAvailable = [], filterTitle, options = [] }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [optionsShown, setOptionsState] = useState(false);
    const params = new URLSearchParams(location.search);

    const initialFilterValues = params.get(filterName) ? params.get(filterName).split(",") : [];
    const [filterState, setFilter] = useState({ filterName, filterValues: initialFilterValues });

    useEffect(() => {

        if (filterState.filterValues.length > 0) {
            params.set(filterName, filterState.filterValues.join(","));
        } else {
            params.delete(filterName);
        }
        navigate(`/catalogs?${params.toString()}`, { replace: true });
    }, [filterState.filterValues, filterName, location.search, navigate]);

    const applyFilter = (name, value) => {
        if (!filterState.filterValues.includes(value)) {
            setFilter({ filterName: name, filterValues: [...filterState.filterValues, value] });
        } else {
            setFilter({ filterName: name, filterValues: filterState.filterValues.filter(v => v !== value) });
        }
    };

    const changeOptionsState = () => {
        setOptionsState(prevState => !prevState);
    };

    return (
        <div className={styles["filter"]}>
            <a className={styles["filter-header"]} onClick={changeOptionsState}>
                <span>{filterTitle}</span>
                <img src="Images/arrow-icon.svg" alt="" />
            </a>
            <div className={styles["filter-options"]} style={optionsShown ? { display: "flex" } : { display: "none" }}>
                {options.map((option, index) => {
                    if (brandsAvailable.length > 0 && brandsAvailable.includes(option.name)) {
                        return (
                            <div key={option.name} className={styles["option"]}>
                                <input
                                    onChange={() => applyFilter(filterName, option.name)}
                                    type="checkbox"
                                    checked={filterState.filterValues.includes(option.name)}
                                />
                                <label>{option.name}</label>
                            </div>
                        );
                    } else if (brandsAvailable.length === 0) {
                        return (
                            <div key={option.name} className={styles["option"]}>
                                <input
                                    onChange={() => applyFilter(filterName, option.name)}
                                    type="checkbox"
                                    checked={filterState.filterValues.includes(option.name)}
                                />
                                <label>{option.name}</label>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Filter;
