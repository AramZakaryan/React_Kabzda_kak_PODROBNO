import {actionType, reducer, stateType} from "./reducer";

test("Collapsed should be true", () => {

    // data
    let state: stateType = {collapsed: false}
    let action: actionType = {type: "toggle"}

    // action
    let newState= reducer(state, action)

    // expectation
    expect(newState.collapsed)
        .toBe(true)
})

test("Collapsed should be false", () => {

    // data


    let state: stateType = {collapsed: true}
    let action: actionType = {type: "toggle"}

    // action
    let newState= reducer(state, action)

    // expectation
    expect(newState.collapsed)
        .toBe(false)
})