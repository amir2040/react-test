import React from 'react'
import FormInput from '../form-input/FormInput.component'
import './Form.styles.css'
{/* <form onSubmit={props.onSubmit} >
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
            <button type='submit' >Next Stage</button>

        </form> */}
const Form = (props) => {


    return ( 
        <div className="container  h-100  ">
        <form  className="mt-5 " >
  <div className="form-group row  h-100 justify-content-center align-items-center ">
    <label htmlFor="firstName" className="col-sm-2 col-form-label ">First Name</label>
    <div class="col-sm-10   ">
      <input type="text" className="form-control w-50 " id="firstName" name="firstName" onChange={props.handleChange} />
    </div>
  </div>
  <div className="form-group row align-items-center ">
    <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
    <div class="col-sm-10">
      <input type="text" className="form-control w-50" id="lastName" name="lastName" onChange={props.handleChange} />
    </div>
  </div>
  <div className="form-group row align-items-center ">
    <label htmlFor="mobileNumber" className="col-sm-2 col-form-label">Mobile Number</label>
    <div class="col-sm-10">
      <input type="text" className="form-control w-50" id="mobileNumber" name="mobileNumber" onChange={props.handleChange} />
    </div>
  </div>
  <div className="form-group row align-items-center ">
    <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
    <div class="col-sm-10">
      <input type="text" className="form-control w-50" id="phoneNumber" name="phoneNumber" onChange={props.handleChange} />
    </div>
  </div>
  <div className="form-group row align-items-center ">
    <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
    <div class="col-sm-10">
      <input type="text" className="form-control w-50" id="address" name="address" onChange={props.handleChange} />
    </div>
  </div>

  <fieldset className="form-group">
    <div className="row align-items-center ">
      <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gender" id="male" value="male"  />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </div>
    </div>
  </fieldset> 
  <div className="form-group row align-items-center ">
    <div className="col-sm-10 text-center">
      <button onClick ={props.onSubmit}className="btn btn-primary mt-2 w-50" >Next Stage</button>
    </div>
  </div>
</form>
</div>
     );
}
 
export default Form;