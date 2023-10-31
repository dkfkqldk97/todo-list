import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {

    return (
        <>
            <div className={styles.main_header}>
                <div className={styles.home}>
                    <span>home</span>
                </div>
                <div className={styles.login_menu}>
                    <span className={styles.login_item}>login</span>
                    <span className={styles.login_item}>about</span>
                </div>
            </div>
        </>
    )
}

export default Navigation;