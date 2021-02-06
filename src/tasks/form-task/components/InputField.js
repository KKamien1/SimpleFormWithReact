
import React from 'react';
import ErrorMessage from './ErrorMessage'

export default function InputField({ name, value, type = 'text', required, children, onChange, onBlur, touched, placeholder, errors }) {
    return (
        <div className="form__input-field">
            <label>
                {children} {required ? <span className='form__asterisk'>*</span> : null}
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                />
                {type === 'checkbox' ? <span>{value}</span> : null}
                {touched && <ErrorMessage errors={errors} />}
            </label>
        </div>
    )
}
