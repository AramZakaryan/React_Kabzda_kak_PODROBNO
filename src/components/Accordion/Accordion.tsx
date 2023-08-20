import React from "react";

export type AccordionPropsType = {
    title: string
    /**
     * collapsed is true that means that items are off
     */
    collapsed: boolean
    onClickCallback: ()=>void
    /**
     * Optional color of the title (default is red)
     */
    color?: string
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle titleValue={props.title} onClickCallback={props.onClickCallback} color={props.color?props.color:"red"} />
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    titleValue: string
    onClickCallback: ()=>void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onClickCallback} style={{color: `${props.color}`}}>{props.titleValue}</h3>
        </div>
    );
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


export default Accordion;