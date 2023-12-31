import React, {useState} from "react";

type OnOffPropsType = {
    on: boolean
    onClickCallBack: (value: boolean) => void
}


export const OnOff: React.FC<OnOffPropsType> = (props) => {

    let onStyle = {
        height: "20px",
        width: "30px",
        display: "inline-block",
        padding: "2px",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "white"

    }
    let offStyle = {
        height: "20px",
        width: "30px",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        border: "1px solid black",
        backgroundColor: props.on ? "white" : "red"
    }
    let indicatorStyle = {
        height: "10px",
        width: "10px",
        display: "inline-block",
        marginLeft: "5px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "red"
    }

    const onClickOnHandler = () => {
        props.onClickCallBack(true)
    }

    const onClickOffHandler = () => {
        props.onClickCallBack(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClickOnHandler}>On
            </div>
            <div style={offStyle} onClick={onClickOffHandler}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}