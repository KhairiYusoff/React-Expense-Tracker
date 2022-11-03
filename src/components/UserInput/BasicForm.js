import { useState } from "react";

const BasicForm = (props) => {

    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: ''
    })


    const handleChange = (e) => {
        setInput(prevValue => {
            return { ...prevValue, [e.target.name]: e.target.value }
        })
    }



    const handleSubmit = event => {
        event.preventDefault()
        console.log(input)
        setInput({
            fname: '',
            lname: '',
            email: ''
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='control-group'>
                <div className='form-control'>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name' name="fname" onChange={handleChange} value={input.fname} />
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' name="lname" onChange={handleChange} value={input.lname} />
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' name="email" onChange={handleChange} value={input.email} />
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;


//useReducer(reducer, initialState)
//newState = reducer(currentState, action)