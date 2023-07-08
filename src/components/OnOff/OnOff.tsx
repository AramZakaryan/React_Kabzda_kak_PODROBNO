import React, {useState} from "react";




export const OnOff = () => {

    let [on, onSet] = useState(false)
    console.log("on: "+on)
    let onStyle = {
        height: "20px",
        width: "30px",
        display: "inline-block",
        padding: "2px",
        border: "1px solid black",
        backgroundColor: on ? "green" : "white"

    }
    let offStyle = {
        height: "20px",
        width: "30px",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        border: "1px solid black",
        backgroundColor: on ? "white" : "red"
    }
    let indicatorStyle = {
        height: "10px",
        width: "10px",
        display: "inline-block",
        marginLeft: "5px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: on ? "green" : "red"
    }
    return (
        <div>
            <div style={onStyle} onClick={() => {
                onSet(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                onSet(false)
            }}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}