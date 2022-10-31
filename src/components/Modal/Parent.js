import React, { useState } from 'react'
import Child from './Child'
import Granchild from './Granchild'

export const NameContext = React.createContext()
export const AgeContext = React.createContext()

const Parent = () => {

    const [age, setAge] = useState(37)
    const [isPara, setIsPara] = useState(false)

    console.log("app running")

    const handleClick = () => {
        setIsPara(!isPara)
    }

    return (
        <>
            <NameContext.Provider value='khairi'>
                <AgeContext.Provider value={age}>
                    <Child />
                </AgeContext.Provider>
            </NameContext.Provider>
            <h1>React</h1>
            {isPara && <p>Hi There</p>}
            <button onClick={handleClick}>Click Me</button>
        </>

    )
}

export default Parent