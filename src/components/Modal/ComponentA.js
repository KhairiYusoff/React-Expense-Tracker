import React from 'react'
import ComponentC from './ComponentC'
import ComponentE from './ComponentE'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const MyContext = React.createContext()

const ComponentA = () => {
    return (
        <div>
            <UserContext.Provider value={'khairi'}>
                <ChannelContext.Provider value={'programmer'}>
                    <MyContext.Provider value={150}>
                        <ComponentE />
                    </MyContext.Provider>
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA