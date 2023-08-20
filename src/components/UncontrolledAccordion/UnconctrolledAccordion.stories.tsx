import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {useState} from "react";


export default {
    title: "UncontrolledComponents/UncontrolledAccordion",
    component: UncontrolledAccordion
}

export const AccordionChange = () => <UncontrolledAccordion title={"This is Uncontrolled Accordion"}/>