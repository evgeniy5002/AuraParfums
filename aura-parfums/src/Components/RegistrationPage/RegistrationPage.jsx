import React from "react";
import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
    return (
        <div className={styles["registration-page"]}>
            <div className={styles["registration-container"]}>
                <form action="/submit-form">
                    <div className={styles["inputs"]}>
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Пароль" />
                    </div>

                    <p className={styles["message"]}>
                        *Ваші особисті дані використовуватимуться для підтримки вашого досвіду на цьому веб-сайті,
                        для керування доступом до вашого облікового запису та для інших цілей, описаних у наших політика конфіденційності.
                    </p>

                    <button className={styles["registration-btn"]}>Зареєструватись</button>
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage;