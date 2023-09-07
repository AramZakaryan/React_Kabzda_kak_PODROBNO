import React, {useState} from "react";
import {Select} from "./Select";
import "./Select.css"
import {action} from "@storybook/addon-actions";


export default {
    title: "select",
    component: Select
}


export const BaseExample = () => {
    const [selectedItemId, setSelectedItemId] = useState("1")
    return (<Select selectedItemId={selectedItemId}
            onChange={setSelectedItemId}
            items={[{id: "1", title: "Moscow"},
                {id: "2", title: "Minsk"},
                {id: "3", title: "Kiev"}
            ]}/>)
}

export const WithNoInitialSelect = () => {
    const [selectedItemId, setSelectedItemId] = useState("")
    return (<Select selectedItemId={selectedItemId}
                    onChange={setSelectedItemId}
                    items={[{id: "1", title: "Moscow"},
                        {id: "2", title: "Minsk"},
                        {id: "3", title: "Kiev"}
                    ]}/>)
}