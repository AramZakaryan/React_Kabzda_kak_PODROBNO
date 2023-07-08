import React from 'react';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import "./App.css"


function App() {
    return (
        <div className={"App"}>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <UncontrolledRating/>
            {/*<Accordion title={"Users (This is Accordion Title)"} collapsed={false}/>*/}
            <UncontrolledAccordion title={"Menu (This is UncontrolledAccordion Title)"}/>
            <UncontrolledAccordion title={"Users (This is UncontrolledAccordion Title)"}/>
            <OnOff />
            <OnOff />

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
