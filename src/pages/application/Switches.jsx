import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SwitchButton from 'components/ui/button/SwitchButton'
function Switches(props) {
    const dispatch = useDispatch()
    const arduino = useSelector(state=>state?.arduino)
    const auth = useSelector(state=>state?.auth)
    const socket = useSelector(state=>state?.socket?.socket)
    const switchHandler = ({status,switch_no}) => {
        if(socket){
            socket.emit("switch-trigger",{switch_no,status,username:auth?.user?.username})
        }
    }
    const colorHandler = ({color}) => {
        if(socket){
            socket.emit("strip-color-change",{color})
        }
    }
    return (
        <div>
            <div className='button_containerss'>
                {
                    Object.entries(arduino?.switches??{}).map(([key,button])=>{
                        return(
                            <div className="third" key={key}>
                                <SwitchButton
                                    {...button}
                                    onClick={switchHandler}
                                />
                            </div>    
                        )
                    })
                }
            </div>
            <div className='button_containerss'>
                {
                    Object.entries(arduino?.colors??{}).map(([key,button])=>{
                        return(
                            <div className="third" key={key}>
                                <SwitchButton
                                    // {...button}
                                    label={key}
                                    // onClick={switchHandler}
                                    onClick={()=>colorHandler({color:key})}
                                />
                            </div>    
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Switches
