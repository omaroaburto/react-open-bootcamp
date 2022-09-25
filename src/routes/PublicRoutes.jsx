import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'; 
import {useAuthContext} from '../context/AuthContext';
const PublicRoutes = () => {
  const {authenticated} = useAuthContext();
  if (authenticated) return (<Navigate to='/profile'/>);
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PublicRoutes