
import React, { Component } from 'react'

import { formTaskValidator } from '../utils/validator'
import { saveUserForm } from './form-api'
import InputField from '../components/InputField'
import CheckBox from '../components/CheckBox'

const [username, lastname, birthday, usertype, inactivityDate] = ['username', 'lastname', 'birthday', 'usertype', 'inactivityDate']
export class FormTaskComplete extends Component {
    constructor(props) {
        super(props);
        this.validate = formTaskValidator(this.props);
        this.saveUserForm = saveUserForm;
        this.state = {
            [username]: {
                name: username,
                value: '',
                required: true,
                touched: false,
                errors: [],
                isValid: false
            },
            [lastname]: {
                name: lastname,
                value: '',
                required: true,
                touched: false,
                errors: [],
                isValid: false
            },
            [birthday]: {
                name: birthday,
                value: '',
                touched: false,
                errors: [],
                isValid: false
            },
            [usertype]: {
                name: usertype,
                value: '',
                touched: false,
                errors: [],
                isValid: false
            },
            [inactivityDate]: {
                name: inactivityDate,
                value: '',
                touched: false,
                errors: [],
                isValid: false,
                required: false,
            }
        }
    }

    componentDidMount() {
        this.validateForm();
        this.initialState = { ...this.state }
    }

    isUserTypeInactive = () => this.state['usertype'].value === 'Inactive' ? true : false;

    onChangeHandler = ({ target }) => {
        const { name, value } = target;
        this.setInactivityDateRequired(name, value);
        const { isValid, errors } = this.validate[name](target);
        this.setState((prevState) => ({ [name]: { ...prevState[name], value, isValid, errors } }))
    }

    onBlurHandler = ({ target: { name } }) => {
        this.setState((prevState) => ({ [name]: { ...prevState[name], touched: true } }))
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.saveUserForm();
        this.resetForm()
    }

    validateForm = () => {
        for (const name in this.state) {
            const { isValid, errors } = this.validate[name](this.state[name]);
            this.setState((prevState) => ({ [name]: { ...prevState[name], errors, isValid } }))
        }
    }

    isFormValid = () => {
        return Object.values(this.state).every(field => field.isValid);
    }

    setInactivityDateRequired = (name, value) => {
        if (name === usertype) {
            const required = value === 'Inactive' ? true : false;
            const { isValid, errors } = this.validate[inactivityDate]({ value: this.state[inactivityDate].value, required });
            this.setState((prevState) => ({ [inactivityDate]: { ...prevState[inactivityDate], errors, isValid, required } }))
        }
    }

    resetForm = (event) => {
        event.preventDefault();
        this.setState({ ...this.initialState });
    }

    render() {
        const { username, lastname, birthday, usertype, inactivityDate } = this.state;
        const disableButton = !this.isFormValid();
        return (
            <>
                <form className='form' onSubmit={this.onSubmit} noValidate>
                    <fieldset className='form__fieldset'>
                        <legend className='form__legend'>Personal Info</legend>

                        <InputField
                            field={username}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                        >
                            First Name
                        </InputField>

                        <InputField
                            field={lastname}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                        >
                            Last Name
                        </InputField>
                        <InputField
                            field={birthday}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            placeholder={this.props.dateFormat}
                        >
                            Birthday
                        </InputField>

                    </fieldset>

                    <fieldset className='form__fieldset'>
                        <legend className='form__legend'>User Management</legend>

                        <CheckBox
                            field={usertype}
                            options={['Active', 'Inactive']}
                            onChange={this.onChangeHandler}
                            checked={true}
                        >
                            User Type
                        </CheckBox>

                        <InputField
                            field={inactivityDate}
                            onChange={this.onChangeHandler}
                            onBlur={this.onBlurHandler}
                            placeholder={this.props.dateFormat}

                        >
                            User Inactivity Date
                        </InputField>
                    </fieldset>
                    <button type='submit' className='form__btn form__btn--primary' disabled={disableButton}>Save</button>
                    <button className='form__btn' onClick={this.resetForm}>Reset</button>
                </form>
            </>
        );
    }
};
