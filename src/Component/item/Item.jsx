import React, { useState } from "react";
import styles from "./Item.module.css";

const Item = (props) => {
    const {myIndex, value, firstIndex, lastIndex, day, getTodoModal} = props;
    const today = new Date().getDate();
    const weekend = [5,6];

    const openTodoModal = () => {
        getTodoModal(true, value);
    }

    console.log(value , weekend.includes(day));
    return (
        <td 
            colSpan={"1"}
            onClick = {() => openTodoModal()} 
            className={myIndex < firstIndex || myIndex > lastIndex ?  
                            styles.other_item : value === today ? 
                                styles.today : weekend.includes(day) ? 
                                    styles.weekend : styles.this_item}>
        {value}
        </td>
    )
}

export default Item;