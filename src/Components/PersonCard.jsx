import React, { Component } from 'react';

class PersonCard extends Component{
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
              <p>Age: {this.props.age}</p>
              <p>Hair Color: {this.props.hairColor}</p>
            </div>
          </div>
        );
    }
}

export default PersonCard;