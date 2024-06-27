import React from "react"
import styles from "./FooterInfoBlock.module.scss";

const FooterInfoBlock = ({ title, items, links }) => {
    return (
        <div className={styles.footer_column}>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.items}>
                <ul>
                    {items.map((item, index) => {
                        return <li key={item} className={styles.item}>
                            <a href={links[index]}>{item}</a> 
                            </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default FooterInfoBlock;