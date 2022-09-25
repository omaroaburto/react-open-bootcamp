import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'; 
import {useAuthContext} from '../context/AuthContext';

export const PrivateRoutes = () => {
  const {authenticated} = useAuthContext();
  if (!authenticated) return (<Navigate to='/login'/>);
  return (
    <div>
      <Outlet/>
    </div>
  )
}
export default PrivateRoutes