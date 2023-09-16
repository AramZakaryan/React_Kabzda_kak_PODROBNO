import React, {useMemo, useState} from "react";


export const UseMemoExperiements1 = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)


    const factorial = (num: number): number => {

        if (num < 0 || num % 1 || num > 100) {
            throw new Error("Wrong number, the number should be an integer and should be between 1 and 100")
        }
        if (num === 0) {
            return 1
        }

        // to make more difficult the implementation of the Code
        let k = 0
        for (let i = 0; i < 10000000; i++) {
            k = k + Math.random()
        }

        return num > 1 ? num * factorial(num - 1) : num

    }



    const resultA = useMemo(() => factorial(a), [a])
    const resultB = useMemo(() => factorial(b), [b])


    return <>
        <input type={"text"} value={a} onChange={ev => setA(+ev.currentTarget.value)}/>
        result: {resultA}
        <br/>
        <input type={"text"} value={b} onChange={ev => setB(Number(ev.currentTarget.value))}/>
        result: {resultB}

    </>
}