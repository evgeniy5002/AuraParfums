import React from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../Hooks/useAuth";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

const Cart = ({ products }) => {
  const { isAuth } = useAuth();

  let cartItems = useSelector(state => (
    isAuth ? state.user.cartItems : state.guest.cartItems
  ));

  return (
    <main className='main'>

      {
        cartItems.length > 0 ? (
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

              <h1>Кошик</h1>
              <div className={styles["cart-items"]}>
                {
                  cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <CartItem item={item} />
                    ))
                  ) : (
                    <p>Ваша корзина пуста</p>
                  )
                }
              </div>

              <div>
                <div className={styles['cashback-info']}>
                  <div>
                    <img src="/Images/creditcard.svg" alt="" />
                    <p>
                      Оплачуйте замовлення онлайн і отримуйте кешбек 5% на наступні покупки у нашому магазині. Ваш поточний баланс кешбеку: Накопичено 0 грн. Стежне за особистим кабінетом - кешбек буде нараховано вже за декілька днів.
                    </p>
                  </div>

                  <p className={styles["example"]}>
                    Наприклад, при покупці на суму 1000 грн ви отримуєте
                    50 грн нанаступні замовлення!
                  </p>
                </div>

                <div className={styles["cashback-balance"]}>
                  <span >Ваш поточний баланс кешбеку: 0 грн</span>
                </div>


                <div className={styles["btns"]}>
                  <input className={styles["promocode"]} type="text" placeholder="ПРОМОКОД" />
                  <button className={styles["apply-btn"]}>ЗАСТОСУВАТИ</button>
                </div>

                <div className={styles["payment-info"]}>
                  <span>Сума до сплати:</span>
                  <span>0 грн</span>
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Link to={"/catalogs"} className={styles["to-catalog-btn"]}>До каталогу</Link>
                </div>
              </div>


            </div>
          </div>
        ) : (
          <div className={styles["empty-cart"]}>
            <img src="/Images/LargeLogo.png" alt="" />

            <div className={styles["message-block"]}>
              <span className={styles["heading"]}>Кошик порожній</span>
              <span className={styles["to-catalog"]}>
                Хутчіш перегляньте <span><Link style={{ color: "#791616" }} to="/catalogs">каталог</Link></span> та оберіть для себе щось!
              </span>
            </div>
          </div>
        )
      }
    </main >
  );
};

export default Cart;
