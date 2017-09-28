import React, { Component } from 'react';
import logo from '../../public/imgs/fitRepLogo.png';

// var React = require("react");
var values = {}, errors = {};
var Subschema = require("subschema");
var {Form, ValueManager} = Subschema;
// var ValueManager = Subschema.ValueManager;
var vm = ValueManager(values, errors);

//listen to all events
// vm.addListener(function(newValue, oldValue, path){


// });
// vm.addListener('singlePath', function(newValue, oldValue, path){
//  //get all the values.  just for documentation sake.
//  var values = vm.getValue();

// });
// vm.addErrorListener('path', function(){

// });


var schema = {
    "schema": {
        "firstName": {
            "type": "Text",
            "validators": [
                "required"
            ]
        },
        "lastName": {
            "type": "Text",
            "validators": [
                "required"
            ]
        },
        "email": {
            "type": "Text",
            "validators": [
                "required"
            ]
        },
        "height (ft)": {
            "type": "Text",
            "validators": [
                "required"
            ]
        },
        "height (in)": {
            "type": "Text",
            "validators": [
                "required"
            ]
        },
        "weight": {
            "type": "Text",
            "validators": [
                "required"
            ]
        },
        "age": {
            "type": "Number"
        },
        "userName": {
            "type": "Text",
            "validators": [
                "required"
            ]
        },
        "password": {
            "type": "Text",
            "validators": [
                "required"
            ]
        }
    },
    "fieldsets": [
        {
            "legend": "Create Account",
            "fields": "firstName, lastName, email, height (ft), height (in), weight, age, userName, password",
            "buttons": [
                {
                    "label": "Cancel",
                    "action": "cancel",
                    "buttonClass": "btn"
                },
                {
                    "label": "Submit",
                    "action": "submit",
                    "buttonClass": "btn btn-primary"
                }
            ]
        }
    ]
};

// console.log("Outside class", value);

class Create extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         firstName: 'first',
    //         lastName: 'last'
    //     };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(firstName) {

    //     this.setState({
    //         firstName: event.target.value            
    //     })

    //     // console.log("Name:", this.state.firstName);
    // }

    // handleChange(lastName) {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    // handleSubmit(event) {
    //     event.preventDefault();  
    //     console.log("VALUE: \n\n", value);  
    //     console.log("SCHEMA: \n\n", schema);

    // }
    handleSubmit = (event, oldValue, newValues, property) => {
        event.preventDefault();
        console.log("New Value: ", newValues); // testing
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Create Account Below</h2>
                </div>
                <div className="col-md-3"></div>
                {/* <form className="col-md-6" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="first_name">First Name:</label>
                        <input type="text" className="form-control" id="first_name" value={this.state.firstName}onChange={this.handleChange.firstName} name="first_name" />
                    </div>
                    <div className="form-group">
                        <label for="last_name">Last Name:</label>
                        <input type="text" className="form-control" id="lastName" value={this.state.lastName}onChange={this.handleChange.lastName} name="last_name" />                   
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
                </form> */}
                <Form className="col-md-6 form-control" schema={schema} value={values} onSubmit={this.handleSubmit} valueManager={vm} />
                <div className="col-md-3"></div>
                <br />
                <br />

            </div>
        )
    }
}

export default Create;
