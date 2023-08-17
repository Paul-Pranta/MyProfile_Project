
import "./Signup.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react"
import login from "../img/resized/login.png"
import email2 from "../img/email.png"
import password2 from "../img/password.png"
import axios from "axios"




const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/signin', {
                email: email,
                password: password,
            }, {
                withCredentials: true,
            });

            alert("Login successful");


            navigate('/');


        } catch (err) {
            alert(err)
        }

    }

    return (
        <div className="bg-success-subtle vh-100 vw-90 mt-0 d-flex justify-content-center align-items-center" style={{backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"}}>

            <div className=" " >

                <div className=" row  ">

                    <div className="col-lg-6 mb-4 mb-sm-0">

                        <figure>
                            <img src={login} alt="" />
                        </figure>

                        <NavLink className=" link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/signup">Not registered yet?</NavLink>

                    </div>



                    <div className="col-lg-6 mb-4 mb-sm-0">
                        <h2 className="text-center mb-4">Login</h2>
                        <form method="POST" onSubmit={loginUser}>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <img src={email2} alt="" />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <img src={password2} alt="" />
                                </span>
                                <input type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>

                            <button type="submit"
                                name="signup"
                                className="btn btn-outline-success btn-block" >Register
                            </button>
                        </form>


                    </div>

                </div>



            </div>

        </div>

    )
}

export default Login

