import { useState } from "react";

const BasicForm = (props) => {

    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: ''
    })
    console.log(input)

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
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
                    <input type='text' id='name' name="First Name" onChange={handleChange} value={input.fname} />
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' name="Last Name" onChange={handleChange} value={input.lname} />
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' name="Email" onChange={handleChange} value={input.email} />
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
