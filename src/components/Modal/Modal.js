import React, { useState } from 'react'
import Modalchild from './Modalchild'

const Modal = () => {

    const [isToggle, setIsToggle] = useState(false)

    const handleClose = () => {
        setIsToggle(false)
    }

    return (
        <div>
            {isToggle ? <Modalchild onClose={handleClose} /> : (<button onClick={() => setIsToggle(true)}>Show Modal</button>)}
        </div>
    )
}

export default Modal