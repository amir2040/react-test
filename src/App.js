import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './components/map-container/MapContainer';
import Form from './components/form/Form.component';
import ResultContainer from './components/results-container/ResultContainer.component';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/header/Header.component';

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
      address:'',
      formIsValid:false,
      error: null,
      errorInfo: null
     }
  }


  setLocation = (lng, lat) => {
    this.setState({lng: lng,lat: lat});
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }


  onSubmit = (e) => {
    this.setState({formIsValid:true})
  }

  resetState = () => {
       this.setState({
         lng:51.420470,
        lat:35.729054,
        firstName:'',
        lastName:'',      
        mobileNumber:'',
        phoneNumber:'',
        address:'',
        formIsValid:false,
        error: null,
        errorInfo: null
      })
  }


  sendData = (e) => {
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
     }).then(response => {
       if(response.ok){
        return response.json();
       }
       response.json().then(data => {
         this.setState({errorInfo: data});
      });
       throw new Error('Network response was not ok. ' + response.status);
       
      })
     .then(data => {
       this.resetState();
    }).catch(error => {
      
      this.setState({error:error});
      return ;
    });
    // ,(error) => {
    //   if (error) {
    //     // handle error here
    //     console.log("error happend!")
    //     this.setState({error:error});
    //   }
    // }
  }

//<MapContainer lng={this.state.lng} lat={this.state.lat} setLocation={this.setLocation}  />
//<Form  handleChange={this.handleChange} onSubmit={this.onSubmit} />
//<ResultContainer />

//<Route exact path='/' 
//          {this.state.formIsValid ? 
//           render={(props) => < MapContainer {...props} lng={this.state.lng} lat={this.state.lat} setLocation={this.setLocation} /> 
//          :Form  handleChange={this.handleChange} onSubmit={this.onSubmit} />} />

componentDidCatch(error) {
  this.setState({
     error: error,
   });
 }
  render() { 
    if (this.state.error) {

      return (
        <div className="container">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Something's wrong I can feel it!</strong>{this.state.error.toString() }
          <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={this.resetState}>
            <span aria-hidden="true">&times;</span>
          </button>

          {this.state.errorInfo? Object.entries(this.state.errorInfo).map((key, value) => (
            <div key={key} class="alert alert-danger" role="alert">
            <p>{key.toString() } {value.toString()}</p>
          </div>
          )) : null
        }
          
        </div>
        </div>

        
      );
    }
    return ( 
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path='/'
          render={this.state.formIsValid? 
            (props) => <MapContainer {...props} lng={this.state.lng} lat={this.state.lat} setLocation={this.setLocation} sendData={this.sendData}  />
            :
            (props) => <Form  {...props} handleChange={this.handleChange} onSubmit={this.onSubmit} />
          }
          />
          <Route exact path='/results' component={ResultContainer} />
      </Switch>
      </div>
      
     );
  }
}
 
export default App;


