import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePassword } from "../../Store/Actions/userActions";
import styles from "./ProfilePage.module.scss";
import UserInfoForm from "./UserInfoForm/UserInfoForm.jsx";
import PasswordChangeForm from "./PasswordChangeForm/PasswordChangeForm.jsx";

const validatePasswordChange = (currentPassword, storedPassword, newPassword, confirmPassword) => {
    return currentPassword === storedPassword && newPassword === confirmPassword;
}

const ProfilePage = () => {
    const storedPassword = useSelector((state) => state.password);
    const dispatch = useDispatch();

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validatePasswordChange(currentPassword, storedPassword, newPassword, confirmPassword)) {
            dispatch(updatePassword(newPassword));

            setNewPassword("");
            setConfirmPassword("");
            setCurrentPassword("");
        }
        else {
            alert("Текущий пароль не соответствует паролю пользователя или пароли не совпадают");
        }
    }

    return (
        <div className={styles["profile-page"]}>
            <div className={styles["profile-container"]}>
                <form onSubmit={handleSubmit}>
                    <UserInfoForm />

                    <PasswordChangeForm
                        currentPassword={currentPassword}
                        newPassword={newPassword}
                        confirmPassword={confirmPassword}
                        setCurrentPassword={setCurrentPassword}
                        setNewPassword={setNewPassword}
                        setConfirmPassword={setConfirmPassword}
                    />

                    <div className={styles["change-password-btn"]}>
                        <button type="submit">Змінити пароль</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfilePage;