import React from "react";
import styles from "./Contacts.module.scss"

const Contacts = () => {
    return (
        <div className={`${styles.contacts_container} container`}>
            <div>
                <h2>Контакти</h2>
                <p>У нас відсутній кол-центр, однак всі питання ми максимально швидко вирішуємо у текстовому вигляді.</p>
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