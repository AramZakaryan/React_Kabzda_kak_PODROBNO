import React from "react";

export function Rating(props: { value: 0 | 1 | 2 | 3 | 4 | 5 }) {
        return (
            <div>
                <Star selected={props.value>0}/>
                <Star selected={props.value>1}/>
                <Star selected={props.value>2}/>
                <Star selected={props.value>3}/>
                <Star selected={props.value>4}/>
            </div>
        )
}

function Star(props: {selected:boolean}) {

    return props.selected ? <span><b>star </b></span> : <span>star </span>;

    // if (props.selected === true) {
    //     return (<span><b>star </b></span>)
    // } else {
    //     return (<span>star </span>)
    // }

}

export default Rating;
