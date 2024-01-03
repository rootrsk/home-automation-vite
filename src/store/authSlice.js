import { createSlice } from '@reduxjs/toolkit'
import { userLoign } from "../api/user/user";

const initialState = { 
    isAuthenticated:false,
    isAuthenticating: false,
    token: null,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticationDetails(state,payload){
            console.log(payload)
            if(payload)state = {...state,...payload}
        },
        checkAuthentication(){
            
        },
        authenticateUser(state,action){
            console.log(action)
            if(action.payload)
            state = {...state,...action.payload}
            return state
        },
        deauthenticateUser(state,action){
            
        }
        
    },
})

export const { 
    checkAuthentication, authenticateUser, deauthenticateUser,setAuthenticationDetails

} = authSlice.actions
export default authSlice.reducer