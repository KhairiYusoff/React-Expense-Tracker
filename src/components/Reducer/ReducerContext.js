import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import classes from './CounterPracticeTwo.module.css'

export const CounterContext = React.createContext()

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const ReducerContext = () => {
    const [counter, dispatch] = useReducer(reducer, initialState)
    return (
        <CounterContext.Provider value={{ counter: counter, dispatch: dispatch }}>
            <div className={classes.counterApp}>
                <h1 style={{ fontSize: "70px" }}>Global Counter: {counter}</h1>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CounterContext.Provider>
    )
}

export default ReducerContext