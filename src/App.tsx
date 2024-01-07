import "./App.css"
import {MyClock} from "./components/MyClock/MyClock";
import {ClearUseEffect} from "./components/ClearUseEffect/ClearUseEffect";
import {useState} from "react";


function App() {
    const [showClearUseEffect, setShowClearUseEffect] = useState(true)
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
            {/*<SetTimeoutExperiements/>*/}
            {/*<MyClock/>*/}
            <button onClick={()=>setShowClearUseEffect(prev=>!prev)}>show/hide ClearUseEffect</button>
            <br/>
            <br/>
            <br/>
            {showClearUseEffect&&<ClearUseEffect/>}
        </div>
    );
}


export default App;
