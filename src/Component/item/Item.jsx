import React, { useState } from "react";
import styles from "./Item.module.css";

const Item = (props) => {
    const {myIndex, value, firstIndex, lastIndex, month, day} = props;
    const today = new Date().getDate();
    const weekend = [5,6];


  //  console.log(value , weekend.includes(day));
    return (
        <React.Fragment>
                <div 
                className={`${myIndex < firstIndex || myIndex > lastIndex ?  
                    styles.other_item : value === today ? 
                    `${styles.today} ${styles.this_item}`: weekend.includes(day) ? 
                    `${styles.weekend} ${styles.this_item}` : styles.this_item} ${styles.calander_item}`}>
            <p>{value}</p>
            </div>
        </React.Fragment>
    )
}

export default Item;