import React, {useEffect, useState} from "react";
import internal from "stream";


const addZero = (num: number) => num < 10 ? "0" + num : num



export const MyClock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(
        () => {
            let id = setInterval(
                () => {
                    setDate(new Date())
                    console.log("tick")
                }
                , 1000
            )

            return () => clearInterval(id) // !!!
        },
        []
    )

    return (<>
        <span>{addZero(date.getHours())}</span>
        :
        <span>{addZero(date.getMinutes())}</span>
        :
        <span>{addZero(date.getSeconds())}</span>
    </>)
}

