import * as React from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Output from './components/Output';




export default class App extends React.Component <{}> {
  

    state = {
        result: ""
    }


  buttonPressed =(buttonName:string)=>  {
    this.setState({
      result: buttonName
    });
  };
 public render(){
  return (
    <div className="calculator">
     
      
        <p> 
         <Output  result = {this.state.result}/>
         <Keypad />
        
        </p>
        
     
     
    </div>
  );
}

}

