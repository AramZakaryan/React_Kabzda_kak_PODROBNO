import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {useState} from "react";


export default {
    title: "UncontrolledOnOff",
    component: UncontrolledOnOff
}


export const ChangeMode = () => <UncontrolledOnOff/>