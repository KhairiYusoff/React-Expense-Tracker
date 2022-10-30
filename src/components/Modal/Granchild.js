import React, { useContext } from 'react'
import { NameContext, AgeContext } from './Parent'

const Granchild = () => {
    const myName = useContext(NameContext)
    const myAge = useContext(AgeContext)

    return (
        <div>{myName} age is {myAge}</div>
    )
}

export default Granchild