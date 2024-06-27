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
                        links={["/catalogs?category=niche", "/catalogs?category=lux", "/catalogs?category=female", "/catalogs?category=male", "#", "/catalogs?category=fullBottles", "/brands"]}
                    />

                    <FooterInfoBlock
                        title={"Контакти"}
                        items={["Політика конфіденційності", "Публічний договір", "Умови доставки"]}
                        links={["#", "#", "#"]}
                    />

                    <FooterInfoBlock
                        title={"Додатково"}
                        items={["Огляди", "Контакти"]}
                        links={["#", "/contacts"]}
                    />
                </div>

                <div className={styles.payment}>
                    <img src={"/Images/payment.png"} alt="" />
                </div>
            </div>
        </footer>
    )
}


export default Footer;