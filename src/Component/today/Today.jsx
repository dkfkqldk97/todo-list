import React, {useEffect, useState} from "react";
import styles from "./Today.module.css";
import TodoModal from "../todo/modal/TodoModal";
import { createPortal } from "react-dom";
import doneIcon from "./../../image/done.svg";
import deleteIcon from "./../../image/delete.svg";
import editIcon from "./../../image/edit.svg";


const Today = () => {
    
    const [showModal, setShowModal] = useState(false);
    const [tasklist, setTasklist] = useState([]);
    
    const getModal = (status, task) => {
        console.log(status, task);
        const modal = document.getElementById("todo_modal");
        //모달창 오픈 이벤트 && 모달창이 띄워져있는 경우
        if(status && modal != null) {
            modal.remove();
        }

        if(task.title !== undefined && task.title!=="" && !status) {
            setTasklist([...tasklist, task]);
        }

        setShowModal(status);
    }

    useEffect(() => {console.log(tasklist)}, [tasklist])

    const doneTask = () => {

    }

    const editTask = () => {
        getModal(true);
    }

    const deleteTask = (index) => {
        tasklist.splice(index,1);
        setTasklist([...tasklist]);
    }
    
        return (
            <div className={styles.today_container}>
                <div className={styles.today_title}>
                    ToDo List
                </div>
                <div className={styles.textarea_layout}>
                    <textarea className={styles.textarea}placeholder="search"></textarea>     
                </div>
                <button className={styles.button_add} onClick={() => getModal(true)}>+ ADD</button>
                <div className={styles.task_container}>
                {tasklist.length!==0 && tasklist.map((value, index) => {
                    return <div key={index} className={styles.task_layout}>
                                <div className={styles.task}>{value.title}</div>
                                <img src={doneIcon} alt="done" className={styles.icon} onClick={() => doneTask()}></img>
                                <img src={deleteIcon} alt="delete" className={styles.icon} onClick={()=>deleteTask(index)}></img>
                                <img src={editIcon} alt="edit" className={styles.icon} onClick={()=>{editTask()}}></img>
                            </div>
                })}
                </div>
                {showModal && createPortal(
                <TodoModal onClose={(task) => getModal(false, task) } 
                />, document.body
            )}
            </div>
        )
}

export default Today;