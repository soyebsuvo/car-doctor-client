import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
// import axios from 'axios';
export default function Login() {
    // const navigate = useNavigate();
    // const location = useLocation()
    const { loginUser } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const user = {email}
        loginUser(email , password)
        .then(res => {
            console.log(res.user)
            // navigate(location?.state ? location?.state : "/")
            // fetch(`https://car-doctor-server-ten-jade.vercel.app/jwt`)
            // axios.post(`https://car-doctor-server-ten-jade.vercel.app/jwt` ,  user , {
            //     withCredentials : true
            // })
            // .then(res => {
            //     console.log(res.data)
            // })
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center mt-3 font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-orange-600 text-white" type="submit" value="Login" />
                        </div>
                        <p className='text-center'>Do not have any account? <Link className='text-orange-500 font-bold' to="/signup">Sign Up</Link></p>
                    </form>

                </div>
            </div>
        </div>
    )
}
