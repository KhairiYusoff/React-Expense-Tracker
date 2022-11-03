import React from 'react'
import { CounterContext } from './ReducerContext'
import { useContext } from 'react'

const ComponentD = () => {
    const counterContext = useContext(CounterContext)
    return (
        <div>
            <h1>ComponentD: {counterContext.counter}</h1>
            <button onClick={() => counterContext.dispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.dispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.dispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentD