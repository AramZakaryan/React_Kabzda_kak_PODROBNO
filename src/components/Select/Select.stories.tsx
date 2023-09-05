import React from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: "select",
    component: Select
}

export const SelectChange = () => <Select value={""}
                                          onChange={action("kuku")}
                                          items={[{title: "Director", value: 1},
                                              {title: "Accountant", value: 2},
                                              {title: "Driver", value: 3}
                                          ]}/>