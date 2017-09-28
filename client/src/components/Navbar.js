import React, { Component } from 'react';
import headerLogo from '../../public/imgs/iLIFT Fitness Camp Logo (1).png';
// import Nav from './components/Navbar';
// import Login from './components/Login';

import '../../public/css/style.css';
// import Login from './components/Login';
// license = 2673-9835227438-5663

/*
<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand  mr-auto" href="/">
        <img src={headerLogo} alt="FitRep Fitness Logo" />
    </a>
    <div className="collapse navbar-collapse ml-auto" id="navbarCollapse">
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/create-account">Sign Up</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
            </li>
        </ul>
    </div>
</nav>        */

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src={headerLogo} alt="FitRep Fitness Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/create-account">Sign Up</a>                    
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Nav;

{/* <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Dashboard</a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Settings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Help</a>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav> */}