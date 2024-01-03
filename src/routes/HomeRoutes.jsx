import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/home/Landing'

function HomeRoutes() {
    
    return (
        <Routes>
            <Route path="/" element={<Landing />}/>
        </Routes>
    )
}

export default HomeRoutes