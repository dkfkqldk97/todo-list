import React, {useState} from "react";
import styles from "./Today.module.css";
import TodoModal from "../todo/modal/TodoModal";
import { createPortal } from "react-dom";


const Today = () => {
    
    const [showModal, setShowModal] = useState(false);
    
    const getModal = (status) => {
        const modal = document.getElementById("todo_modal");
        const section = document.getElementById("section");
        console.log(section);
        //모달창 오픈 이벤트 && 모달창이 띄워져있는 경우
        if(status && modal != null) {
            modal.remove();
        }

        if(status) {
            section.style.setProperty('background', "#77767694");
        } else {
            section.style.setProperty('background', "#fff");
        }

        setShowModal(status);
        }
    
        return (
            <div className={styles.today_container}>
                <div className={styles.today_title}>
                    ToDo List
                </div>
                <div className={styles.today_header}>
                    <textarea className={styles.textarea}placeholder="search">
                    </textarea>
                </div>
                <button className={styles.button_add} onClick={() => getModal(true)}>ADD</button>
                {showModal && createPortal(
                <TodoModal onClose={() => getModal(false)} 
                />, document.body
            )}
            </div>
        )
}

export default Today;