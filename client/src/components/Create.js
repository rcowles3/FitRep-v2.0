import React, { Component } from 'react';
import logo from '../../public/imgs/fitRepLogo.png';

class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this);
  }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Create Account Below</h2>
                </div>
                <div className="col-md-3"></div>
                <form className="col-md-6" onChange={this.handleSubmit}>
                    <div className="form-group">
                        <label for="first_name">First Name:</label>
                        <input type="text" className="form-control" id="first_name" name="first_name" />
                    </div>
                    <div className="form-group">
                        <label for="last_name">Last Name:</label>
                        <input type="text" className="form-control" id="lastName" name="last_name" />
                    </div>
                    <div className="form-group">
                        <label for="heightFt">Height (ft):</label>
                        <input type="text" className="form-control" id="heightFt" name="heightFt" />
                    </div>
                    <div className="form-group">
                        <label for="heightIn">(in):</label>
                        <input type="text" className="form-control" id="heightIn" name="heightIn" />
                    </div>
                    <div className="form-group">
                        <label for="weight">Weight:</label>
                        <input type="text" className="form-control" id="weight" name="weight" />
                    </div>
                    <div className="form-group">
                        <label for="age">Age:</label>
                        <input type="text" className="form-control" id="age" name="age" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="text" className="form-control" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label for="username">Create Username:</label>
                        <input type="text" className="form-control" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label for="pass">Password:</label>
                        <input type="text" className="form-control" id="pass" name="pass" />
                    </div>
                    <button className="text-center btn btn-primary" type="submit">Create Account</button>
                </form>
                <div className="col-md-3"></div>
                <br />
                <br />
            </div>
        )
    }
}

export default Create;



