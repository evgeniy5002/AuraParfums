import React from "react";
import styles from "./ProductsBlock.module.scss";

export const ProductsBlock = ({products}) =>{
    let productElements = products.map((product) => {
        return (
            <div key={product.name}>
                <h1>{product.name}</h1>
                <img src={product.image} alt={product.name}/>
                <p>Brand: {product.brand}</p>
                <p>Gender: {product.gender}</p>
                <p>Rating: {product.rating}</p>
                <p>Sale: {product.sale ? 'Yes' : 'No'}</p>
                <p>Bestseller: {product.bestseller ? 'Yes' : 'No'}</p>
                <p>{price}</p>
            </div>
        );
    });
    return(
        <div>
            {productElements}
        </div>

    )
}