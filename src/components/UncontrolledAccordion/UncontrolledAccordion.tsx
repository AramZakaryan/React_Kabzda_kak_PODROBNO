import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
    // collapsed: boolean
}

export const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = (props) => {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <UncontrolledAccordionTitle titleValue={props.title}/>
            <button onClick={()=>{setCollapsed(collapsed => !collapsed)}}>toggle</button>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    titleValue: string
}

const UncontrolledAccordionTitle: React.FC<UncontrolledAccordionTitlePropsType> = (props) => {

    return (
        <div>
            <h3>{props.titleValue}</h3>
        </div>
    )
}

const UncontrolledAccordionBody = () => {

    return (
        <div>
        <ul>
            <li>Line 1</li>
            <li>Line 2</li>
            <li>Line 3</li>
        </ul>
        </div>
    )
}