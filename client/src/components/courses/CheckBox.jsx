import React from 'react'

const CheckBox = (props) => {
    return (
        <div className='mt-2'>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                    {props.content}
                </label>
            </div>
        </div>
    )
}

export default CheckBox