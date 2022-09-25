import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
const PublicAside = () => {
    return (
      <aside>
        <Link to="/">|| Home |</Link>
        <Link to="/about">| About |</Link>
        <Link to="/faqs">| Faqs |</Link>
        <Link to="/login">| Login |</Link>
        <Link to="/404">| Not Found ||</Link>
      </aside>
    );
  };
  const PrivateAside = () => {
    return (
      <aside>
        <Link to="/profile">| profile |</Link>
        <Link to="/task">| task |</Link>
      </aside>
    );
  }; 
 

 
const Aside = () => {
    const {authenticated} = useAuthContext()
    console.log(authenticated)
  return (
    <div>{authenticated?<PrivateAside/>:<PublicAside/>}</div>
  )
}

export default Aside