
import React from 'react';

export default function CheckBox({
    field: { name, value, required },
    children,
    options = [true, false],
    checked,
    onChange }) {

    const [yes, no] = options;

    const onChangeHandler = (e) => {
        e.target.value = e.target.checked ? yes : no;
        onChange(e)
    }
    return (
        <div className="form__input-field">
            <label htmlFor={name}>
                {children}
                {required ? <span className='form__asterisk'>*</span> : null}
                <input
                    name={name}
                    value={value}
                    onChange={onChangeHandler}
                    type="checkbox"
                    defaultChecked={checked}
                />
                <span>{yes}</span>
            </label>
        </div>
    )
}
