import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export const Parent = () => {
    const [username, setUsername] = useState('khairi')

    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <div>
                {username}
                <Child />
                <GrandCHild />
            </div>
        </AppContext.Provider>
    )
}

export const Child = () => {
    const { username } = useContext(AppContext)
    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export const GrandCHild = () => {
    const { setUsername } = useContext(AppContext)
    return (
        <div>
            <button onClick={() => setUsername('yusoff')}>Change username</button>
        </div>
    )
}

const Context = () => {
    return (
        <div>ContextAPI</div>
    )
}

export default Context