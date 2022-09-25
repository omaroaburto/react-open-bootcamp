import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";
import PropTypes from "prop-types";

export const MY_AUTH_APP = {
  email: "oaburto.freelance@gmail.com",
  password: "Abc.1234yuyu",
};
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    !window.localStorage.getItem("permission") ?? false
  );
  const login = useCallback(() => {
    window.localStorage.setItem("permission", true); 
    setAuthenticated(true);
  }, []);
  
  const logout = useCallback(() => {
    window.localStorage.removeItem("permission");
    setAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      authenticated,
    }),
    [login, logout, authenticated]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
