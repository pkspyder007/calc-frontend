
import React, { Component } from "react";


export default class Keypad extends Component<{}, {}> {
   state  = {
      ButtonPressed: ''
    }
   handleClick = (e:any) => {
      this.setState({ButtonPressed: e.target.name});
   }

   render(){
       return(   
        <div className="calculator">
                <div className="keypad">
                    <button name="AC" className="dark-gray" onClick={this.handleClick} >AC</button>
                    <button name="back"  className="dark-gray">back</button>
                    <button name="%"  className="dark-gray" > %</button>
                    <button name="/"  className="dark-gray">/</button>
                     <button className="dark-gray" >{this.state.ButtonPressed}</button>
                    <button name="7"   className="gray">7</button>
                    <button name="8" className="gray">8</button>
                    <button name="9" className="gray" >9</button>
                    <button name="+" className="dark-gray" >+</button>
    
    
                    <button name="4" className="gray" onClick={this.handleClick}>4</button>
                    <button name="5" className="gray">5</button>
                    <button name="6" className="gray" >6</button>
                    <button name="-" className=" dark-gray">-</button>
    
                    <button name="1" className="gray" >1</button>
                    <button name="2" className="gray">2</button>
                    <button name="3" className="gray">3</button>
                    <button name="*" className="dark-gray">x</button>
    
    
                    <button name="." className="orange">.</button>
                    <button name="0" className="gray" >0</button>
                    <button className="orange" autoFocus name="=" >=</button>
                    <button name="swap" >sci</button><br/>
                </div>
                <h2>Current Key: {this.state.ButtonPressed}</h2>
                </div>
       )
       }
    }