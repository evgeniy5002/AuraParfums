import React from "react";
import styles from "./WorkshopPage.module.scss";
import { useNavigate } from "react-router-dom";

const WorkshopPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/catalogs');
    }

    return (
        <div className={styles["workshop-page"]}>
            <div className={styles["workshop-container"]}>
                <span className={styles["title"]}>Вітаємо, user@gmail.com</span>
                <span className={styles["message"]}>На сторінці облікового запису ви можете переглядати <a href="#">останні замовлення</a>, та редагувати свій <a href="#">пароль та дані облікового запису.</a> </span>
                <button onClick={handleClick} className={styles["catalog-btn"]}>Каталог</button>
            </div>
        </div>
    );
}

export default WorkshopPage;