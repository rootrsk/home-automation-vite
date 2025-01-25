import React from 'react'
import { useSelector } from 'react-redux'
import ArduinoStatus from 'components/ArduinoStatus'
import RealtimeChart from 'components/charts/RealtimeChart';
import Radial from 'components/charts/Radial'
function Dashboard() {
    const arduino = useSelector(state=>state?.arduino)

    return (
        <div>
            Dashboard
            <ArduinoStatus />
            <Radial data ={arduino.sensors.temp} name='Temperature'/>
            <Radial data ={arduino.sensors.humidity} name='Humidity'/>
            <Radial data ={arduino.sensors.gas_1} name='Temperature'/>
            <Radial data ={arduino.sensors.gas_2} name='Temperature'/>
            <Radial data ={arduino.sensors.gas_3} name='Temperature'/>
            <div className="">
                <RealtimeChart  data ={arduino.sensors.temp} title='Temperature' max={50}/>
                <RealtimeChart  data ={arduino.sensors.humidity} title='Temperature' max={100}/>
                <RealtimeChart  data ={arduino.sensors.gas_1} title='Temperature' max={500}/>
                <RealtimeChart  data ={arduino.sensors.gas_2} title='Temperature' max={500}/>
                <RealtimeChart  data ={arduino.sensors.gas_3} title='Temperature' max={500}/>
            </div>
        </div>
    )
}

export default Dashboard