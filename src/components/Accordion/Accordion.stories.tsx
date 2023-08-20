import type {Meta, Story, StoryFn, StoryObj} from '@storybook/react';
import Accordion, {AccordionPropsType} from "./Accordion";
import {useState} from "react";
import {string} from "prop-types";

const OtherGroup = {
    table: {category: "OtherGroup"}
}

const GetCategoryObj = (categoryName:"ColorGroup"|"TitleGroup"|"OtherGroup") => ({
        table: {category: categoryName}
    }
)

export default {
    title: "Accordion",
    component: Accordion,
    argTypes: {
        color: {
            control: "color",
            table: {category: "ColorGroup"}
        },
        title: {
            table: {category: "TitleGroup"}
        },
        collapsed: OtherGroup,
        onClickCallback: GetCategoryObj("OtherGroup")
    }
}

const Template: StoryFn<AccordionPropsType> = (args) => <Accordion {...args}/>

// New Code
export const AccordionCollapsedNew = Template.bind({})
AccordionCollapsedNew.args = {
    title: "Simple Title of Accordion New",
    collapsed: true,
    onClickCallback: () => {
    }
}
// Old Code
// export const AccordionCollapsed = () => <Accordion title={"Simple Title of Accordion"}
//                                                    collapsed={true}
//                                                    onClickCallback={()=>{}}/>


// New Code
export const AccordionUncollapsedNew = Template.bind({})
AccordionUncollapsedNew.args = {
    title: "Simple Title of Accordion New",
    collapsed: false,
    onClickCallback: () => {
    }
}

// Old Code
// export const AccordionUncollapsed = () => <Accordion title={"Simple Title of Accordion"}
//                                                    collapsed={false}
//                                                    onClickCallback={()=>{}}/>


export const AccordionChange: StoryFn<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={args.title}
                      collapsed={collapsed}
                      onClickCallback={() => setCollapsed(!collapsed)}
                      color={args.color}
    />
}


AccordionChange.args = {
    title: "Simple Title of Accordion New",
    collapsed: true,
    onClickCallback: () => {
    },
    color: "lightblue"
}