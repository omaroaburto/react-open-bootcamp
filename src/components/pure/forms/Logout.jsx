import { useAuthContext } from "../../../context/AuthContext";


const Logout = () => {
  const { logout } = useAuthContext(); 
  return  <button className="btn btn-dark" onClick={()=>logout()}>Logout</button>;
}

export default Logout
