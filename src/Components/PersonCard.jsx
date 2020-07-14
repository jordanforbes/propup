import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
            
        }
    }
    render(){
        return (
          <div className="card">
            <div
              className="card-header"
              style={{ backgroundColor: "rebeccaPurple", color:"white"}}
            >
              <p>
                <h2>
                  {this.props.firstName} {this.props.lastName}
                </h2>
              </p>
            </div>
            <div className="card-body">
              <p>Age: {this.props.age + this.state.count}</p>
              <p>Hair Color: {this.props.hairColor}</p>
            </div>
            <button className="btn btn-info" onClick={(e)=> this.setState({count: this.state.count+1})}
            >Birthday Button for {this.props.firstName} {this.props.lastName}</button>
          </div>
        );
    }
}

export default PersonCard;