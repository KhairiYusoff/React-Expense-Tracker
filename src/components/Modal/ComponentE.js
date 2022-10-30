import React, { useContext } from 'react'
import { UserContext, ChannelContext, MyContext } from './ComponentA'
import ComponentF from './ComponentF'

const ComponentE = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    const myContext = useContext(MyContext)
    return (
        <div>
            {user}-{channel}, his IQ is {myContext}
            <ComponentF />
        </div>
    )
}

export default ComponentE