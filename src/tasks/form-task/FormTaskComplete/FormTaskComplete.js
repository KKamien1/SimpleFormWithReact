
import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { formTaskValidator } from '../utils/validator'
import InputField from '../components/InputField'
import CheckBox from '../components/CheckBox'

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
        const { name, value } = target;
        this.setState({ [name]: value })
        const { errors } = this.validate[name](target);
        this.setState((prevState) => (
            {
                errors: { ...prevState.errors, [name]: errors }
            }
        ))
    }

    onBlurHandler = ({ target }) => {
        const { name } = target;
        const { isValid, errors } = this.validate[name](target);
        this.setState((prevState) => (
            {
                errors: { ...prevState.errors, [name]: errors },
                touched: { ...prevState.touched, [name]: true }
            }
        ))

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
                            required
                        >
                            First Name
                        </InputField>

                        <InputField
                            name="lastname"
                            value={lastname}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            touched={touched["lastname"]}
                            errors={errors["lastname"]}
                            required
                        >
                            Last Name
                        </InputField>
                        <InputField
                            name="birthday"
                            value={birthday}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            touched={touched["birthday"]}
                            errors={errors["birthday"]}
                            placeholder={this.props.dateFormat}
                        >
                            Birthday
                        </InputField>

                    </fieldset>

                    <fieldset>
                        <legend>User Management</legend>

                        <CheckBox
                            name="usertype"
                            value={usertype}
                            options={['Active', 'Inactive']}
                            onChange={this.onChangeHandler}
                            checked={true}
                        >
                            User Type
                        </CheckBox>

                        <InputField
                            name="inactivityDate"
                            value={inactivityDate}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            touched={touched["inactivityDate"]}
                            errors={errors["inactivityDate"]}
                            placeholder={this.props.dateFormat}
                            required={usertype === 'Inactive' ? true : false}
                        >
                            User Inactivity Date
                        </InputField>
                    </fieldset>
                    <button>Save</button>
                </form>
            </>
        );
    }
};
