import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../Store/Actions/userActions";
import { useNavigate } from "react-router-dom";
import { checkUserExists } from "../../Utils/checkUserExists";
import { saveUserToLocalStore } from "../../Utils/saveUserToLocalStore";
import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValid, setEmailValid] = useState(true); // Validation state for email
    const [passwordValid, setPasswordValid] = useState(true); // Validation state for password

    const handleSubmit = (event) => {
        event.preventDefault();

        let isValid = true;

        // Validate email
        if (!validateEmail(email)) {
            setEmailValid(false);
            isValid = false;
        } else {
            setEmailValid(true);
        }

        // Validate password
        if (!validatePassword(password)) {
            setPasswordValid(false);
            isValid = false;
        } else {
            setPasswordValid(true);
        }

        if (!isValid) return;

        // Check if user already exists
        if (checkUserExists(email)) {
            alert("Пользователь с таким email уже существует!");
        } else {
            saveUserToLocalStore({ email, password });
            dispatch(setUser({ email, password }));
            navigate("/user-page/workshop");
        }
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 7 && password.length <= 12;
    };

    return (
        <div className={styles["registration-page"]}>
            <div className={styles["registration-container"]}>
                <form onSubmit={handleSubmit}>
                    <div className={styles["inputs"]}>
                        <input
                            type="text"
                            value={email}
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ borderColor: emailValid ? "" : "red" }}
                            required
                        />
                        {!emailValid && (
                            <p className={styles["error-message"]}>Неверный формат email</p>
                        )}

                        <input
                            type="password"
                            value={password}
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ borderColor: passwordValid ? "" : "red" }}
                            required
                        />
                        {!passwordValid && (
                            <p className={styles["error-message"]}>
                                Пароль должен быть от 7 до 12 символов
                            </p>
                        )}
                    </div>

                    <p className={styles["message"]}>
                        *Ваши личные данные будут использоваться для поддержки вашего опыта на
                        этом сайте, для управления доступом к вашей учетной записи и для других
                        целей, описанных в нашей политике конфиденциальности.
                    </p>

                    <button type="submit" className={styles["registration-btn"]}>
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
