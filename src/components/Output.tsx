import * as React from 'react';
type ResultProps = {
    result: string
  }
 


export default class Output extends React.Component<ResultProps>{
   

    public render(){
        return(
            
        <p>{this.props.result}</p>

      

        );
    }



}