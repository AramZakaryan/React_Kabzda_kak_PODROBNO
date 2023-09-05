import React, {useState} from "react";

export const Select = () => {

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