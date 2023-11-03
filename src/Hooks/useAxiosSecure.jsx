import axios from "axios"
import { useContext, useEffect } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
export default function useAxiosSecure() {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log(error.response.status)
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch()
            }
        })
    }, [])
    return axiosSecure;
}
