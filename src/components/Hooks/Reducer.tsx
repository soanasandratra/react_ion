import React, { FunctionComponent, useReducer } from 'react'

type Parameter = {
    type: string
    act: number
}

const initialState: number = 0
const reducer = (state: number, action: Parameter = { type: "", act: 1 }) => {
    switch (action.type) {
        case "decrement":
            return state - action.act
        case "increment":
            return state + action.act
        default:
            return initialState
    }

}
const Reducer: FunctionComponent = () => {



    const [count, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <h1>{count}</h1>
            {/* <button className='btn btn-primary m-3' onClick={() => dispatch({ type: 'increment', act: 3 })}>+</button>
            <button className='btn btn-danger m-3' onClick={() => dispatch({ type: 'decrement', act: 3 })}>-</button> */}
            <button className='btn btn-success m-3' onClick={() => dispatch()}>X</button>
        </div>
    )
}

export default Reducer