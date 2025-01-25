import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
    is_connected: false,
    switches: {
        switch_1:{
            switch_no: 1,
            status: false,
            label: "Strip Light",
        },
        switch_2:{
            switch_no: 2,
            status: false,
            label: "Button",
        },
        switch_3:{
            switch_no: 3,
            status: false,
            label: "Button",
        },
        switch_4:{
            switch_no: 4,
            status: false,
            label: "Party Light",
        },
        switch_5:{
            switch_no: 5,
            status: false,
            label: "Fan",
        },
        switch_6:{
            switch_no: 6,
            status: false,
            label: "Main Light",
        },
        switch_7:{
            switch_no: 7,
            status: false,
            label: "Button",
        },
        switch_8:{
            switch_no: 8,
            status: false,
            label: "Button",
        }
    },
    colors: {
        "bright":"IR_BPLUS",
        "dim":"IR_BMINUS",
        "off":"IR_OFF",
        "on":"IR_ON",
        "red":"IR_R",
        "green":"IR_G",
        "blue":"IR_B",
        "white":"IR_W",
        "orange":"IR_B1",
        "light-green":"IR_B2",
        "purple":"IR_B3",
        "ch4":"IR_FLASH",
        "ch5":"IR_B4",
        "ch6":"IR_B5",
        "ch7":"IR_B6",
        "ch8":"IR_STROBE",
        "ch9":"IR_B7",
        "ch10":"IR_B8",
        "ch11":"IR_B9",
        "ch12":"IR_FADE",
        "ch13":"IR_B10",
        "ch14":"IR_B11",
        "ch15":"IR_B12",
        "ch16":"IR_SMOOTH"
    },
    sensors:{
        gas_1:0,
        gas_2:0,
        gas_3:0,
        temp:0,
        humidity:0,
        time:0,
    }
}

const arduinoSlice = createSlice({
    name: 'arduino',
    initialState,
    reducers: {

        connectSocket(state,action){
            state.socket = socket
        },
        setArduinoStatus(state,payload){
            state.is_connected = payload
        },
        setSensorData(state,action){
            state.sensors.time = action.payload.time ?? 0
            state.sensors.gas_1 = action.payload.gas_1 ?? 0
            state.sensors.gas_2 = action.payload.gas_2 ?? 0
            state.sensors.gas_3 = action.payload.gas_3 ?? 0
            state.sensors.temp = action.payload.temp ?? 0
            state.sensors.humidity = action.payload.humidity ?? 0

        },
        setArduinoButtonStatus(state,action){
            const {switch_no,status}= action?.payload ?? {}
            if(switch_no){
                Object.entries(state?.switches??{}).forEach(([k,v])=>{
                    if(v?.switch_no == switch_no){
                        v.status = status
                    }
                })
            }
        }
    },
})

export const { setArduinoButtonStatus,setSensorData } = arduinoSlice.actions
export default arduinoSlice.reducer