import React, { useReducer } from 'react'
import classes from './CounterPracticeTwo.module.css'

const initialState = {
    counter1: 0,
    counter2: 5,
    counter3: -5
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return { ...state, counter1: state.counter1 + action.value }
        case 'decrement1':
            return { ...state, counter1: state.counter1 - action.value }
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value }
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value }
        case 'increment3':
            return { ...state, counter3: state.counter3 + action.value }
        case 'decrement3':
            return { ...state, counter3: state.counter3 - action.value }
        case 'reset':
            return initialState;
        default:
            return state;
    }

}

const CounterPracticeTwo = () => {

    const [counter, dispatch] = useReducer(reducer, initialState)

    return (
        <div className={classes.counterApp}>
            <h1>Multiple Counter</h1>
            <div className={classes.counter}>
                <h2>{counter.counter1}</h2>
                <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>-</button>
                <button className={classes.reset} onClick={() => dispatch({ type: 'reset' })}>reset</button>
            </div>
            <div className={classes.counter}>
                <h2>{counter.counter2}</h2>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>-</button>
                <button className={classes.reset} onClick={() => dispatch({ type: 'reset' })}>reset</button>
            </div>
            <div className={classes.counter}>
                <h2>{counter.counter3}</h2>
                <button onClick={() => dispatch({ type: 'increment3', value: 1 })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement3', value: 1 })}>-</button>
                <button className={classes.reset} onClick={() => dispatch({ type: 'reset' })}>reset</button>
            </div>

        </div>
    )
}

export default CounterPracticeTwo