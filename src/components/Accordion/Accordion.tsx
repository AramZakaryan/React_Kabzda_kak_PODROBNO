import React from "react";
import {action} from "@storybook/addon-actions";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    /**
     * collapsed is true that means that items are off
     */
    collapsed: boolean
    onClickCallback: () => void
    /**
     * Optional color of the title (default is red)
     */
    color?: string
    items: ItemType[]
    onClick: (value:any)=>void
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle titleValue={props.title}
                        onClickCallback={props.onClickCallback}
                        color={props.color ? props.color : "red"}/>
        {!props.collapsed &&
            <AccordionBody
            items={props.items}
            onClick={props.onClick}
            />
        }
    </div>
}

type AccordionTitlePropsType = {
    titleValue: string
    onClickCallback: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onClickCallback} style={{color: `${props.color}`}}>{props.titleValue}</h3>
        </div>
    );
}


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:any)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((it, ind) => <li key={ind}
                                              onClick={()=>props.onClick(it.value)}>
                {it.title}
            </li>)}
        </ul>
    );
}


export default Accordion;