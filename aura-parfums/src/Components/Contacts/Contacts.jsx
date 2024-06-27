import React from "react";
import styles from "./Contacts.module.scss"

const Contacts = () => {
    return (
        <div className={styles.container}>
            <div>
            <h2>Контакты</h2>
            <p>У нас не колл-центра, но все вопросы максимально быстро решаются в текстовом формате :D</p>
            </div>
            <div className={styles.icons}>
                <br /><br />
            <a><i class="bi-instagram"></i></a>
            <a><i class="bi-facebook"></i></a>
            <a><i class="bi-telegram"></i></a>
            </div>
        </div>
    )
}

export default Contacts;