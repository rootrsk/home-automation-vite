import React from 'react'
import { useSelector } from 'react-redux'
import ArduinoStatus from 'components/ArduinoStatus'
// import RealtimeChart from 'components/charts/RealtimeChart';
function Dashboard() {
    const arduino = useSelector(state=>state?.arduino)

    return (
        <div>
            Dashboard
            <ArduinoStatus />
            <div className="">
                {/* <RealtimeChart  data ={arduino.sensors.temp} title='Temperature' max={50}/> */}

            </div>
        </div>
    )
}

export default Dashboard