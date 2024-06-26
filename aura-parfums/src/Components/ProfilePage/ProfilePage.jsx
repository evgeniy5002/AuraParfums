import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updatePassword, updatePhoneNumber, updateSurname } from "../../Store/Actions/userActions";
import styles from "./ProfilePage.module.scss";
import UserInfoForm from "./UserInfoForm/UserInfoForm.jsx";
import PasswordChangeForm from "./PasswordChangeForm/PasswordChangeForm.jsx";

const validatePasswordChange = (currentPassword, storedPassword, newPassword, confirmPassword) => {
    return currentPassword === storedPassword && newPassword === confirmPassword;
}

const ProfilePage = () => {
    const storedPassword = useSelector((state) => state.user.password);
    const dispatch = useDispatch();

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleRegistration = (event) => {
        event.preventDefault();

        if (validatePasswordChange(currentPassword, storedPassword, newPassword, confirmPassword)) {
            dispatch(updatePassword(newPassword));

            setNewPassword("");
            setConfirmPassword("");
            setCurrentPassword("");
            setName("");
            setSurname("");
            setPhoneNumber("");
        }
        else {
            alert("Текущий пароль не соответствует паролю пользователя или пароли не совпадают");
        }
    }

    const handleInfoChange = (event) => {
        event.preventDefault();

        dispatch(updateName(name));
        dispatch(updateSurname(surname));
        dispatch(updatePhoneNumber(phoneNumber));
    }

    return (
        <div className={styles["profile-page"]}>
            <div className={styles["profile-container"]}>
                <UserInfoForm
                    handleInfoChange={handleInfoChange}
                    name={name}
                    surname={surname}
                    phoneNumber={phoneNumber}
                    setName={setName}
                    setSurname={setSurname}
                    setPhoneNumber={setPhoneNumber}
                />

                <PasswordChangeForm
                    handleRegistration={handleRegistration}
                    currentPassword={currentPassword}
                    newPassword={newPassword}
                    confirmPassword={confirmPassword}
                    setCurrentPassword={setCurrentPassword}
                    setNewPassword={setNewPassword}
                    setConfirmPassword={setConfirmPassword}
                />
            </div>
        </div>
    );
}

export default ProfilePage;