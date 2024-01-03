import { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { IoMdPower } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaHomeSolid } from "react-icons/lia";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiUserCircleLight } from "react-icons/pi";
import { SiArduino } from "react-icons/si";
import { LuDatabase } from "react-icons/lu";
function ApplicationSidebar({ open=false, setOpen }) {
    return (
        <div className={`sidebar-backdrop ${open ? "show" : "hide"}`} onClick={() => setOpen(false)}>
            <div className="sidebar">
                <h2 style={{textAlign:'center',padding:"10px",borderBottom:"1px solid white"}}>Home Automation</h2>
                <li>
                    <LiaHomeSolid />
                    <span>Home</span>
                </li>
                <li> 
                    <LuLayoutDashboard />
                    <span>Dashboard</span> 
                </li>
                <li>
                    <IoMdPower /> 
                    <span>Switch</span> 
                </li>
                <li> 
                    <LuDatabase />
                    <span>Summary</span>
                </li>
                <li>
                    <TiWeatherPartlySunny />
                    <span>Weather</span>
                </li>
                <li>
                    <SiArduino />
                    <span>Arduino</span>
                </li>
                <li>
                    <SlGraph />
                    <span>Graph</span>
                </li>
                <li>
                    <PiUserCircleLight />
                    <span>Profile</span>
                </li>
            </div>
        </div>
    )
}

export default ApplicationSidebar