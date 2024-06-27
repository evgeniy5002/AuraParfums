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
          <h2>Кошик</h2>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={`${item.productId}-${item.sizeId}`}>
                <h1>Product ID: {item.productId}</h1>
                <h1>Count: {item.count}</h1>
                <h1>Size ID: {item.sizeId}</h1>
                <p>Email: {email}</p>
              </div>
            ))
          ) : (
            <p>Ваша корзина пуста</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Cart;
