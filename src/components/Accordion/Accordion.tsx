import React from "react";

// type AccordionPropsType = {title: string}

function Accordion(props: { title: string; collapsed: boolean }) {
    return props.collapsed === true ?
        <div>
            <AccordionTitle titleValue={props.title}/>
        </div>
        :
        <div>
            <AccordionTitle titleValue={props.title}/>
            <AccordionBody/>
        </div>
}

// type AccordionTitlePropsType = {titleValue: string}

function AccordionTitle(props: { titleValue: string }) {
    return (
        <div>
            <h3>{props.titleValue}</h3>
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