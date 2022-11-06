import React, { useState } from 'react'

const BasicForm4 = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if (fname.length === 0 || lname.length === 0) {
            setError(true)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='firstname' onChange={e => setFname(e.target.value)} /> <br />
                {error ? <label>Firstname cannot be empty</label> : ''} <br />
                <input type="text" placeholder='lastname' onChange={e => setLname(e.target.value)} /> <br />
                {error ? <label>Lastname cannot be empty</label> : ''} <br />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default BasicForm4