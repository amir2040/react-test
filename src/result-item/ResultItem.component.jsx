import React from 'react'
const ResultItem = (props) => {
    const {address, first_name, last_name, coordinate_mobile} = props.info;
    return ( 
        <div>
            <label>Address  :</label>
            <p>{address}</p>
            <label>Name     :</label>
            <p> {first_name}  {last_name}       </p>
            <span>Phone Number    : {coordinate_mobile} </span>
        </div>
     );
}
 
export default ResultItem;