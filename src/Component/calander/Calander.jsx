import React, { useEffect, useState } from "react";
import styles from "./Calander.module.css";
import Week from "../week/Week";
import TodoModal from "../todo/modal/TodoModal";

const Calander = () => {
    
    const [today, setToday] = useState(new Date());
    
    const [title, setTitle] = useState(
    {
        year : today.getFullYear()
            , month : today.getMonth()+1
        }
    )

    const [showModal, setShowModal] = useState(false);
    const [selectDay, setSelectDay] = useState();
    
    const yoil = ["월", "화", "수", "목", "금", "토", "일"]

    const getTodoModal = (status, value) => {
        setShowModal(status);
        setSelectDay(value);
    }

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
        <div>
            <div className={styles.calander_container}>
                <table className={styles.calander_layout}>
                    <thead className={styles.calander_header}>
                        <tr>
                            <th colSpan= "1" className={styles.calander_title} onClick={() => moveCalander(-1, "year")}>{"<"}</th>
                            <th colSpan= "2" className={styles.calander_title}>{title.year}년</th>
                            <th colSpan= "1" className={styles.calander_title} onClick={() => moveCalander(+1, "year")}>{">"}</th>
                            
                            <th colSpan= "1" className={styles.calander_title} onClick={() => moveCalander(-1, "month")}>{"<"}</th>
                            <th colSpan= "1" className={styles.calander_title}>{title.month}월</th>
                            <th colSpan= "1" className={styles.calander_title} onClick={() => moveCalander(+1, "month")}>{">"}</th>
                        </tr>
                    </thead>
                    <tbody className={styles.calander_body}>
                        <tr>
                            {yoil.map((item, index) => (
                                <td key = {index} className={styles.calander_item}>{item}</td>
                                ))}
                        </tr>
                        <Week 
                            title = {title}
                            getTodoModal = {getTodoModal}
                            ></Week>
                    </tbody>
                </table>
            </div>
            {showModal && (<TodoModal
                                year = {title.year}
                                month = {title.month}
                                day = {selectDay}
                            >
                            </TodoModal>)}
        </div>

    )
}

export default Calander;