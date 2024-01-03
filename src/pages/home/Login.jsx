import React, { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/ui/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { authenticateUser } from '../../store/authSlice'
import { userLoign } from '../../api/user/user'
import './Auth.scss'
function Login() {
    const dispatch = useDispatch()
    const auth = useSelector(state=>state.auth)
    const [user,setUser] = useState({username:"rootrsk",password:"rootrsk"})

    const changeHandler = (e)=>{
        const { target : {name,value}} = e
        setUser((user)=>({...user,[name]:value}))
    }
    const submitHandler = async(e)=>{
        e.preventDefault()
        dispatch(authenticateUser({
            isAuthenticating: true,
        }))
        const res = await userLoign({data: user})
        if(res){
            localStorage.setItem("authToken",res.token)
            dispatch(authenticateUser({
                user: res.user,
                token : res.token,
                isAuthenticated: true,
                isAuthenticating: false,
            }))
        }else{
            dispatch(authenticateUser({
                isAuthenticating: false,
            }))
        }
    }
    return (
        <div className='login-page'>
            <form action="" onSubmit={submitHandler} className='login-div'>
                <div className="">
                    <Input
                        label="Username"
                        name="username"
                        type="text"
                        onChange={changeHandler}
                        value={user.username}
                    />

                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={changeHandler}

                    />
                    <Button>Login</Button>

                </div>
            </form>
        </div>
    )
}

export default Login