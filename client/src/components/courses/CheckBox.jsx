import React from 'react'

const CheckBox = (props) => {
    return (
        <div className='mt-2'>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={props.checked}
                    onChange={props.onChange}
                    id={props.content}
                />
                <label
                    className="form-check-label"
                    htmlFor={props.content}
                >
                    {props.content}
                </label>
            </div>
        </div>
    )
}

export default CheckBox