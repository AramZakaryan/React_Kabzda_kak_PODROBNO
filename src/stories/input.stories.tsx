import {MutableRefObject, RefObject, useRef, useState} from "react";


export default {
    title: "input",
    // component: OnOff
}


export const UncontrolledInput = () => <input/>
export const UncontrolledInputWithTrackedValue = () => {
    const [value,
        setValue]
        = useState<string>()
    return (<>
        <input value={value}
            onChange={ev => setValue(ev.currentTarget.value)}
        />
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
        <button
            onClick={() => inputRef.current&& setValue(inputRef.current.value)}
        >
            save
        </button>
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
