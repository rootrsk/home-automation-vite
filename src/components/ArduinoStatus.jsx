import React from 'react'

function ArduinoStatus() {
    return (
        <div className='arduino-status'>
            <h3>Arduino</h3>
            <div className='flex space-between align-center '>
                <span className='mr-10'>Disconnected</span>
                <div className='led-off'> </div>
            </div>
        </div>
    )
}

export default ArduinoStatus