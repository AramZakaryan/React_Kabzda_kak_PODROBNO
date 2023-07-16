import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}

export const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = (props) => {

    let [collapsed,
        setCollapsed]
        = useState(false)

    return (
        <div>
            <UncontrolledAccordionTitle
                titleValue={props.title}
                setCollapsed={() => setCollapsed(!collapsed)}
            />
            {/*<button onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}>toggle*/}
            {/*</button>*/}
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    titleValue: string
    setCollapsed: () => void
}

const UncontrolledAccordionTitle: React.FC<UncontrolledAccordionTitlePropsType> = (props) => {

    return (
        <div>
            <h3 onClick={props.setCollapsed}>{props.titleValue}</h3>
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