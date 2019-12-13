import React from 'react'
import FormInput from '../form-input/FormInput.component'
const Form = (props) => {
    return ( 
        <form onSubmit={props.onSubmit} >
            <FormInput label='First Name' type='text' name='firstName' onChange={props.handleChange} />
            <FormInput label='Last Name' type='text' name='lastName' onChange={props.handleChange} />
            <FormInput label='Mobile Number' type='text' name='mobileNumber' onChange={props.handleChange} />
            <FormInput label='Phone Number' type='text' name='phoneNumber' onChange={props.handleChange} />
            <FormInput label='Address' type='text' name='address' onChange={props.handleChange} />
            <FormInput label='Gender' type='radio' name='gender' value='male' onChange={props.handleChange} >
                Male
            </FormInput>
            <FormInput type='radio' name='gender' value='female' onChange={props.handleChange} >
                Female
            </FormInput>
            <button type='submit' >Submit</button>

        </form>
     );
}
 
export default Form;