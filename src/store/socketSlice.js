// import { io } from "socket.io-client";
import io from "socket.io-client";
import { createSlice } from '@reduxjs/toolkit'

const initialState = { socket:null }

const socketSlice = createSlice({
    name: 'socket',
    initialState,
    reducers: {
        
        connectSocket(state,action){
            console.log("connect with backend uisng web-socket")
            const socket = io("mammoth-galvanized-fiber.glitch.me", {
                reconnectionDelayMax: 10000,
                auth: {
                    token: "123"
                },
            });
            state.socket = socket
        }
        
    },
})

export const { connectSocket } = socketSlice.actions
export default socketSlice.reducer