import React from 'react'

export default function ErrorMessage({ errors: [error] = [] }) {
    return error ? (
        <span className='form__error-message'>
            {error}
        </span>
    ) : null;
}
