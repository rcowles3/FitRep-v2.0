import React, { Component } from 'react';
import headerImg from '../../public/imgs/sports-fitness-body-building-iron-161557 (3).jpeg'

import '../../public/css/style.css';
// import Login from './components/Login';
// license = 2673-9835227438-5663

class HeaderImg extends Component {

    render() {
        return (
            <div class="jumbotron">
                <img src={headerImg} id="headerImg" alt="FitRep Header Image" />
            </div>
        );
    }
}

export default HeaderImg;
