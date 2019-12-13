import React, { Component } from 'react';
import ResultItem from '../../result-item/ResultItem.component';
class ResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            results:[],
            error:null,
            errorInfo:null,
            shownResults:0

         }
    }

    resetState = () => {
        this.setState({
            results:[],
            error:null,
            errorInfo:null
        });
        this.fetchResults();
    }

    fetchResults = () => {
        const Username = '09822222222';
        const Password = 'sana1234';
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'http://stage.achareh.ir/api/karfarmas/address';
        console.log("getting info");  
        fetch(targetUrl, {
          method: 'get',
          headers: {'Authorization':'Basic ' + btoa(Username + ":" + Password )},
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
            this.setState({
                results: data,
                shownResults: (data.length > 5) ? 5 :data.length
            });
         }).catch(error => {
           
           this.setState({error:error});
           return ;
         });

    }

    componentDidMount(){    
        // const Username = '09822222222';
        // const Password = 'sana1234';
        // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        // const targetUrl = 'http://stage.achareh.ir/api/karfarmas/address';
        // console.log("getting info");  
        // fetch(proxyUrl + targetUrl, {
        // method: 'get',
        // headers: {'Authorization':'Basic ' + btoa(Username + ":" + Password )},
        // }).then(response => response.json())
        // .then(data =>{ this.setState({results: data});
        // console.log(data)});
        this.fetchResults();

        
    }

    showMoreResults = (e) => {
        this.setState((prevState) => {
            return {shownResults: (prevState.results.length > prevState.shownResults + 10) ? prevState.shownResults + 10 :prevState.results.length }
         })
        
    }
    

    componentDidCatch(error) {
        this.setState({
           error: error,
         });
       }


    render() { 
        if (this.state.error) {

            return (
              <div className="container">
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Something's wrong I can feel it!</strong>{this.state.error.toString() }
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.resetState}>
                  <span aria-hidden="true">&times;</span>
                </button>
      
                {this.state.errorInfo? Object.entries(this.state.errorInfo).map((key, value) => (
                  <div key={key} className="alert alert-danger" role="alert">
                  <p>{key.toString() } {value.toString()}</p>
                </div>
                )) : null
              }
                
              </div>
              </div>
      
              
            );
          }
        
        return ( 
            <div className="text-center">
                {this.state.results.slice(0, this.state.shownResults).map(result => (<ResultItem info={result} key={result.id} />))}
                <button  className="btn btn-secondary " onClick={this.showMoreResults}>Show More...</button>
            </div>
         );
    }
}
 
export default ResultContainer;