import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../Store/Actions/userActions";
import { useNavigate } from "react-router-dom";
import { getStoredUsers } from "../../Utils/getStoredUsers";
import styles from "./RegistrationPage.module.scss";

const checkUserExists = (email) => {
    const storedUsers = getStoredUsers();
    return storedUsers.some((user) => user.email === email);
}

const saveUserToLocalStore = (credentials) => {
    let users = getStoredUsers();
    users.push(credentials);
    localStorage.setItem("users", JSON.stringify(users));
}

const RegistrationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const id = Math.floor(Math.random() * 9999999);

    const handleRegistration = (event) => {
        event.preventDefault();

        if (checkUserExists(email)) {
            alert("Пользователь с таким email уже существует!");
        }
        else {
            saveUserToLocalStore({ email, password, id });
            dispatch(setUser({ email, password, id }));
            navigate("/user-page/workshop");
        }
    }

    return (
        <div className={styles["registration-page"]}>
            <div className={styles["registration-container"]}>
                <form>
                    <div className={styles["inputs"]}>
                        <input
                            type="email"
                            value={email}
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            value={password}
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <p className={styles["message"]}>
                        *Ваши личные данные будут использоваться для поддержки вашего опыта на этом сайте,
                        для управления доступом к вашей учетной записи и для других целей, описанных в нашей политике конфиденциальности.
                    </p>

                    <button
                        className={styles["registration-btn"]}
                        onClick={handleRegistration}
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage;
