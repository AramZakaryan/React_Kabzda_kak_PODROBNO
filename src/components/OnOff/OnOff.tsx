import React from "react";


type OnOffPropsType = {
    on: boolean;
}

export const OnOff = (props: OnOffPropsType) => {
    let onStyle = {
        height: "20px",
        width: "30px",
        display: "inline-block",
        // margin: "5px",
        padding: "2px",
        border: "1px solid black",
        backgroundColor: "green"

    }
    let offStyle = {
        height: "20px",
        width: "30px",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        border: "1px solid black",
        backgroundColor: "red",
    }
    let indicatorStyle =  {
        height: "10px",
        width: "10px",
        display: "inline-block",
        marginLeft: "5px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: "red",
    }

    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}