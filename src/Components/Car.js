import React from "react";

export class Car extends React.Component{

constructor(props){
    super(props);
}

    render(){
        return(
            <div>
            <h1>The color of the car is {this.props.color}</h1>
            </div>
        )
    }
}