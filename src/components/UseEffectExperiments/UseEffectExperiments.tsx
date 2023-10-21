import React, {useEffect, useReducer, useRef, useState} from "react";
import {string} from "prop-types";
import {v1} from "uuid";


const myFunc = () => {
    console.log("MyFunc run")
    return 0
}

export const UseEffectExperiements = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {}, [])
    useEffect(() => {}, [counter])
    return (<>
        "JSX"
    </>)
}