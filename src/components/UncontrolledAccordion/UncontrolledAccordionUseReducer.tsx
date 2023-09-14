import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";

type UncontrolledAccordionPropsType = {
    title: string
}

export const UncontrolledAccordionUseReducer: React.FC<UncontrolledAccordionPropsType> = (props) => {


    const [state,
        dispatch] =
        useReducer(reducer,
            {
                collapsed: false
            })

    const onClickHandler = () =>{
        dispatch({type:"toggle"})
    }

    return (
        <div>
            <UncontrolledAccordionTitle
                titleValue={props.title}
                onClickCallback={onClickHandler}
            />
            {!state.collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    titleValue: string
    onClickCallback: () => void
}

const UncontrolledAccordionTitle: React.FC<UncontrolledAccordionTitlePropsType> = (props) => {

    return (
        <div>
            <h3 onClick={props.onClickCallback}>{props.titleValue}</h3>
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