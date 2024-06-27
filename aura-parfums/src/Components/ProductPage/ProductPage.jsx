import { React, useState, useEffect } from "react";
import Bestsellers from "../Bestsellers/Bestsellers";
import { useLocation } from "react-router-dom";
import styles from "./ProductPage.module.scss"
import NewFragrances from "../NewFragnances/NewFragnances";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../Store/Actions/userActions";
import { addGuestCartItem } from "../../Store/Actions/guestActions";
import { useAuth } from "../../Hooks/useAuth";

const ProductPage = ({ products }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { isAuth } = useAuth();

    let productID = parseInt((location.search).slice(1));
    let productSize = products[productID].sizes;

    const [chosenSize, setChosenSize] = useState(products[productID].sizes[0].id);
    const [productsOrderedCount, setProductOrdered] = useState(1);

    useEffect(() => {
        setProductOrdered(1);
    }, [productID]);

    function minusItem() { setProductOrdered(prevCount => Math.max(prevCount - 1, 1)); }
    function plusItem() { setProductOrdered(prevCount => prevCount + 1); }

    console.log("location.search", location.search);
    console.log("products[productID] --- ", productSize);
    console.log("CHOSEN SIZE: ---- ", products[productID].sizes[chosenSize - 1]);

    function findPriceBySize(sizes, bigSizes, chosenSize) {
        let price = null;

        const sizeObj = sizes.find(sizeObj => sizeObj.id === chosenSize);

        if (sizeObj) {
            price = sizeObj.price;
        }
        else {
            const bigSizeObj = bigSizes.find(sizeObj => sizeObj.id === chosenSize);
            if (bigSizeObj) {
                price = bigSizeObj.price;
            }
        }

        return price;
    }

    const price = findPriceBySize(products[productID].sizes, products[productID].bigSizes, chosenSize);

    let addToCart;

    const sizeObj = chosenSize <= products[productID].sizes.length
        ? products[productID].sizes[chosenSize - 1]
        : products[productID].bigSizes[chosenSize - products[productID].sizes.length - 1];

    const cartItem = {
        productId: productID,
        count: productsOrderedCount,
        size: sizeObj,
        name: products[productID].name,
        brand: products[productID].brand
    };

    isAuth
        ? addToCart = () => { dispatch(addCartItem(cartItem)); }
        : addToCart = () => { dispatch(addGuestCartItem(cartItem)); }

    return (
        <main className="main">

            {
                products.map((product, index) => {
                    if (product.id === productID) {
                        return (

                            <div className={`${styles["product-info-container"]} container`} key={product.id}>
                                <img src={product.image} alt="" />
                                <div className={styles["product-info"]}>
                                    <h2 className={styles["product-card_title"]}>
                                        {product.name}
                                    </h2>
                                    <p className={styles["description"]}>
                                        {product.description}
                                    </p>
                                    <h3>Об'єм:</h3>
                                    <div className={styles["product_sizes"]}>
                                        {product.sizes.map((sizeObj, index) => (
                                            <a
                                                onClick={() => {
                                                    setChosenSize(sizeObj.id);
                                                }}
                                                key={index}
                                                className={`${styles["product_size"]} ${chosenSize === sizeObj.id ? styles["black"] : ""} ${styles["product_square-block"]}`}
                                            >
                                                {sizeObj.size}
                                            </a>
                                        ))}

                                        {product.bigSizes.map((sizeObj, index) => (
                                            <a
                                                onClick={() => {
                                                    setChosenSize(sizeObj.id);
                                                }}
                                                key={index}
                                                className={`${styles["product_size"]} ${chosenSize === sizeObj.id ? styles["black"] : ""} ${styles["product_square-block"]}`}
                                            >
                                                {sizeObj.size}
                                            </a>
                                        ))}
                                    </div>
                                    <div className={styles["buy-block"]}>
                                        <div>
                                            <a onClick={minusItem}>-</a>
                                            <span>{productsOrderedCount}</span>
                                            <a onClick={plusItem}>+</a>
                                        </div>
                                        <a onClick={addToCart} className={styles["buy-product-btn"]}>
                                            <p>Додати в кошик</p>
                                            <img className={styles["cart-image"]} src="/Images/cart.svg" alt="" />
                                        </a>
                                    </div>
                                    <p className={styles["price"]}>Ціна: <span>{price}</span>  $</p>
                                </div>
                            </div>
                        );
                    }
                })
            }

            <NewFragrances products={products} />
            <Bestsellers products={products} />
        </main>
    );
};

export default ProductPage;
