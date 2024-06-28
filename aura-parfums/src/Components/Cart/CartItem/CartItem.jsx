import React from "react";
import styles from "./CartItem.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Counter = ({ size, count }) => {
    
    return (
        <div className={styles["counter-block"]}>
            <span className={styles["cart-size"]}>{size}</span>
            <div className={styles["cart-counter"]}>
                <img src="/Images/minussmall.svg" alt="Decrease count" />
                <span>{count}</span>
                <img src="/Images/plussmall.svg" alt="Increase count" />
            </div>
        </div>
    );
};

const PriceBlock = ({ price }) => {
    return (
        <div className={styles["price-block"]}>
            <span className={styles["cart-price"]}>${price}</span>
        </div>
    );
};





const CartItem = ({ item,products }) => {

    return (
        <Link to={`/product-page?${encodeURIComponent(item.productId)}`} >
            <div className={styles["cart-item"]}>
                <div>
                {
                                
                    products.map((product) => {
                        if (product.id == item.productId ) {
                            console.log(product);
                            return (
                                <>
                                       <img src={`/${product.image}`} alt={item.name} />
                                </>
        
                            )
                        }
                    })
                }
                
                </div>

                <div className={styles["cart-item-info"]}>
                    <div className={styles["cart-item-info_top"]}>
                        <div className={styles["product-info"]}>
                            {
                                
                                products.map((product) => {
                                    if (product.id == item.productId ) {
                                        console.log(product);
                                        return (
                                            <>
                                                <span className={styles['cart-name']}>{product.name}</span>
                                                <span className={styles['cart-brand']}>{product.brand}</span>
                                            </>
                    
                                        )
                                    }
                                })
                            }
                            {/* <span className={styles['cart-name']}>{item.name}</span> */}
                          
                        </div>
                        <div className={styles["remove-btn"]}>
                            <img src="/Images/remove_btn.svg" alt="" />
                        </div>
                    </div>

                    <div className={styles["cart-item-info_bottom"]}>
                        <Counter size={item.size.size} count={item.count} />
                        <PriceBlock price={item.size.price} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CartItem;