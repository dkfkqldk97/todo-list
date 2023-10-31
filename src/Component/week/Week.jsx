import React, { useEffect, useState } from "react";
import Item from "../item/Item";
import TodoModal from "../todo/modal/TodoModal";


const Week = (props) => {
    const {title, getTodoModal} = props;
    const [state, setStates] = useState(
        {
            firstDateIndex : 0
            , lastDateIndex : 0
            , dates : []
        }
    );


    useEffect(() => {
        let prevLast = new Date(title.year, title.month-1, 0);
        let thisLast = new Date(title.year, title.month, 0);
        let prevLastDate = prevLast.getDate(); //저번달의 마지막 일자
        let prevLastDay = prevLast.getDay(); //저번달의 마지막 요일
        let thisLastDate = thisLast.getDate(); //이번달의 마지막 일자
        let thisLastDay = thisLast.getDay(); //이번달의 마지막 요일

        let thisDates = [...Array(thisLastDate+1).keys()].slice(1);
        let prevDates = [];
        let nextDates = [];
        
        if(prevLastDay !== 0) {
            for(let i=0; i<prevLastDay; i++) {
                prevDates.unshift(prevLastDate-i);
            }
        }
        
        for(let i=1; i<=7-thisLastDay; i++) {
            nextDates.push(i);
        }
        
        let dates = prevDates.concat(thisDates, nextDates);
        let lastDateIndex = dates.lastIndexOf(thisLastDate);
        let firstDateIndex = dates.indexOf(1);


        setStates({
            lastDateIndex : lastDateIndex
            , firstDateIndex : firstDateIndex
            , dates : dates
        })
    
        
    }, [title])




    return (
        <>
            {/* dates 배열에서 7개씩 잘라서 한주에 넣기 */}
            {state.dates.map((item, index) => {
                return index%7 === 0 ? 
                <tr key = {index}> 
                        {state.dates.slice(index, index+7).map((value, num) => {
                            return <Item 
                                        key = {num} 
                                        myIndex = {index+num} 
                                        value = {value} 
                                        firstIndex = {state.firstDateIndex} 
                                        lastIndex = {state.lastDateIndex} 
                                        day = {num}
                                        getTodoModal = {getTodoModal}>
                                    </Item>
                        })}
                </tr> 
                    : null
                })}
    </>
    )
}
export default Week;