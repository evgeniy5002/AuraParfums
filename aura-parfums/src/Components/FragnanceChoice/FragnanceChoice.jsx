import React from "react"
import { Link } from "react-router-dom";
import styles from "./FragnanceChoice.module.scss";

const FragnanceChoice = () => {
    return (
        <div className={styles["fragnance-choice-block"]}>
            <div className={`${styles["fragnance-choice_container"]} container`}>
                <img src="Images/parfume-choice-image.png" alt="" />
                <div className={styles["fragnance-choice-block_text"]}>
                    <h2>ПІДБІР ПАРФУМІВ ЗА ВАШИМИ ПОБАЖАННЯМИ</h2>

                    <p>
                        Якщо, ви загубилися у нашому каталозі ароматів і не знаєте, який парфум хотіли б спробувати, ми можемо допомогти - надіслати перелік ароматів, які відповідають саме вашим побажанням.
                    </p>

                    <p>
                        Дайте відповідь на декілька запитань і отримайте свій перелік парфумів, які вам варто спробувати.
                    </p>

                    <Link to={"/fragnance-choice"} className="default-button-white">Отримати підбірку</Link>
                </div>
            </div>
        </div>
    )
}

export default FragnanceChoice;