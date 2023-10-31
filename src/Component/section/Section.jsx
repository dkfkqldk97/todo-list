import React from "react";
import Today from "../today/Today";
import Calander from "../calander/Calander";
import styles from "./Section.module.css";

const Section = () => {

    return (
        <div className={styles.section_container}>
            <Calander></Calander>
            <Today></Today>
        </div>
    )
}

export default Section;
