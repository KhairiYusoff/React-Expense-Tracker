import React, { useState } from 'react'
import styles from './Modalchild.module.css'

const Modalchild = (props) => {

    const [isValid, setIsValid] = useState(true)

    return (
        <div className={styles.myDiv} >
            <button className={styles.myButton} onClick={props.onClose}>CLOSE</button>
            <h1 className={styles.myHeading}>MODAL</h1>
            <label className={`${styles['my-label']} ${!isValid && styles.invalid}`} htmlFor="">Your Name:</label>
            <input className={styles.myInput} type="text" placeholder='fullname' />
        </div>
    )
}

export default Modalchild