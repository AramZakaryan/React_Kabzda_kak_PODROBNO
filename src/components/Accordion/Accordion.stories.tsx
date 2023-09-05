import Accordion, {AccordionPropsType} from "./Accordion";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "Accordion",
    component: Accordion
}


export const AccordionCollapsed = () => <Accordion title={"Simple Title of Accordion"}
                                                   collapsed={true}
                                                   onClickCallback={() => {
                                                   }}
                                                   items={[]}
                                                   onClick={() => {
                                                   }}/>


export const AccordionUncollapsed = () => <Accordion title={"Simple Title of Accordion"}
                                                     collapsed={false}
                                                     onClickCallback={() => {
                                                     }}
                                                     items={[]}
                                                     onClick={() => {
                                                     }}/>


export const AccordionChange = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion title={"Simple Title of Accordion"}
                      collapsed={collapsed}
                      onClickCallback={() => setCollapsed(!collapsed)}
                      items={[{title: "Director", value: 1},
                          {title: "Accountant", value: 2},
                          {title: "Driver", value: 3}
                      ]}
                      onClick={action("uraaa")}
    />
}
