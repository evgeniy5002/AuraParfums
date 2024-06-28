import React from "react";
import styles from "./OftenQuestions.module.scss"

const OftenQuestions = () => {
    return (
        <div className={styles.OQcontainer}>
            <div>
            <h2>Найчастіші Запитання</h2>
            <p>Якщо ви не знайшли відповіді на воє питання - пишіть нам на сайті або на наші сторінки у соцмережах</p>
            <div className={styles.OQicons}>
                <br /><br />
            <a><i class="bi-instagram"></i></a>
            <a><i class="bi-facebook"></i></a>
            <a><i class="bi-telegram"></i></a>
            </div>
            </div>
           <div className={styles.OQcontainerImgQuest}>
            <div className={styles.OQcontainerQuestions}>
                <div><button>Як здійснити замовлення?</button></div>
                <div><button>Коли відправка замовлення?</button></div>
                <div><button>Чи є післяплата?</button></div>
                <div><button>Чи у вас оригінал?</button></div>
                <div><button>Я зробив/зробила замовлення - що далі?</button></div>
            </div>
           <img src="Images/fcba80713bbdfad80ecb91b9bc193ff5.jpeg" alt=""/>
           </div>
        </div>
    )
}

export default OftenQuestions;