import React, { useState } from 'react'
import Modalchild from './Modalchild'
import styles from './Modal.module.css'

const Modal = () => {

    const [isToggle, setIsToggle] = useState(false)

    const handleClose = () => {
        setIsToggle(!isToggle)
    }

    return (
        <div>
            {isToggle ? <Modalchild onClose={handleClose} /> :
                (<button className={styles.modalStyle} onClick={() => setIsToggle(!isToggle)}>Show Modal</button>)}
        </div>
    )
}

export default Modal