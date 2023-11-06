import React, { useState } from "react";
import styles from "./TodoModal.module.css";
import calanderImage from "./../../../Image/Vector.png";

const TodoModal = (props) => {
    const {onClose} = props;
    const [starCalander, setStartCalander] = useState(
            {
                year : 2023
                , month : 11
                , day : 23
            }
    );
    
    return (
        <div className={styles.modal_bg}>
            <div className={styles.modal_container} id="todo_modal">
                <div className={styles.modal_header}>
                    <button className={styles.modal_close} onClick={onClose}>x</button>
                </div>
                {/* 할일 입력 */}
                <div className={styles.input_layout}>
                    <textarea className={styles.input_text}placeholder="할일을 입력하세요"></textarea>
                    <image src={calanderImage}></image>
                </div>
                <div>
                {/* 기간 입력 */}
                <div className={styles.calander_layout}>
                    {/* 시작일자 */}
                    <div>
                        <span>{starCalander.year}</span>
                        <span>{starCalander.month}</span>
                        <span>{starCalander.day}</span>
                    </div>
                    {/* 기간 체크 */}
                    <div className={styles.checkbox_layout}>
                        <div className={styles.checkbox}></div>
                        <p>기간 체크</p>
                    </div>
                </div>
                {/* 태그 */}
                <div>

                </div>
                {/* 메모 & 평가 */}
                <div>
                    <div></div>
                    <div></div>
                </div>

                </div>
            </div>
        </div>
    )

}

export default TodoModal;