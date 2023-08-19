import type { Meta, StoryObj } from '@storybook/react';
import Accordion from "./Accordion";
import {useState} from "react";


export default {
    title: "Accordion",
    component: Accordion
}


export const AccordionCollapsed = () => <Accordion title={"Simple Title of Accordion"}
                                                   collapsed={true}
                                                   onClickCallback={()=>{}}/>

export const AccordionUncollapsed = () => <Accordion title={"Simple Title of Accordion"}
                                                   collapsed={false}
                                                   onClickCallback={()=>{}}/>



export const AccordionChange = () => {
    const [collapsed, setCollapsed]= useState<boolean>(false)
    return <Accordion title={"Simple Title of Accordion"}
               collapsed={collapsed}
               onClickCallback={()=>setCollapsed(!collapsed)}/>
}
