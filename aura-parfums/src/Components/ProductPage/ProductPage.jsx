import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewFragnances from "../NewFragnances/NewFragnances";
import Bestsellers from "../Bestsellers/Bestsellers";
import { useLocation } from "react-router-dom";
import styles from "./ProductPage.module.scss"

const ProductPage = ({ products }) => {

    const key = 'cartItems';

    function checkAndCreateArrayInLocalStorage() {
        const storedArray = localStorage.getItem(key);
        if (!storedArray) {
            const newArray = [];
            localStorage.setItem(key, JSON.stringify(newArray));
            console.log(`Массив с ключом "${key}" создан в localStorage.`);
        } else {
            console.log(`Массив с ключом "${key}" уже существует в localStorage.`);
        }
    }

    const location = useLocation();
    let productID = parseInt((location.search).slice(1));


    const [productsOrderedCount, setProductOrdered] = useState(1);
    useEffect(() => {
        setProductOrdered(1);
    }, [productID]);
    function minusItem() {
        setProductOrdered(prevCount => Math.max(prevCount - 1, 1));
    }
    function plusItem() {
        setProductOrdered(prevCount => prevCount + 1);
    }


    const [chosenSize, setChosenSize] = useState(products[productID].sizes[0].id);
    function findPriceBySize(sizes, bigSizes, chosenSize) {
        let price = null;
        const sizeObj = sizes.find(sizeObj => sizeObj.id === chosenSize);
        if (sizeObj) {
            price = sizeObj.price;
        } else {
            const bigSizeObj = bigSizes.find(sizeObj => sizeObj.id === chosenSize);
            if (bigSizeObj) {
                price = bigSizeObj.price;
            }
        }
        return price;
    };

    const price = findPriceBySize(products[productID].sizes, products[productID].bigSizes, chosenSize);



    function addToCart() {

        checkAndCreateArrayInLocalStorage();
        const storedArray = JSON.parse(localStorage.getItem(key));
        let itemExists = false;
        // storedArray.forEach(item => {
        //     if (item.productId === productID) {
        //         item.count += productsOrderedCount;
        //         itemExists = true;
        //     }
        // });
        // if (!itemExists) {
        storedArray.push({ productId: productID, count: productsOrderedCount });
        localStorage.setItem(key, JSON.stringify(storedArray));
        // }

    }

    return (
        <>
            {
                products.map((product, index) => {
                    if (product.id === productID) {
                        return (
                            <div className={`${styles["product-info-container"]} container`}>
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
                                                onClick={() => setChosenSize(sizeObj.id)}
                                                key={index}
                                                className={`${styles["product_size"]} ${chosenSize === sizeObj.id ? styles["black"] : ""} ${styles["product_square-block"]}`}
                                            >
                                                {sizeObj.size}
                                            </a>
                                        ))}

                                        {product.bigSizes.map((sizeObj, index) => (
                                            <a
                                                onClick={() => setChosenSize(sizeObj.id)}
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
                                            <img className={styles["cart-image"]} src="Images/cart.svg" alt="" />
                                        </a>
                                    </div>
                                    <p className={styles["price"]}>Ціна: <span>{price}</span>  $</p>

                                </div>
                            </div>
                        )
                    }
                })
            }

            <NewFragnances products={products} />
            <Bestsellers products={products} />
        </>
    );
};

export default ProductPage;
