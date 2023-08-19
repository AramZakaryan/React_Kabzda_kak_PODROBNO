import Rating, {RatingValueType} from "./Rating";
import {useState} from "react";

export default {
    title: "Rating",
    component: Rating
}
export const Rating0 = () => <Rating value={0} onClickCallback={x=>x}/>
export const Rating1 = () => <Rating value={1} onClickCallback={x=>x}/>
export const Rating2 = () => <Rating value={2} onClickCallback={x=>x}/>
export const Rating3 = () => <Rating value={3} onClickCallback={x=>x}/>
export const Rating4 = () => <Rating value={4} onClickCallback={x=>x}/>
export const Rating5 = () => <Rating value={5} onClickCallback={x=>x}/>
export const RatingChanging = () => {
    const [ratingValue, setRatingValue]= useState<RatingValueType>(3)
    return <Rating value={ratingValue} onClickCallback={setRatingValue}/>
}


