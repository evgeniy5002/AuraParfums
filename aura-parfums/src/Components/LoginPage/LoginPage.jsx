import React from "react";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
    return (
        <div className={styles["login-page"]} >
            <div className={styles["login-container"]}>
                <form action="/submit-form">
                    <div className={styles["inputs"]}>
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Пароль" />
                        <u className={styles["forgot-password"]}>Забули пароль?</u>
                    </div>

                    <div className={styles["submit-block"]}>
                        <button type="submit">Увійти</button>
                    </div>
                </form>

                <div className={styles["register-offer"]}>
                    <span>Нема облікового запису? <a className={styles["register-link"]}>Зареєструватись</a></span>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;