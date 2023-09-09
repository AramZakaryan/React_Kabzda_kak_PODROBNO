import React, {useState} from 'react';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import "./App.css"
import {OnOff} from "./components/OnOff/OnOff";
import {UseReducerExperiements} from "./components/UseReducerExperiments/UseReducerExperiments";


function App() {

    const [ratingValue, setRatingValue]= useState<RatingValueType>(0)
    const [collapsed, setCollapsed]= useState<boolean>(false)
    const [on, setOn] = useState(false)

    return (
        <div className={"App"}>
            {/*<Rating value={ratingValue} onClickCallback={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Accordion title={"Users (This is Accordion Title)"} collapsed={collapsed} onClickCallback={()=>setCollapsed(!collapsed)}/>*/}
            {/*<UncontrolledAccordion title={"Menu (This is UncontrolledAccordion Title)"}/>*/}
            {/*<OnOff on={on} onClickCallBack={setOn}/>*/}
            {/*<UncontrolledOnOff />*/}

            <UseReducerExperiements/>

        </div>
    );
}

function PageTitle(props: { title: string }) {
    return (
        <div>
            {props.title}
        </div>
    );
}


export default App;
