import React, { Component } from 'react';
// import headerImg from '../../public/imgs/sports-fitness-body-building-iron-161557 (2).jpeg'
import workoutIcon from '../../public/imgs/workoutIcon.png';
import trackingIcon from '../../public/imgs/trackingIcon.png';
import scaleIcon from '../../public/imgs/scaleIcon.png';

import '../../public/css/style.css';
// import Login from './components/Login';
// license = 2673-9835227438-5663

class CardDeck extends Component {

    render() {
        return (
            <div className="card-deck text-center">
                <div className="card">
                    <img className="card-img-top mx-auto" src={scaleIcon} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">About FitRep</h4>
                        <p className="card-text">FitRep Fitness was developed to be an simpler way to keep track of your workouts, while having a simple to use UI.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top mx-auto" src={workoutIcon} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">Browse Workouts</h4>
                        <p className="card-text">Whether you are just getting started on your fitness journey, or looking for a challenge, we have the perfect workout for you.</p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top mx-auto" src={trackingIcon} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">How Does It Work</h4>
                        <p className="card-text">FitRep Fitness will allow you to seamlesly track your workouts for the day from your selected workout, as well as your progress.</p>  
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDeck;
