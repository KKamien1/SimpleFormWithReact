
import React from 'react';
import ErrorMessage from './ErrorMessage'

export default function InputField({
    field: { name, value, required, touched, errors },
    children,
    onChange,
    onBlur,
    placeholder }) {

    const hasError = touched && errors.length > 0;

    return (
        <div className="form__fieldbox">
            <label htmlFor={name} className="form__label">
                {children}
                {required ? <span className='form__asterisk'>*</span> : null}
                <input
                    className={`form__input_text ${hasError ? 'form__input_text--error' : null}`}
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
