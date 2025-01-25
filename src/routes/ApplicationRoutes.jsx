import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/application/Dashboard'
import ApplicationSidebar from '../components/sidebar/ApplicationSidebar'
import { useDispatch, useSelector } from 'react-redux'
import Login from 'pages/home/Login'
import Switches from 'pages/application/Switches'
import Header from 'components/user/Header'
import Remote from '../pages/application/Remote'
import Keyboard from '../pages/application/Keyboard'
import Search from '../pages/application/Search'

function ApplicationRoutes() {
    const socket = useSelector(state=>state.socket.socket)
    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    
    useEffect(()=>{
    if(socket?.connected){
            if(auth.isAuthenticated){
                socket.emit("join",{token:auth.token})
            }
        }
    },[auth])
    if (!auth.isAuthenticated)
    return <Login />
    return (
        <div className="main-app">
            <Header />
            <main>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/switches" element={<Switches />} />
                    <Route path="/remote" element={<Remote />} />
                    <Route path="/keyboard" element={<Keyboard />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </main>
        </div>
    )
}

export default ApplicationRoutes