import React from "react";


type OnOffPropsType = {
    on: boolean;
}

export const OnOff = (props: OnOffPropsType) => {
    let onBGC = props.on ? {backgroundColor: "green"} : {backgroundColor: ""}
    let offBGC = !props.on ? {backgroundColor: "red"} : {backgroundColor: ""}
    let radAC = props.on ? {accentColor: "green"} : {accentColor: "red"}

    return (
        <div>
            <button style={onBGC}>On</button>
            <button style={offBGC}>Off</button>
            <input type="radio" checked={true} style={radAC}></input>
        </div>
    )
}