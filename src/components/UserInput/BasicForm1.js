import useInput from './use-input'

const isNotEmpty = value => value.trim() !== ''
const isEmail = value => value.includes('@')

const BasicForm1 = (props) => {


    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reseti: resetFirstName
    } = useInput(isNotEmpty)

    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reseti: resetLastName
    } = useInput(isNotEmpty)

    const {
        value: emailValue,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reseti: resetEmail
    } = useInput(isEmail)


    return (
        <form onSubmit={handleSubmit}>
            <div className='control-group'>
                <div className='form-control'>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name' />
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' />
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' />
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm1;