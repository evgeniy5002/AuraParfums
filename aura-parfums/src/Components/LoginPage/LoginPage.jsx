import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../Store/Actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { getStoredUsers } from "../../Utils/getStoredUsers";
import styles from "./LoginPage.module.scss";

function authenticateUser(credentials, users) {
    const matchedUser = users.find((user) => user.email === credentials.email);
    return matchedUser && matchedUser.password === credentials.password ? matchedUser : null;
}

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        const storedUsers = getStoredUsers();
        const authenticatedUser = authenticateUser({ email, password }, storedUsers);

        if (authenticatedUser) {
            dispatch(setUser(authenticatedUser));
            // Устанавливает id текущего активного пользователя
            localStorage.setItem("activeUserId", authenticatedUser.id);
            navigate("/user-page/workshop");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className={styles["login-page"]} >
            <div className={styles["login-container"]}>
                <form onSubmit={handleLogin}>
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

                        <u className={styles["forgot-password"]}><Link to="/user-page/restore-password">Забули пароль?</Link></u>
                    </div>

                    <div className={styles["submit-block"]}>
                        <button type="submit">Увійти</button>
                    </div>
                </form>

                <div className={styles["register-offer"]}>
                    <span>Нема облікового запису? <Link to="/user-page/registration" className={styles["register-link"]}>Зареєструватись</Link></span>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
