
import React from 'react';
import ErrorMessage from './ErrorMessage'

export default function InputField({
    name,
    value,
    required,
    children,
    onChange,
    onBlur,
    touched,
    placeholder,
    errors }) {

    return (
        <div className="form__input-field">
            <label htmlFor={name}>
                {children}
                {required ? <span className='form__asterisk'>*</span> : null}
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    type='text'
                    required={required}
                    placeholder={placeholder}
                />
                {touched && <ErrorMessage errors={errors} />}
            </label>
        </div>
    )
}
