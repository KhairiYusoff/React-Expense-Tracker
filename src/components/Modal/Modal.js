import React, { useState } from 'react'
import Modalchild from './Modalchild'

const Modal = () => {

    const [isToggle, setIsToggle] = useState(false)

    const handleClose = () => {
        setIsToggle(!isToggle)
    }

    return (
        <div>
            {isToggle ? <Modalchild onClose={handleClose} /> :
                (<button
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "50px",
                        margin: "0 auto",
                        maxWidth: "500px",
                        marginTop: "200px",
                        border: "1px solid black",
                        background: "gray",
                        fontSize: "40px",
                        cursor: "pointer"
                    }}
                    onClick={() => setIsToggle(!isToggle)}>Show Modal</button>)}
        </div>
    )
}

export default Modal