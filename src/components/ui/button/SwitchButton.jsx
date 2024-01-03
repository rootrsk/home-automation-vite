import './SwitchButton.scss'
// import { IconButton } from '@material-ui/core';
// import { PowerSettingsNew } from '@material-ui/icons';
import { IoPowerSharp } from "react-icons/io5";
function SwitchButton({onClick,status,label,switch_no}) {
    return (
        <div>
            <div className='switch_button_wrapper'>
                <div className='led-container'>
                    <div className={status?'led-green' : 'led-off'}></div>
                </div>
                {/* <IconButton 
                    className={buttonStatus?'button2':'button'} 
                    onClick={()=>onClick(buttonNumber,!buttonStatus)}
                >
                    <PowerSettingsNew 
                        className={buttonStatus?'icon_button':'icon_button2'} 
                    />  
                </IconButton> */}
                <button 
                    // className='button-on' 
                    className={status?'button-on':'button'} 
                    onClick={()=>onClick({status:!status,switch_no})}
                >
                    <IoPowerSharp />
                </button>
                <p className={status ?'button_text':'button_text2'}>{label}</p>
            </div>
        </div>
    )
}

export default SwitchButton
