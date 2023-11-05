import React, { useState } from "react";
import styles from "./TodoModal.module.css";

const TodoModal = (props) => {
    const {onClose, month, day} = props;
    
    return (
        <div className={styles.modal_container} id="todo_modal">
            {month}월{day}일
            <button className={styles.modal_close}
                onClick={onClose}>x</button>
        </div>
    )

}

export default TodoModal;