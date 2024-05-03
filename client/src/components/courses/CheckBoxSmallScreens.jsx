import React from 'react'

const CheckBoxSmallScreens = (props) => {
    return (
        <div className='mt-2'>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={props.checked}
                    onChange={props.onChange}
                    id={props.id}
                />
                <label
                    className="form-check-label"
                    htmlFor={props.htmlFor}
                >
                    {props.content}
                </label>
            </div>
        </div>
    )
}

export default CheckBoxSmallScreens