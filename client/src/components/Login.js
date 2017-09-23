import React, { Component } from 'react';
import logo from '../../public/imgs/fitRepLogo.png';
// import from '../../public/css/style.css';

class Login extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Account Login</h2>
                </div>
                <div className="col-md-3"></div>
                <div className="text-center col-md-6">
                    <form className="create-update-form" action="/login" method="POST">
                        <div className="text-center form-group">
                            <label for="username">Username:</label>
                            <input className="form-control" type="text" id="username" name="username" />
                        </div>
                        <div className="text-center form-group">
                            <label for="pass">Password:</label>
                            <input className="form-control" type="text" id="pass" name="pass" />
                        </div>
                        <button className="btn btn-primary" type="submit">Login</button>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default Login;



