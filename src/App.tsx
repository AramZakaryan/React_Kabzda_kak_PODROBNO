import React from 'react';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";


function App() {
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={"This is Accordion Title"} collapsed={true}/>
            <Accordion title={"This is Accordion Title"} collapsed={false}/>
        </div>
    );
}

function PageTitle(props: { title:string }) {
    return (
        <div>
            {props.title}
        </div>
    );
}

export default App;
