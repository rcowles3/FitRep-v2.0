import React, { Component } from 'react';
import getStarted from '../../public/imgs/getStarted.jpeg';
import '../../public/css/style.css';
// import Login from './components/Login';
// license = 2673-9835227438-5663

class GetStarted extends Component {

    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center" id="getStarted">
                <h1 className="display-3">Get Started on your fitness journey today!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary" href="/create-account">Sign Up</a>
                <a className="btn btn-primary" href="/login">Login</a>
            </div>
        );
    }
}

export default GetStarted;
