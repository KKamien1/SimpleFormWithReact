
import React from 'react';
import ErrorMessage from './ErrorMessage'

export default function InputField({
    field: { name, value, required, touched, errors },
    children,
    onChange,
    onBlur,
    placeholder }) {

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
                    required={required}
                    placeholder={placeholder}
                    type='text'
                />
                {touched && <ErrorMessage errors={errors} />}
            </label>
        </div>
    )
}
