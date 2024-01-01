import React, { useEffect, useState } from "react";
import styles from "./TodoModal.module.css";
import calanderIcon from "./../../../image/calander.svg";
import starIcon from "./../../../image/star.svg";
import filterIcon from "./../../../image/filter.svg";
import addIcon from "./../../../image/add.svg";
import likeIcon from "./../../../image/like.svg";
import dislikeIcon from "./../../../image/dislike.svg";
import fullstarIcon from "./../../../image/fullstar.svg";


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
    const [showModal, setShowModal] = useState(false);

    const [taglist, setTaglsit] = useState([]);
    const [tag, setTag] = useState();
    const [task, setTask] = useState(
        {
            title : ""
            , date : calander
            , bookmark : bookmark
            , taglist : taglist
        }
    );

    const addTask = () => {
        console.log(task);
        onClose(task);
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

    const addTag = () => {
        if(tag !== undefined) {
            setTaglsit([...taglist, tag]);
        }
        setShowModal(false);
    }

    useEffect(() => {
        taglist.map((value, index) => {
        })
    },[taglist]);
    
    return (
        <div className={styles.modal_bg}>
            <div className={styles.modal_container} id="todo_modal">
                <div className={styles.modal_header}>
                    <button className={styles.modal_close} onClick={() => onClose("")}>x</button>
                </div>
                {/* 할일 입력 */}
                <div className={styles.text_layout}>
                    <textarea onChange={(e) => setTask({...task, title : e.target.value})} className={styles.input_text}placeholder="할일을 입력하세요"></textarea>
                    <img src={`${bookmark ? fullstarIcon :starIcon}`} alt="즐겨찾기아이콘" className={styles.icon} onClick={() => {setBookmark(!bookmark)}}></img>
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
                <div className={`${styles.tag_container} ${styles.container}`}>
                    <img src={filterIcon} alt="필터아이콘"></img>
                    {taglist.length > 0 ? taglist.map((value, index) => {
                        return <div key={index} className={styles.tag}>{value}</div>;
                    }): <div className={styles.blurtext}>태그설정</div>}
                    <button onClick={() => {setShowModal(true)}} className={styles.button}><img src={addIcon} alt="추가버튼"></img></button>
                </div>
                {/* 메모 & 평가 */}
                <div className={styles.memo_container}>
                        <div>메모</div>
                        <textarea className={styles.memo}></textarea>
                </div>
                {/* <div className={styles.container}>
                    <img src={likeIcon} alt="좋음아이콘"></img>
                    <img src={dislikeIcon} alt="나쁨아이콘"></img>
                </div> */}
                <div className={styles.modal_footer}>
                    <button className={styles.add_button} onClick={() => addTask()}>추가</button>
                </div>
            {showModal && 
                <div onKeyDown={(e) => {if(e.code === "Enter") addTag()}} className={styles.tag_modal_container}>
                    <div className={styles.tag_modal_layout}>
                        <div>태그를 입력하세요</div>
                        <textarea onChange={(e) => {setTag(e.target.value)}} className={styles.tag_input}></textarea>
                        <button onClick={() => {addTag()}} className={`${styles.button} ${styles.tag_button}`}>확인</button>
                    </div>
                </div>
            }
            </div>
        </div>
    )

}

export default TodoModal;