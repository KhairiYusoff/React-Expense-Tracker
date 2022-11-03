import React, { useState } from 'react'

const BasicForm2 = () => {

    const [values, setValues] = useState({
        fName: '',
        lName: '',
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setValues(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({
            fName: '',
            lName: '',
            email: '',
            password: ''
        })
    }

    console.log(values)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">First Name:</label>
                <input type="text" name='fName' onChange={changeHandler} value={values.fName} />
                <label htmlFor="">Last Name:</label>
                <input type="text" name='lName' onChange={changeHandler} value={values.lName} />
                <label htmlFor="">Email:</label>
                <input type="text" name='email' onChange={changeHandler} value={values.email} />
                <label htmlFor="">Password:</label>
                <input type="text" name='password' onChange={changeHandler} value={values.password} />
                <button>Submit Form</button>
            </form>
        </div>
    )
}

export default BasicForm2