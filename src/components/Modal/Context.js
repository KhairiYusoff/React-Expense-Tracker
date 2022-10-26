import React, { createContext, useState } from 'react'

const AppContext = createContext(null)

export const Parent = () => {
    const [username, setUsername] = useState('khairi')

    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <div>
                <Child />
            </div>
        </AppContext.Provider>
    )
}

export const Child = () => {

    return (
        <div>
            <GrandCHild />
        </div>
    )
}

export const GrandCHild = () => {

}

const Context = () => {
    return (
        <div>Context</div>
    )
}

export default Context