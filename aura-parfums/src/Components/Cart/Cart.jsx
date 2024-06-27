import React from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../Hooks/useAuth";
import styles from "./Cart.module.scss";

const Cart = ({ products }) => {
  const { isAuth } = useAuth();
  const email = useSelector((state) => state.email);
  const LS = localStorage;
  const users = JSON.parse(LS.getItem("users")) || [];

  const user = users.find(userItem => userItem.email === email);
  const userCart = user ? user.cartItems : [];

  const cartItems = useSelector(state => (
    isAuth ? state.user.cartItems : state.guest.cartItems
  ));

  // console.log("FROM CART ----", cartItems[0].size);

  cartItems.map((item, index) => {
    console.log("FROM CART ----", item.size);
  })

  // <span>Product ID: {item.productId}</span>
  // <span>Count: {item.count}</span>
  // <span>Size ID: {item.size.id}</span>
  // <span>Price: {item.size.price}</span>
  // <span>Size: {item.size.size}</span>
  // <span>Brand: {item.brand}</span>
  // <span>Name: {item.name}</span>
  // {/* <br />
  // <div>{JSON.stringify(item)}</div>
  // <br /> */}
  // {/* <div>{JSON.stringify(item.size)}</div> */}
  // <span>{item.size.id}</span>


  return (
    <main className='main'>
      <div className={`${styles["cart_container"]} container`}>
        <div className={styles["order-info"]}>
          <h2>Оформлення замовлення</h2>
          <h3>Варіанти доставки</h3>
          <div className={styles["delivery"]}>
            <div className={`${styles.delivery_options} ${styles.options}`}>
              <div className={`${styles.delivery_option} ${styles.option}`}>
                <div>
                  <h4>Нова Пошта (Відділення / поштомат)</h4>
                  <p>Безкоштовна доставка від 900 грн</p>
                </div>

              </div>
              <div className={`${styles.delivery_option} ${styles.option}`}>
                <div>
                  <h4>Укр Пошта (Відділення за індексом)</h4>
                  <p>Безкоштовна доставка від 900 грн</p>
                </div>
              </div>
            </div>
          </div>
          <h3>
            Спосіб оплати
          </h3>
          <div className={styles["payment"]}>
            <div className={`${styles.payment_methods} ${styles.options}`}>
              <div className={`${styles.payment_method} ${styles.option}`}>
                <div>
                  <h4>
                    Оплата готівкою при отриманні
                  </h4>
                  <p>
                    Ви можете замовити з оплатою при отриманні без жодних передоплат. Однак   врахуйте комісію пошти за послуги накладеного платежу.
                  </p>
                </div>
                <div>

                </div>
              </div>
              <div className={`${styles.payment_method} ${styles.option}`}>
                <div>
                  <h4>
                    Оплата онлайн
                  </h4>
                  <span>На суму замовлення від 900 грн діє безкоштовна доставка. Термін відправки   замовлення 1-4 дні.</span>
                  <p>
                    Ваші особисті дані використовуватимуться для підтримки вашого досвіду на цьому  веб-сайті, для керування доступом до вашого облікового запису та для інших   цілей, описаних у нашій політика конфіденційності.
                  </p>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>

          <h3>
            Отримувач
          </h3>
          <div className={styles["client-form"]}>
            <input type="text" placeholder="Ім’я" className="dflt-input" />
            <input type="text" placeholder="Прізвище" className="dflt-input" />
            <input type="text" placeholder="По-батькові ( Обов’язкове поле для відправки Укрпоштою)" className="dflt-input" />
            <input type="text" placeholder="Номер телефону" className="dflt-input" />
            <input type="text" placeholder="user@gmail.com" className="dflt-input" />
            <textarea name="" placeholder="Коментар до замовленння" id=""></textarea>
            <hr />
            <input className="dflt-input" type="text" placeholder="Місто" />
            <a href="" className="default-button-black">Підтвердити замовлення</a>
          </div>
        </div>
        <div className={styles["cart"]}>
          {
            cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div className={styles["cart-item"]} key={index}>
                  <div>
                    <img src="/Images/products/red-wine-brown-sugar.jpg" alt="" />
                  </div>

                  <div className={styles["cart-item-info"]}>
                    <div className={styles["cart-item-info_top"]}>
                      <span className={styles['cart-name']}>{item.name}</span>
                      <span className={styles['cart-brand']}>{item.brand}</span>
                    </div>

                    <div className={styles["cart-item-info_bottom"]}>
                      <div className={styles["counter-block"]}>
                        <span className={styles["cart-size"]}>{item.size.size}</span>
                        <div className={styles["cart-counter"]}>
                          <img src="/Images/minussmall.svg" alt="" />
                          <span>{item.count}</span>
                          <img src="/Images/plussmall.svg" alt="" />
                        </div>
                      </div>

                      <div>
                        <span className={styles["cart-price"]}>{item.size.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Ваша корзина пуста</p>
            )
          }
        </div>
      </div>
    </main >
  );
};

export default Cart;
