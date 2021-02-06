
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { formTaskValidator } from '../utils/validator'

export class FormTaskComplete extends Component {
    constructor() {
        super();
        this.validate = formTaskValidator;
    }

    static propTypes = {
        validator: PropTypes.object,
    }

    state = {
        name: '',
        lastname: '',
        birthday: '',
        usertype: '',
        inactivityDate: ''
    }

    onChangeHandler = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
        const isValid = this.validate[name](value);
        console.log(isValid);
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
    }

    validate(name, value) {
        return this.props.validator[name](value);
    }

    render() {

        return (
            <>
                <form className='user' onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>Personal Info</legend>
                        <label>First Name: <input onChange={this.onChangeHandler} type='text' name="name" required /></label>
                        <label>Last Name: <input onChange={this.onChangeHandler} type='text' name="lastname" required /></label>
                        <label>Birthday: <input name='birthday' onChange={this.onChangeHandler} type='text' placeholder='YYYY-MM-DD' /></label>
                    </fieldset>

                    <fieldset>
                        <legend>User Management</legend>
                        <label>User Type: <input name='usertype' onChange={this.onChangeHandler} type='text' /></label>
                        <label>User Inactivity Date: <input name='inactivityDate' onChange={this.onChangeHandler} type='date' /></label>
                    </fieldset>
                    <button>Save</button>
                </form>
            </>
        );
    }
};
