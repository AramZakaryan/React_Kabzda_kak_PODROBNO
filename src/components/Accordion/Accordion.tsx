import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClickCallback: ()=>void

}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle titleValue={props.title} onClickCallback={props.onClickCallback}/>

        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    titleValue: string
    onClickCallback: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onClickCallback}>{props.titleValue}</h3>
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