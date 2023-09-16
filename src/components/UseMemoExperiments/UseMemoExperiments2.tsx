import React, {useMemo, useState} from "react";

const Counter = (props: { count: number }) => {
    // console.log("render of Counter")
    return <>
        {props.count}
    </>
}

const Users = (props: { users: string[] }) => {
    console.log("render of Users")
    return <div>
        {props.users.map((u, ind) => <div key={ind}>{u}</div>)}
    </div>
}

const MemoUsers = React.memo(Users)
export const UseMemoExperiements2 = () => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState(["Gago", "Vlo", "Baghdasar", "Seroj", "Poghosik"])
    return <div>
        <button onClick={() => setCount(count + 1)}>add</button>
        <br/>
        <Counter count={count}/>
        <br/>
        <br/>
        <button onClick={() => setUsers([...users, `NuUs${~~(Math.random() * 10)}`])}>add User</button>
        <MemoUsers users={useMemo(
            () => users.filter(el => el.length < 6)
            , [users]
        )
        }/>
    </div>
}

