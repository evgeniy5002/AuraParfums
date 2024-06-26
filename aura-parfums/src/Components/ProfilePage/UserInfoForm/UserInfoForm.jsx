import React from "react";
import styles from "./UserInfoForm.module.scss";

const UserInfoForm = ({
    handleInfoChange,
    name,
    surname,
    phoneNumber,
    setName,
    setSurname,
    setPhoneNumber
}) => {
    return (
        <form onSubmit={handleInfoChange}>
            <div className={styles["grid-container"]}>
                <input
                    type="text"
                    value={phoneNumber}
                    placeholder="Номер телефону"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <input
                    type="text"
                    value={name}
                    placeholder="Ім’я"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    value={surname}
                    placeholder="Прізвище"
                    onChange={(e) => setSurname(e.target.value)}
                />
            </div>

            <div className={styles["submit-btn"]}>
                <button type="submit"> Подтвердить</button>
            </div>
        </form>
    );
}

export default UserInfoForm;
