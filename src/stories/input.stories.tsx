import {MutableRefObject, RefObject, useRef, useState} from "react";
import {valueOf} from "node";
import {action} from "@storybook/addon-actions";


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

export const ControlledInput = () => {

    const [valueFromParent,
        setValueFromParent]
        = useState("")

    return (<>
        <input value={valueFromParent}
               onChange={ev => setValueFromParent(ev.currentTarget.value)}
        />
    </>)
}

export const ControlledCheckbox = () => {

    const [valueFromParen,
        setValueFromParent]
        = useState(false)

    return (<>

        <input type={"checkbox"} checked={valueFromParen}
               onChange={ev => setValueFromParent(ev.currentTarget.checked)}
        />

    </>)
}

export const ControlledSelect = () => {

    const [valueFromParen,
        setValueFromParent]
        = useState<string | undefined>(undefined)

    return (<>

        <select value={valueFromParen}
                onChange={ev => setValueFromParent(ev.currentTarget.value)}
        >
            <option>none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Kiev</option>

        </select>

    </>)
}