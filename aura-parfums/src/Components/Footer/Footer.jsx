import React from "react";
import FooterInfoBlock from "./FooterInfoBlock/FooterInfoBlock";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer_container} container`}>

                <div className={styles.info}>
                    <FooterInfoBlock
                        title={"Каталог"}
                        items={["Нішева парфумерія", "Люксова парфумерія", "Жіноча парфумерія", "Чоловіча парфумерія", "Сети парфумів", "Цілі флакони", "Бренди"]}
                    />

                    <FooterInfoBlock
                        title={"Контакти"}
                        items={["Політика конфіденційності", "Публічний договір", "Умови доставки"]}
                    />

                    <FooterInfoBlock
                        title={"Додатково"}
                        items={["Огляди", "Контакти"]}
                    />
                </div>

                <div className={styles.payment}>
                    <img src={"Images/payment.png"} alt="" />
                </div>
            </div>
        </footer>
    )
}


export default Footer;