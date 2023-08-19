import type { Meta, StoryObj } from '@storybook/react';
import {OnOff} from "./OnOff";
import {useState} from "react";


export default {
    title: "OnOff",
    component: OnOff
}


export const OnMode = () => <OnOff on={true} onClickCallBack={x=>x}/>
export const OffMode = () => <OnOff on={false} onClickCallBack={x=>x}/>
export const ModeChanging = () => {
    const [on, setOn] = useState(false)
     return <OnOff on={on} onClickCallBack={setOn}/>
}

