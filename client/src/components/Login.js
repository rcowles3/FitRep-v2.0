/**
 * Login Screen Component
 *
 * Component checks users input accross our MongoDB collection
 * @param {username} username - users created username
 * @param {password} password - users secured password using passport js
 * If valid,
 * @return {userProfile} - component that will display information related to user
 */

import React, { Component } from 'react';
import logo from '../../public/imgs/fitRepLogo.png';
import helpers from '../utils/helpers';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.userData = new helpers();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event) {

        let loginInfo = {
            user_name: this.state.username,
            pass_word: this.state.password
        };

        // let first_name = this.state.firstName;
        event.preventDefault();
        this.userData.sendData(loginInfo);
        console.log("Account Login Successful!");

        // let user_name =this.state.username;
        // let pass_word = this.state.password;

        console.log(loginInfo);
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Account Login</h2>
                </div>
                <div className="col-md-3"></div>
                <div className="text-center col-md-6">
                    <form className="create-update-form" onSubmit={this.handleSubmit}>
                        <div className="text-center form-group">
                            <label>
                                Username:
                            </label>
                            <input className="form-control" type="text" id="username" value={this.state.username} onChange={this.handleChange} name="user_name" />
                        </div>
                        <div className="text-center form-group">
                            <label>
                                Password:
                            </label>
                            <input className="form-control" type="text" id="password" value={this.state.password} onChange={this.handleChange} name="pass_word" />
                        </div>
                        <button className="btn btn-primary" type="submit" value="Submit" >Login</button>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default Login;



