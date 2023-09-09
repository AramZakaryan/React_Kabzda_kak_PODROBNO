import React, {useEffect, useReducer, useRef, useState} from "react";
import {string} from "prop-types";
import {v1} from "uuid";


export const UseReducerExperiements = () => {

    const [inpValue, setInpValue] = useState<string>("")

    const myRef = useRef(null)
    const reducer = (state: string[], action: { type: string, newName: any }) => {
        switch (action.type) {
            case "add user": {
                return [...state, action.newName]
            }
            default: {
                return state
            }
        }
    }


    const [state, dispatch] = useReducer(reducer, [])


    const addHandler = () => {
        dispatch({type: "add user", newName: inpValue})
        console.log(state)
    }


    return <>
        <input type={"text"}
               value={inpValue}
               onChange={ev => setInpValue(ev.currentTarget.value)}
        />
        <br/>
        <button
            onClick={addHandler}
        >
            add Gago
        </button>

    </>
}