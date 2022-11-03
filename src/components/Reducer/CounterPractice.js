import React, { useReducer } from 'react'

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

const CounterPractice = () => {

    const [counter, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Simple Counter</h1>
            <h1>{counter} </h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterPractice