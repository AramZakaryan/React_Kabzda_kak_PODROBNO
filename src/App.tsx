import "./App.css"
import {MyClock} from "./components/MyClock/MyClock";


function App() {
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
            <MyClock/>
        </div>
    );
}


export default App;
