import React from 'react';

function FormField({ label, value, onChange, type, name }) {
    return (
        <div>
            <label>
                {label}:
                <input type={type} value={value} name={name}
                    onChange={onChange}
                ></input>
            </label>
        </div>
    )
}

export default FormField;