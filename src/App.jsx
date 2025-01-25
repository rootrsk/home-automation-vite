import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeRoutes from 'routes/HomeRoutes';
import { useDispatch } from 'react-redux';
import { userProfile } from 'api/user/user';
import { authenticateUser } from 'store/authSlice';
import ApplicationRoutes from 'routes/ApplicationRoutes';
import NotFound from './pages/home/NotFound';

function App() {
  const dispatch = useDispatch()
  const authUser = async(token)=>{
    const res = await userProfile()
    if(res){
      dispatch(authenticateUser({
        user: res.user,
        token : token,
        isAuthenticated: true,
        isAuthenticating: false,
      }))
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if(token)authUser(token)
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRoutes />} index={true} />
          <Route path="/app/*" element={<ApplicationRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
