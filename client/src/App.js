import React, { Component } from 'react';
import logo from '../public/imgs/fitRepLogo.png';
import Nav from './components/Navbar';
import HeaderImg from './components/HeaderImg';
import CardDeck from './components/CardDeck';
import Footer from './components/Footer';

import '../public/css/style.css';
import GetStarted from './components/GetStarted'
// import Login from './components/Login';
// license = 2673-9835227438-5663

/* 
<div className="App">          
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form className="text-center" action="/login" method="GET">
              
<button className="btn btn-primary" type="submit">Login</button>
            </form >
  <form className="text-center" action="/create-account" method="GET">
    
    <button className="btn btn-primary" type="submit">Create Account</button>
  </form>
          </div >
  <div className="col-md-3"></div>
        </div >

*/

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <HeaderImg />
        <CardDeck />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}

export default App;
