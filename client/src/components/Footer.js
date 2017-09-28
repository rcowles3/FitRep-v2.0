import React, { Component } from 'react';
import headerLogo from '../../public/imgs/iLIFT Fitness Camp Logo (1).png';


import '../../public/css/style.css';



class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="card-deck">
                    <div className="card">
                        <img className="mx-auto" src={headerLogo} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">FitRep Fitness was developed as a final project for our Coding Bootcamp through the University Of Arizona. The idea came to us when discussing what could be build that people would use, being that we all are active, we came up with the idea of making a simple workout app to track your workout progress. Thus, FitRep was created.</p>
                        </div>
                    </div>
                    <div className="card" id="moreInfoFooter">
                        <div>
                            <h5 class="card-title">Follow Us On Github</h5>
                        </div>
                        <br />
                        <br/>
                        <div>
                            <h5 class="card-title">Get In Touch With Us</h5>
                        </div>    
                    </div>
                    <div className="card text-center" id="quickLinksFooter">
                        <div>
                            <h5 class="card-title">Quicklinks</h5>
                            <a className="nav-link" href="/create-account">Sign Up</a>
                            <a className="nav-link" href="/login">Login</a>
                        </div>
                        <br/>
                        <br/>    
                        <div>
                            <h5 class="card-title">API</h5>
                            <a className="nav-link" href="http://localhost:4200/api/workout-data/back-to-basics">Back To Basics</a>
                            <a className="nav-link" href="http://localhost:4200/api/workout-data/maxed-out-muscle">Maxed Out Muscle</a>
                        </div>
                    </div>
                </div>
                <hr />
                <footer>
                    <small className="text-muted text-center">
                        <p>
                            &copy; FitRep Fitness | 2017 University of Arizona Coding Bootcamp | Sherry Bao | William Charles | Michelle Ryan | Ryan Cowles
                        </p>
                    </small>

                </footer>
            </footer>
        );
    }
}

export default Footer;
