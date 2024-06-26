
import React from "react";
import styles from "./Brands.module.scss";

const Brands = ({ brands }) => {
    return (
        <div className={styles.container}>
            <img src={"Images/LargeLogo.png"} alt="" className={styles.logoImg}/>
            <h2>БРЕНДЫ</h2>
            <p>ароматы, которые подчеркивают вашу неповторимость</p>
            <div className={styles.brands}>
            {brands.map(brand => (
                <div key={brand.id} className={styles.brand} >
                    <img src={brand.image} alt={brand.name} />
                </div>
            ))}
            </div>
           
        </div>
    );
};

export default Brands;
