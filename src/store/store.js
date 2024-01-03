import { configureStore } from '@reduxjs/toolkit'

import socketSlice from './socketSlice'
import authSlice from './authSlice'
import arduinoSlice from './ardunioSlice'
const store = configureStore({ 
    reducer: {
        auth : authSlice,
        socket: socketSlice,
        arduino: arduinoSlice
    } ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store