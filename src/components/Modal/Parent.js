import React, { useState } from 'react'
import Child from './Child'

export const NameContext = React.createContext()
export const AgeContext = React.createContext()

const Parent = () => {

    const [age, setAge] = useState(37)

    return (
        <NameContext.Provider value='khairi'>
            <AgeContext.Provider value={age}>
                <Child />
            </AgeContext.Provider>
        </NameContext.Provider>
    )
}

export default Parent