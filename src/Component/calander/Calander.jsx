import React, { useEffect, useState, useRef, useContext } from "react";
import styles from "./Calander.module.css";
import Week from "../week/Week";

const Calander = () => {
    
    const [today, setToday] = useState(new Date());
    
    const [title, setTitle] = useState(
    {
        year : today.getFullYear()
            , month : today.getMonth()+1
        }
    )

    const yoil = ["월", "화", "수", "목", "금", "토", "일"]

    const moveCalander = (type, status) => {
        if(status === "year"){
            setToday(new Date(title.year + type, title.month, 0));
        }else {
            setToday(new Date(title.year, title.month + type, 0));
        }
    }

    useEffect(() => {
        setTitle({
            year : today.getFullYear()
            , month : today.getMonth()+1
        });
    } , [today])

    
    return (
        <React.Fragment>
            <div className={styles.calander_container}>
                    <div className={styles.calander_header}>
                            <button className={`${styles.calander_title} ${styles.button}`} onClick={() => moveCalander(-1, "month")}>{"<"}</button>
                            <div className={styles.calander_title}>{title.year}년 {title.month}월</div>
                            <button className={`${styles.calander_title} ${styles.button}`} onClick={() => moveCalander(+1, "month")}>{">"}</button>
                            
                            {/* <span className={styles.calander_title} onClick={() => moveCalander(-1, "month")}>{"<"}</span> */}
                            {/* <span className={styles.calander_title} onClick={() => moveCalander(+1, "month")}>{">"}</span> */}
                    </div>
                    <div className={styles.calander_body}>
                        <div className={styles.calander_week}>
                            {yoil.map((item, index) => (
                                <div key = {index} className={styles.calander_item}><p>{item}</p></div>
                                ))}
                        </div>
                        <Week 
                            title = {title}
                            ></Week>
                    </div>
                </div>
        </React.Fragment>

    )
}

export default Calander;