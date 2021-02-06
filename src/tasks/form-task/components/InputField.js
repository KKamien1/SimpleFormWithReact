
import React from 'react';
import ErrorMessage from './ErrorMessage'

export default function InputField({ name, value, required, children, onChange, onBlur, touched, errors }) {
    return (
        <div className="form__input-field">
            <label>{children}
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    type='text'
                    required={required}
                />
                {touched && <ErrorMessage errors={errors} />}
            </label>
        </div>
    )
}
