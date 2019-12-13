import React, { Component } from 'react';
import ResultItem from '../../result-item/ResultItem.component';
class ResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            results:[]
         }
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
        const Username = '09822222222';
        const Password = 'sana1234';
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'http://stage.achareh.ir/api/karfarmas/address';
        console.log("getting info");  
        fetch(targetUrl, {
          method: 'get',
          headers: {'Authorization':'Basic ' + btoa(Username + ":" + Password )},
         }).then(response => response.json())
         .then(data => this.setState({results: data}));
        
        
    }


    render() { 
        return ( 
            <div>
                {this.state.results.map(result => (<ResultItem info={result} key={result.id} />))}
            </div>
         );
    }
}
 
export default ResultContainer;