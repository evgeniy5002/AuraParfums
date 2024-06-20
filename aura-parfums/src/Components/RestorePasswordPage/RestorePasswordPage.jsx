import React from "react";
import styles from "./RestorePasswordPage.module.scss";

const RestorePasswordPage = () => {
    return (
        <div className={styles["restore-password-page"]}>
            <div className={styles["restore-password-container"]}>
                <form action="/submit-form">
                    <input type="email" placeholder="E-mail" />
                    <button className={styles["restore-password-btn"]}>Відновити пароль</button>
                </form>
            </div>
        </div>
    );
}

export default RestorePasswordPage;