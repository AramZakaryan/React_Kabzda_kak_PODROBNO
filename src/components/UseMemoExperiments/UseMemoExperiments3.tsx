import React, {useCallback, useMemo, useState} from "react";

const Counter = (props: { count: number }) => {
    // console.log("render of Counter")
    return <>
        {props.count}
    </>
}

const Books:React.FC<{ addBook: () => void }> = (props) => {
    console.log("render of Books")

    return <div>
        <button onClick={props.addBook}>add Book</button>
    </div>
}

const MemoBooks = React.memo(Books)
export const UseMemoExperiements3: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    const [books, setBooks] = useState(["React", "JS", "HTML", "CSS"])



    const addBook = useCallback(
        () => {

            setBooks([...books, `Book${~~(Math.random() * 10)}`])
            console.log(books)
        },
        [books]
    )

    return <div>
        <button onClick={() => setCount(count + 1)}>add</button>
        <br/>
        <Counter count={count}/>
        <br/>
        <br/>
        <MemoBooks addBook={addBook}/>
    </div>
}


