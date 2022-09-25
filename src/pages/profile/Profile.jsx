import React from "react";
import { useParams } from "react-router-dom";  
import Logout from "../../components/pure/forms/Logout";

const ProfilePage = () => { 
  const { username } = useParams(); 
  return (
    <div>
      <h4>Helo, {username}</h4>
      <Logout/>
    </div>
  );
};

export default ProfilePage;
