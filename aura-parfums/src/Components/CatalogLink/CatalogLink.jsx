import React from "react"
import styles from "./CatalogLink.module.scss";
import { Link } from "react-router-dom";

const CatalogLink = ({ title, items }) => {
    return (
        <div className={styles["catalog-link-block"]}>
            <div className={styles["absolute-wrapper"]}>
                <div className={styles["catalog-link-info"]}>
                    <h2>
                        AURA — сервіс розпиву оригінальної, <br></br> люксової та нішевої парфумерії
                    </h2>
                    <p>Відкрий світ оригінальної парфумерії з нами</p>
                    <Link to="/catalogs">
                        <div className={"default-button"} >Каталог</div>
                    </Link>
                </div>
            </div>
            <img className={styles["item1"]} src={"Images/catalog-link-bg3.jpg"} alt="" />
            <img className={styles["item2"]} src={"Images/catalog-link-bg2.jpg"} alt="" />
            <img className={styles["item3"]} src={"Images/catalog-link-bg1.jpg"} alt="" />
        </div>
    )
}

export default CatalogLink;