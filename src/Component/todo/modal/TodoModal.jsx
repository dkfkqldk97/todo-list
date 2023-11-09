import React, { useState } from "react";
import styles from "./TodoModal.module.css";
import calanderIcon from "./../../../image/calander.svg";
import starIcon from "./../../../image/star.svg";
import filterIcon from "./../../../image/filter.svg";
import addIcon from "./../../../image/add.svg";


const TodoModal = (props) => {
    const {onClose} = props;
    const [calander, setCalander] = useState(
            {
                startCalander : {
                                year : 2023
                                , month : 11
                                , day : 23
                                }
                , endCalander : {
                    year : 2023
                    , month : 11
                    , day : 30
                }
        }
    );

    const [check, setCheck] = useState(false);
    const [bookmark, setBookmark] = useState(false);

    const addTask = () => {
    //   task = {...task, startDate : this.calander.startCalander };

        onClose();
    }

    const showScroll = (state) => {

        switch (state) {
            case "year" :
            break;

            case "month" :
            break;

            case "day" :
            break;

            default:

        }
    }
    
    return (
        <div className={styles.modal_bg}>
            <div className={styles.modal_container} id="todo_modal">
                <div className={styles.modal_header}>
                    <button className={styles.modal_close} onClick={onClose}>x</button>
                </div>
                {/* 할일 입력 */}
                <div className={styles.text_layout}>
                    <textarea className={styles.input_text}placeholder="할일을 입력하세요"></textarea>
                    <img src={starIcon} alt="즐겨찾기아이콘" className={`${bookmark ? styles.bookmark : ''} ${styles.icon}`} onClick={() => {setBookmark(!bookmark)}}></img>
                {/* 기간 입력 */}
                </div>
                <div className={styles.container}>
                    {/* 시작일자 */}
                    <img src={calanderIcon} alt="달력아이콘" className={styles.icon}></img>
                    <div className={styles.calander_layout}>
                        <span onClick={showScroll("year")} className={styles.calander_item}>{calander.startCalander.year}</span>
                        <span className={styles.calander_item}>-</span>
                        <span className={styles.calander_item}>{calander.startCalander.month}</span>
                        <span className={styles.calander_item}>-</span>
                        <span className={styles.calander_item}>{calander.startCalander.day}</span>
                    </div>

                    {check && <span className={styles.calander_item}>~</span>}

                    {check &&
                    <div className={styles.calander_layout}>
                        <span onClick={showScroll("year")} className={styles.calander_item}>{calander.endCalander.year}</span>
                        <span className={styles.calander_item}>-</span>
                        <span className={styles.calander_item}>{calander.endCalander.month}</span>
                        <span className={styles.calander_item}>-</span>
                        <span className={styles.calander_item}>{calander.endCalander.day}</span>
                    </div>
                    }
                    {/* 기간 체크 */}
                    <div className={styles.checkbox_layout}>
                        <input type="checkbox" checked={check} onChange={() => {setCheck(!check )}}className={styles.checkbox}></input>
                        <p>기간 체크</p>
                    </div>
                </div>
                {/* 태그 */}
                <div className={styles.container}>
                    <img src={filterIcon} alt="필터아이콘"></img>
                    <div className={styles.blurtext}>태그설정</div>
                    <button className={styles.button}><img src={addIcon}></img></button>
                </div>
                {/* 메모 & 평가 */}
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <button className={styles.button} onClick={() => addTask()}>추가</button>
                </div>
            </div>
        </div>
    )

}

export default TodoModal;