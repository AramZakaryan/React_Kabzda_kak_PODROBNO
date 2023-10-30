import React, {useEffect, useState} from "react";
import {clearInterval} from "timers";


const addZero = (num: number) => num < 10 ? "0" + num : num

type ClockPropsType = {}
export const Clock = (props: ClockPropsType) => {


    const [date, setDate] = useState(new Date)

    let id1:NodeJS.Timer

    useEffect(
        () => {
             id1 = setInterval(() => setDate(new Date), 1000)
        }
        , []
    )

    const onClickHandler = () => {}



    return (<>
        <span>{addZero(date.getHours())}</span>
        :
        <span>{addZero(date.getMinutes())}</span>
        :
        <span>{addZero(date.getSeconds())}</span>

        <button onClick={onClickHandler}>stop</button>
    </>)


}