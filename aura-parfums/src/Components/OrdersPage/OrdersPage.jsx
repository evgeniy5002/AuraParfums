import React from "react";
import styles from "./OrdersPage.module.scss";
import { useNavigate } from "react-router-dom";

const OrdersPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/catalogs');
    }

    return (
        <div className={styles["orders-page"]}>
            <div className={styles["orders-container"]}>
                <span className={styles["title"]}>Ваші замовлення</span>
                <span className={styles["message"]}>Тут з’являтимуться ваші замовлення, щойно ви їх здійсните</span>
                <button onClick={handleClick} className={styles["catalog-btn"]}>Каталог</button>
            </div>
        </div>
    );
}

export default OrdersPage;