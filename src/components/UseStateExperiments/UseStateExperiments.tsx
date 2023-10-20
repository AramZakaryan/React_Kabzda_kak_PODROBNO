import React, {useEffect, useReducer, useRef, useState} from "react";
import {string} from "prop-types";
import {v1} from "uuid";


const myFunc = ()=> {
    console.log("MyFunc run")
    return 0
}

export const UseStateExperiements = () => {

    const [counter, setCounter] =useState<number>(myFunc)

    const changer = (state:number)=> {
        console.log("Changer run")
        return state + 1
    }

    return(<>
        {counter}
        <br/>
        <button onClick={()=>setCounter(changer)}>+</button>

        </>)

}