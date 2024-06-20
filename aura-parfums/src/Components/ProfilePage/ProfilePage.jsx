import React from "react";
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
    return (
        <div className={styles["profile-page"]}>
            <div className={styles["profile-container"]}>
                <form action="">
                    <div className={styles["grid-container"]}>
                        <input type="text" placeholder="Номер телефону" />
                        <input type="text" placeholder="Ім’я" />
                        <input type="text" placeholder="Прізвище" />
                    </div>

                    <div className={styles["change-password"]}>
                        <span className={styles["change-password_title"]}>Зміна пароля</span>
                        <span className={styles["change-password_notice"]}>*залиште поля порожніми, щоб не змінювати</span>
                    </div>

                    <div className={styles["grid-container"]}>
                        <input type="text" placeholder="Поточий пароль" />
                        <input type="text" placeholder="Новий пароль" />
                        <input type="text" placeholder="Повторіть пароль" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfilePage;