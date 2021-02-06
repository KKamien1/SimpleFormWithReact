
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { formTaskValidator } from '../utils/validator'
import ErrorMessage from '../components/ErrorMessage'
import InputField from '../components/InputField'

export class FormTaskComplete extends Component {
    constructor(props) {
        super(props);
        this.validate = formTaskValidator(this.props);
    }

    state = {
        username: '',
        lastname: '',
        birthday: '',
        usertype: '',
        inactivityDate: '',
        touched: {},
        errors: {}
    }

    onChangeHandler = ({ target }) => {
        const { name, value, required } = target;
        console.log('target', target, name, value, required);
        this.setState({ [name]: value })
        const isValid = this.validate[name](target);
        if (isValid === true) {
            console.log('should be valid only', isValid);
            this.setState({ [name]: value })
            this.setState((prevState) => ({ errors: { ...prevState.errors, [name]: [] } }))
        } else {
            this.setState((prevState) => ({ errors: { ...prevState.errors, [name]: isValid } }))
        }
        console.log(isValid);
    }

    onBlurHandler = ({ target: { name } }) => {
        this.setState((prevState) => ({ touched: { ...prevState.touched, [name]: true } }))
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
    }

    render() {
        const { username, lastname, birthday, usertype, inactivityDate, touched, errors } = this.state;
        return (
            <>
                <form className='form' onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>Personal Info</legend>
                        <InputField
                            name="username"
                            value={username}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            touched={touched["username"]}
                            errors={errors["username"]}
                            required>
                            First Name:
                        </InputField>
                        <InputField
                            name="lastname"
                            value={lastname}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            touched={touched["lastname"]}
                            errors={errors["lastname"]}
                            required>
                            Last Name:
                        </InputField>
                        <InputField
                            name="birthday"
                            value={birthday}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            touched={touched["birthday"]}
                            errors={errors["birthday"]}
                            required>
                            Birthday:
                        </InputField>
                    </fieldset>

                    <fieldset>
                        <legend>User Management</legend>
                        <InputField
                            name="usertype"
                            value={usertype ? 'active' : 'inactive'}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            touched={touched["usertype"]}
                            errors={errors["usertype"]}
                            required>
                            User Type:
                        </InputField>
                        <InputField
                            name="inactivityDate"
                            value={inactivityDate}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            touched={touched["inactivityDate"]}
                            errors={errors["inactivityDate"]}
                            required>
                            User Inactivity Date:
                        </InputField>
                    </fieldset>
                    <button>Save</button>
                </form>
            </>
        );
    }
};
