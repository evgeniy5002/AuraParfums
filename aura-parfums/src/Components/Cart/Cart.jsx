import React from "react";
import { useParams } from "react-router-dom";
import NewFragnances from "../NewFragnances/NewFragnances";
import Bestsellers from "../Bestsellers/Bestsellers";
import { useLocation } from "react-router-dom";
import styles from "./Cart.module.scss";
import { getStoredUsers } from "../../Utils/getStoredUsers";
import { useSelector } from "react-redux";
import { useAuth } from "../../Hooks/useAuth";

const Cart = ({ products }) => {
  const LS = localStorage;
  // const cartItems = JSON.parse(LS.getItem("cartItems")) || [];

  const cartItems = useSelector((state) => state.cartItems);
  const { isAuth } = useAuth();

  return (
    <div>
      {
        cartItems ? (
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
  );
};

export default Cart;
