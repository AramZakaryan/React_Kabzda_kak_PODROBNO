export type stateType = {
    collapsed: boolean
}

export type actionType = {
    type: "toggle" | "doNothing"
}

export const reducer = (state: stateType, action: actionType): stateType => {
    switch (action.type) {
        case "toggle":
            return {...state, collapsed: !state.collapsed}
            break
        default:
            return state
    }
}