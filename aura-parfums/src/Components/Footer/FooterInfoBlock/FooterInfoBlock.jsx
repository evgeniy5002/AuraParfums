import React from "react"
import styles from "./FooterInfoBlock.module.scss";

const FooterInfoBlock = ({ title, items }) => {
    return (
        <div className={styles.footer_column}>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.items}>
                <ul>
                    {items.map((item) => {
                        return <li className={styles.item}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FooterInfoBlock;