import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClickCallback: (ratingValue: RatingValueType) => void
}


export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClickCallback={()=>props.onClickCallback(1)}/>
            <Star selected={props.value > 1} onClickCallback={()=>props.onClickCallback(2)}/>
            <Star selected={props.value > 2} onClickCallback={()=>props.onClickCallback(3)}/>
            <Star selected={props.value > 3} onClickCallback={()=>props.onClickCallback(4)}/>
            <Star selected={props.value > 4} onClickCallback={()=>props.onClickCallback(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClickCallback: () => void

}

function Star(props:StarPropsType) {
    return <span onClick={props.onClickCallback} >{props.selected ? <b>star </b> : <>star </>}</span>
}

export default Rating;
