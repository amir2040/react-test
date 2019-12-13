import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './components/map-container/MapContainer';
import Form from './components/form/Form.component';
import ResultContainer from './components/results-container/ResultContainer.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      lng:51.420470,
      lat:35.729054,
      firstName:'',
      lastName:'',      
      mobileNumber:'',
      phoneNumber:'',
      address:''
     }
  }


  setLocation = (lng, lat) => {
    this.setState({lng: lng,lat: lat});
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value}, () => {console.log(this.state)});
  }


  onSubmit = (e) => {
    e.preventDefault();
    const Username = '09822222222';
    const Password = 'sana1234';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'http://stage.achareh.ir/api/karfarmas/address';
    const {address, lat, lng, mobileNumber, phoneNumber, firstName, lastName, gender} = this.state;
    fetch(proxyUrl + targetUrl, {
      method: 'post',
      headers: {'Content-Type':'application/json','Authorization':'Basic ' + btoa(Username + ":" + Password )},
      body:JSON.stringify( {
        "region":"1",
        "address":address,
        "lat":lat,
        "lng":lng,
        "coordinate_mobile":mobileNumber,
        "coordinate_phone_number":phoneNumber,
        "first_name": firstName,
        "last_name": lastName,
        "gender":gender
      })
     }).then(response => response.json())
     .then(data => console.log(data));
  }

//<MapContainer lng={this.state.lng} lat={this.state.lat} setLocation={this.setLocation}  />
//<Form  handleChange={this.handleChange} onSubmit={this.onSubmit} />
  render() { 
    return ( 
      <div>
        <ResultContainer />
      </div>
     );
  }
}
 
export default App;


