import React, { forwardRef } from 'react'
import PropTypes from 'prop-types';
function Input(props,ref) {
    const { label } = props
    return (
        <div>
            <input type="text" ref={ref} {...props}/>
        </div>
    )
}

export default forwardRef(Input) 