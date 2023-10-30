import React, {useState} from 'react';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import "./App.css"
import {OnOff} from "./components/OnOff/OnOff";
import {UseReducerExperiements} from "./components/UseReducerExperiments/UseReducerExperiments";
import {UncontrolledAccordionUseReducer} from "./components/UncontrolledAccordion/UncontrolledAccordionUseReducer";
import {UseMemoExperiements1} from "./components/UseMemoExperiments/UseMemoExperiments1";
import {UseMemoExperiements2} from "./components/UseMemoExperiments/UseMemoExperiments2";
import {UseMemoExperiements3} from "./components/UseMemoExperiments/UseMemoExperiments3";
import { UseStateExperiements} from "./components/UseStateExperiments/UseStateExperiments";
import { UseEffectExperiements} from "./components/UseEffectExperiments/UseEffectExperiments";
import {SetTimeoutExperiements} from "./components/UseSetTimeourExperiments/UseSetTimeoutExperiments";
import {Clock} from "./components/Clock/Clock";


function App() {
    //
    // const [ratingValue, setRatingValue]= useState<RatingValueType>(0)
    // const [collapsed, setCollapsed]= useState<boolean>(false)
    // const [on, setOn] = useState(false)

    return (
        <div className={"App"}>
            {/*<Rating value={ratingValue} onClickCallback={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Accordion title={"Users (This is Accordion Title)"} collapsed={collapsed} onClickCallback={()=>setCollapsed(!collapsed)}/>*/}
            {/*<UncontrolledAccordion title={"Menu (This is UncontrolledAccordion Title)"}/>*/}
            {/*<OnOff on={on} onClickCallBack={setOn}/>*/}
            {/*<UncontrolledOnOff />*/}
            {/*<UseReducerExperiements/>*/}
            {/*<UncontrolledAccordionUseReducer title={"UncontrAccUseReducer"}/>*/}

            {/*<UseMemoExperiements1/>*/}
            {/*<UseMemoExperiements3/>*/}

            {/*<UseStateExperiements/>*/}
            {/*<UseEffectExperiements/>*/}
            <Clock/>
            {/*<SetTimeoutExperiements/>*/}

        </div>
    );
}

// function PageTitle(props: { title: string }) {
//     return (
//         <div>
//             {props.title}
//         </div>
//     );
// }


export default App;
