import React from "react"
import styles from "./FooterInfoBlock.module.css";

const FooterInfoBlock = ({ title, items }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>{title}</span>
            </div>

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