import React, { useState } from 'react'

const BasicForm3 = () => {

    const [user, setUser] = useState('')
    console.log(user)
    const [errUsername, setErrUsername] = useState(false)
    const [errPwd, setErrPwd] = useState(false)

    const handleUsername = e => {
        if (e.target.value.length < 5) {
            setErrUsername(true)
        } else {
            setErrUsername(false)
        }
        setUser(e.target.value)
    }

    const handlePassword = e => {
        if (e.target.value.length < 5) {
            setErrPwd(true)
        } else {
            setErrPwd(false)
        }
        setUser(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()
        if (user.length < 5) {
            alert('AT LEAST 5 CHARACTERS NEEDED')
        } else {
            alert('USERNAME AND PASSWORD CORRECT')
        }

    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={handleUsername} placeholder="username" /> <br />
                {errUsername && <span>Username must contain at least 5 characters!</span>} <br />
                <input type="password" onChange={handlePassword} placeholder="password" /> <br />
                {errPwd && <span>Password must contain at least 7 characters!</span>}  <br />
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default BasicForm3