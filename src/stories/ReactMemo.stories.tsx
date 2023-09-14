import React, {useState} from "react";
import {string} from "prop-types";

export default {
    title: "React.memo demo",
}

const CompX = (props: any) => {
    return <div>
        {props.count}
    </div>
}

const Counter = (props: { count: number }) => {
    return <>
        {props.count}
    </>
}

const Users = (props: { users: string[] }) => {
    console.log("users")
    return <div>
        {props.users.map((u, ind) => <div key={ind}>{u}</div>)}
    </div>

}

const MemoUsers = React.memo(Users)
export const UnitedComponent = () => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState(["Gago", "Valod", "Seroj"])
    return <div>
        <button onClick={()=>setCount(count+1)}>add</button>
        <Counter count={count}/>
        <MemoUsers users={users}/>
    </div>
}
