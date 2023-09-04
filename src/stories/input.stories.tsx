import {MutableRefObject, RefObject, useRef, useState} from "react";
import {valueOf} from "node";


export default {
    title: "input",
    // component: OnOff
}


export const UncontrolledInput = () => <input/>
export const UncontrolledInputWithTrackedValue = () => {
    const [value,
        setValue]
        = useState()
    return (<>
        <input value={value}
               onChange={ev => setValue(ev.currentTarget.value)}/>
        {value}
    </>)
}

export const UncontrolledInputWithGettingValueByButtonPres = () => {
    const [value,
        setValue]
        = useState("")

    const inputRef = useRef<HTMLInputElement>(null)

    return (<>
        <input ref={inputRef}/>
        <button onClick={() => setValue(inputRef.current.value)}>save</button>
        {value}
    </>)
}

export const ControlledInput = () => <input value={"it-incubator"}/>
