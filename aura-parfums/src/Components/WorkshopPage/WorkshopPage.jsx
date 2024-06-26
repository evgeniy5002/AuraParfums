import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./WorkshopPage.module.scss";

const WorkshopPage = () => {
    const navigate = useNavigate();
    const email = useSelector((state => state.user.email));

    const handleClick = () => {
        navigate('/catalogs');
    }

    return (
        <div className={styles["workshop-page"]}>
            <div className={styles["workshop-container"]}>
                <span className={styles["title"]}>Вітаємо, {email}</span>
                <span className={styles["message"]}>На сторінці облікового запису ви можете переглядати <a href="#">останні замовлення</a>, та редагувати свій <a href="#">пароль та дані облікового запису.</a> </span>
                <button onClick={handleClick} className={styles["catalog-btn"]}>Каталог</button>
            </div>
        </div>
    );
}

export default WorkshopPage;