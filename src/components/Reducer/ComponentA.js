import React, { useContext } from 'react'
import { CounterContext } from './ReducerContext'

const ComponentA = () => {
    const counterContext = useContext(CounterContext)

    return (
        <div>
            <h1>ComponentA: {counterContext.counter}</h1>
            <button onClick={() => counterContext.dispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.dispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.dispatch('reset')}>reset</button>
        </div>
    )
}

export default ComponentA