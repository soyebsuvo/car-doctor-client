import { useContext } from "react"
import { AuthContext } from "../Components/AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export default function PrivateRoute({children}) {
    const location = useLocation();
    // console.log(location)
    const {user , loading} = useContext(AuthContext);
    if(loading) return <p>Loading .....</p>
    if(user){
        return children;
    }
  return <Navigate state={location.pathname} to="/login"></Navigate>
}
PrivateRoute.propTypes = {
    children : PropTypes.node
}