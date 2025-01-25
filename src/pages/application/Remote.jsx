import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Remote.scss"
function Remote(props) {
    const dispatch = useDispatch()
    const arduino = useSelector(state=>state?.arduino)
    const auth = useSelector(state=>state?.auth)
    const socket = useSelector(state=>state?.socket?.socket)
    const keyHandler = (key) => {
        console.log(key)
        if(socket){
            socket.emit("trigger-remote-keys",{key,username:auth?.user?.username})
        }
    }
    const colorHandler = ({color}) => {
        if(socket){
            socket.emit("strip-color-change",{color})
        }
    }
    const keys = {
        "left": "◀",
        "right": "▶",
        "center": "&#9655;",
        "up": "▲",
        "down": "&#9660;",
        "info": "&#120102;",
        "power": "&#11044;"
    }
    return (
        <div className='remote'>
            <div className="remote-control">
                <div className="keys-container">
                    {
                        Object.entries(keys ?? {}).map(([k,v])=>{
                            return (
                                <button 
                                    className={k} 
                                    dangerouslySetInnerHTML={{ __html: v }}
                                    onClick={()=>keyHandler(k)}
                                ></button>
                            )
                        })
                    }
                </div>
                <div className="bottom-keys">
                </div>
            </div>
        </div>
    )
}
export default Remote
