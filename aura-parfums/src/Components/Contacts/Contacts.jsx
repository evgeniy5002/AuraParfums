import React from "react";
import styles from "./Contacts.module.scss"

const Contacts = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2>Контакты</h2>
                <p>У нас відсутній кол-центр, однак всі питання ми максимально швидко вирішуємо у текстовому вигляді.</p>
            </div>
            <div>
                <a><i className=""></i></a>
                <a></a>
                <a></a>
            </div>
        </div>
    )
}

export default Contacts;