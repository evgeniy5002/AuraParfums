import React from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../Hooks/useAuth";
import styles from "./Cart.module.scss";

const Cart = ({ products }) => {
  const { isAuth } = useAuth();

  const cartItems = useSelector(state => (
    isAuth ? state.user.cartItems : state.guest.cartItems
  ));

  return (
    <div className={styles["cart"]}>
      <div className={styles["cart-container"]}>
        {
          cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.productId}>
                <h1>{item.productId}</h1>
                <h1>{item.count}</h1>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )
        }
      </div>
    </div>
  );
};

export default Cart;
