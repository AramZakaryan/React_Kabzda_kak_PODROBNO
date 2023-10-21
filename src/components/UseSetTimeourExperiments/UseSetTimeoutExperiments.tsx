import React, {useEffect, useReducer, useRef, useState} from "react";
import {string} from "prop-types";
import {v1} from "uuid";


export const SetTimeoutExperiements = () => {
    const [myTime, setMyTime] = useState<Date>(new Date())

    setInterval(() => {
            setMyTime(new Date())
        }
        , 1000
    )



    return (<>
        {myTime.getHours()}:{myTime.getMinutes()}:{myTime.getSeconds()}

    </>)
}