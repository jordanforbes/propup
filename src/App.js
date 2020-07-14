import React, {Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonCard from './Components/PersonCard';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: this.birthDay()
    };
  }
  
birthDay =e=> {console.log("hi")}
test=e=>{console.log("test")}

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Person</h1>
          </div>
          <div className="card-body">
            <PersonCard
              firstName={"John"}
              lastName={"Doe"}
              age={24}
              hairColor={"brown"}
              // birthday={this.birthDay()}
            />
            <PersonCard
              firstName={"Jimi"}
              lastName={"Hendrix"}
              age={27}
              hairColor={"black"}
              birthday={this.birthDay()}
            />
            <PersonCard
              firstName={"Alan"}
              lastName={"Parsons"}
              age={90}
              hairColor={"blond"}
              birthday={this.birthDay()}
            />
            <PersonCard
              firstName={"Karl"}
              lastName={"Marx"}
              age={200}
              hairColor={"grey"}
              birthday={this.birthDay()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
