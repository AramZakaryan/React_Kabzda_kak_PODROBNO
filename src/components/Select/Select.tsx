import React, {useState} from "react";


type SelectItemtype = {
    title: string
    value: any
}


type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: SelectItemtype[]
}

export const Select: React.FC<SelectPropsType> = (props) => {

    const [valueFromParen,
        setValueFromParent]
        = useState<string | undefined>(undefined)

    return (<>

        <div>{}</div>
        {props.items.map(it => <div key={it.value}
                                    onClick={()=>props.onChange(it.value)}
        >
            {it.title}
        </div>)
        }

    </>)
}