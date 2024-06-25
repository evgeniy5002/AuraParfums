import React from "react";
import styles from "./UserInfoForm.module.scss";

const UserInfoForm = () => {
    return (
        <div className={styles["grid-container"]}>
            <input type="text" placeholder="Номер телефону" />
            <input type="text" placeholder="Ім’я" />
            <input type="text" placeholder="Прізвище" />
        </div>
    );
}

export default UserInfoForm;
