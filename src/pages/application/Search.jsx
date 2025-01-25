import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Search.scss'
function Search() {
    const dispatch = useDispatch()
    const arduino = useSelector(state=>state?.arduino)
    const auth = useSelector(state=>state?.auth)
    const socket = useSelector(state=>state?.socket?.socket)
    const [inputs,setInputs] = useState({
        incognito: true,
        tab: false,
        url: "",
        text: ""
    })
    const inputHandler = (e)=>{
        const { name, value, checked } = e.target
        console.log(name,value,checked)
        if(["incognito","tab"].includes(name)){
            setInputs(p=>({...p,[name]: checked}))
            return
        }
        setInputs(p=>({...p,[name]:value}))
    }
    const buttonHandler = (type)=>{
        if(socket){
            socket.emit("pc-text",{type:type,inputs})
        }
        
    }
    return (
        <div className='search-page'>
            <div className="web-search">
                <div className="checkbox">
                    <div>
                        <input 
                            type="checkbox" 
                            onChange={inputHandler} 
                            name="incognito"
                            checked={inputs['incognito']}
                        />
                        <label htmlFor="">Incognito</label>
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            onChange={inputHandler}
                            name="tab"
                            checked={inputs['tab']}
                        />
                        <label htmlFor="">New Tab</label>
                    </div>
                </div>
                <div className="search-box">
                    <input 
                        type="text" 
                        placeholder='Enter Url' 
                        onChange={inputHandler}
                        name="url"
                        value={inputs['url']}

                    />
                    <button onClick={()=>{buttonHandler("go")}}>Go</button>
                </div>
                <div className="paste">
                    <input 
                        type="text" 
                        placeholder='Enter text' 
                        onChange={inputHandler} 
                        name="text"
                        value={inputs['text']}
                    />
                    <button onClick={()=>{buttonHandler("paste")}}>Paste</button>
                </div>
            </div>
        </div>
    )
}

export default Search