import React, {useEffect, useState} from "react";
import {clear} from "@testing-library/user-event/dist/clear";

export const ClearUseEffect = () => {

    console.log("component render")

    useEffect(() => {
            const timeOutNum = setTimeout(() => {
                    console.log("3 seconds past")
                }
                , 3000)
            return () => clearTimeout(timeOutNum)
        }
    )

    return <>
        component body
    </>
}