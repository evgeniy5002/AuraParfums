import React from "react";
import styles from "./Bestsellers.module.scss";
import { ProductsBlock } from "../ProductsBlock/ProductsBlock";

const Bestsellers = ({products}) => {
    return (
        <div className={styles.bestsellers}>
            <div className="container">
                <div className={styles.bestsellers_text}>
                    <div className={styles["titles"]}>
                        <h2>Bestsellers</h2>
                        <h2>Bestsellers</h2>
                    </div>
                    <p>
                        Ми зібрали для вас найпопулярніші парфуми, з якими має  познайомитися кожен. Це бестселери   світу та хіти наших продажів
                    </p>
                </div>
                
                <ProductsBlock products={products} bestsellers={true} ></  ProductsBlock>
            </div>
        </div>
        
    )
}

export default Bestsellers;