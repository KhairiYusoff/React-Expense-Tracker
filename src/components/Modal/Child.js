import React from 'react'
import { useContext } from 'react'
import Granchild from './Granchild'
import { NameContext } from './Parent'

const Child = () => {

    const MyContext = useContext(NameContext)

    return (
        <>
            <div>My name is {MyContext}</div>
            <Granchild />
        </>

    )
}

export default Child