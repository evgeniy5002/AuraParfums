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
    const [id] = useState(Math.floor(Math.random() * 9999999));
    const [cartItems] = useState([]);
    const [name] = useState("");
    const [surname] = useState("");
    const [phoneNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (checkUserExists(email)) {
            alert("Пользователь с таким email уже существует!");
        }
        else {
            saveUserToLocalStore({ email, password, id, cartItems, name, surname, phoneNumber });
            dispatch(setUser({ email, password, id, cartItems, name, surname, phoneNumber }));
            navigate("/user-page/workshop");
        }
    }

    return (
        <div className={styles["registration-page"]}>
            <div className={styles["registration-container"]}>
                <form onSubmit={handleSubmit}>
                    <div className={styles["inputs"]}>
                        <input
                            type="email"
                            value={email}
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            value={password}
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <p className={styles["message"]}>
                        *Ваши личные данные будут использоваться для поддержки вашего опыта на этом сайте,
                        для управления доступом к вашей учетной записи и для других целей, описанных в нашей политике конфиденциальности.
                    </p>

                    <button type="submit" className={styles["registration-btn"]}>
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage;
