import React, { Component } from 'react';
import logo from '../public/imgs/fitRepLogo.png';

// import '../public/css/style.css';
// import Login from './components/Login';
// license = 2673-9835227438-5663

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to FitRep Fitness</h2>
        </div>
        <p className="App-intro">
          Login Below, Or Create An Account To Get Started
        </p>
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <form className="text-center" action="/login" method="GET">
                <input type="hidden" name="login" value="true"/>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <form className="text-center" action="/create-account" method="GET">
                <input type="hidden" name="create-account" value="true"/>
                <button className="btn btn-primary" type="submit">Create Account</button>
            </form>
        </div>
        <div className="col-md-3"></div>

      </div>
        // <div className="App-header">
        //   <div>
        //     <h2>Welcome to React</h2>
        //   </div>
        //   <div>
        //     {this.props.children}
        //   </div>

        // </div>
    );
  }
}

export default App;
