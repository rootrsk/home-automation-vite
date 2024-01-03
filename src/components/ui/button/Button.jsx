import React, { forwardRef } from 'react'

function Button({children},ref) {
    return (
        <button>
            {children}
        </button>
    )
}

export default forwardRef(Button) 