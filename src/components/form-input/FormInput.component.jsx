import React, { Fragment } from 'react'
const FormInput = ({handleChange, label, children,  ...otherProps}) => {
    return ( 
        <Fragment>
        <label>{label}</label>
        {label?<br /> :null}
        <input onChange={handleChange} {...otherProps} />
        {children? children: null}<br />
        </Fragment>
     );
}
 
export default FormInput;