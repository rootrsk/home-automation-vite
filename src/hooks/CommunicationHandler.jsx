import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectSocket } from 'store/socketSlice'
import { setArduinoButtonStatus } from 'store/ardunioSlice'
import { setSensorData } from 'store/ardunioSlice'

function CommunicationHandler() {
    const dispatch = useDispatch()
    const auth = useSelector(state=>state?.auth)
    const socket = useSelector(state=>state.socket.socket)
    useEffect(() => {
        if (!socket){
            dispatch(connectSocket())
            return
        }
        socket?.on("connect",()=>{
            if(auth.isAuthenticated){
                socket.emit("join",{token:auth.token})
            }
        })
        socket.on("switch-triggered",({ switch_no, status, username })=>{
            dispatch(setArduinoButtonStatus({switch_no, status}))
        })
        socket.on("sync-with-server",({switch_status})=>{
            switch_status?.forEach((status,idx)=>{
                dispatch(setArduinoButtonStatus({switch_no:idx+1, status}))
            })
        })
        socket.on("sync",(data)=>{
            console.log(data)
            // switch_status?.forEach((status,idx)=>{
            //     dispatch(setArduinoButtonStatus({switch_no:idx+1, status}))
            // })
        })
        
    }, [socket]);
    socket?.on('sensor-sent',(data)=>{
        console.log(data)
        dispatch(setSensorData(data))
    })
    useEffect(()=>{
        if(socket?.connected){
            if(auth.isAuthenticated){
                socket.emit("join",{token:auth.token})
            }
        }
    },[auth])
    return (
        <></>
    )
}

export default CommunicationHandler