import React from 'react'
const ResultItem = (props) => {
    const {address, first_name, last_name, coordinate_mobile} = props.info;
//     <div>
//     <label>Address  :</label>
//     <p>{address}</p>
//     <label>Name     :</label>
//     <p> {first_name}  {last_name}       </p>
//     <span>Phone Number    : {coordinate_mobile} </span>
// </div>
    return ( 
        <div className="card border-info text-white bg-dark p-5 " style={{minWidth:"300px"}}>
        <div className="row mb-2 border border-success rounded">
            <div className="col-2"> <label >Address:</label> </div>
            <div className="col-10 "> <label className="float-right">{address}</label> </div>
        </div>
        <div className="row">
            <div className="border border-success rounded col-4">
            
              <label>Name {first_name}  {last_name}:</label> 
          
          
            </div>
          
          <div className="col-8  float-right border border-success rounded "><label className="float-right">Phone Number    : {coordinate_mobile} </label></div>
        </div>
        </div>
     );
}
 
export default ResultItem;