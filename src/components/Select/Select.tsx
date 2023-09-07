import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
// import "./Select.css";

type SelectItemtype = {
    id: string
    title: string
}


type SelectPropsType = {
    selectedItemId: string
    onChange: (value: any) => void
    items: SelectItemtype[]
}

export const Select: React.FC<SelectPropsType> = (props) => {

    const [collapsed,
        setCollapsed] =
        useState<boolean>(true)

    let selectedItem = props.items.find(it =>
        it.id === props.selectedItemId
    )

    const toggleHandler = () => setCollapsed(!collapsed)

    const selectHandler = (id:string) => {
        props.onChange(id)
        setCollapsed(!collapsed)
    }


    return (<>
        <h3  onClick={toggleHandler}
            style={{width:"100px", height:"1.2em",border: "1px solid black"}}
        >
            {selectedItem?.title}
        </h3>
        {
            !collapsed &&
            props.items.map(it => {

                    return <div key={it.id}
                                className={selectedItem?.id===it.id? "selected item":"item"}
                                onClick={()=>selectHandler(it.id)}
                    >
                        {it.title}

                    </div>
                }
            )
        }

    </>)
}