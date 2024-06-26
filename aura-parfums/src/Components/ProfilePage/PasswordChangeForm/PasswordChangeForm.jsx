import React from "react";
import styles from "../ProfilePage.module.scss";

const PasswordChangeForm = ({
    handleRegistration,
    currentPassword,
    newPassword,
    confirmPassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword
}) => {
    return (
        <div className={styles["change-password-section"]}>
            <div className={styles["change-password"]}>
                <span className={styles["change-password_title"]}>Зміна пароля</span>
                <span className={styles["change-password_notice"]}>*залиште поля порожніми, щоб не змінювати</span>
            </div>

            <form onSubmit={handleRegistration}>
                <div className={styles["grid-container"]}>
                    <input
                        type="password"
                        value={currentPassword}
                        placeholder="Поточний пароль"
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        value={newPassword}
                        placeholder="Новий пароль"
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="Повторіть пароль"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className={styles["submit-btn"]}>
                    <button type="submit">Змінити пароль</button>
                </div>
            </form>

        </div>
    );
}

export default PasswordChangeForm;
