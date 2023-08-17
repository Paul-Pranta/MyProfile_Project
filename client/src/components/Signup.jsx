
import "./Signup.css"
import { useState } from "react"
import { NavLink , useNavigate} from 'react-router-dom'

import register from "../img/resized/register.png"
import user1 from "../img/user.png"
import email1 from "../img/email.png"
import phone1 from "../img/phone.png"
import job1 from "../img/job.png"
import password1 from "../img/password.png"
import cpassword1 from "../img/cpassword.png"
import axios from "axios"

const Signup = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => { 
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }

    async function PostData(e) { 
        
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        try {
            await axios.post('http://localhost:3000/register', {
                name: name, email:email, phone : phone, work: work, password: password, cpassword: cpassword
            });

            alert("Registration successful")
            navigate('/login');


        } catch (err) { 
            alert(err)
        }


    }



    return (

        <div className="d-flex justify-content-center align-items-center background vh-100 vw-90 ">


            <div className=" row py-4 my-2 container-fluid mt-0  background mx-0 px-0  ">

                <div className="col-lg-6 mb-4 mb-sm-0container ">

                    <div className=" py-0 mt-5 pt-3  paddingleft">
                        <h2 className="text-center mb-4 ">Sign Up</h2>
                        <form onSubmit={PostData}>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">

                                    <img src={user1} alt="" />

                                </span>
                                <input type="text"
                                    name="name"
                                    placeholder='Enter your name'
                                    className="form-control"
                                    autoComplete="off"
                                    value={user.name}
                                    onChange={handleInputs}
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <img src={email1} alt="" />
                                </span>
                                <input type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInputs}
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default"

                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <img src={phone1} alt="" />
                                </span>
                                <input type="text"
                                    name="phone"
                                    placeholder="Enter your phone no."
                                    autoComplete="off"
                                    value={user.phone}
                                    onChange={handleInputs}
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <img src={job1} alt="" />
                                </span>
                                <input type="text"
                                    name="work"
                                    placeholder="Enter your profession"
                                    autoComplete="off"
                                    value={user.work}
                                    onChange={handleInputs}
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <img src={password1} alt="" />
                                </span>
                                <input type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInputs}
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">
                                    <img src={cpassword1} alt="" />
                                </span>
                                <input type="password"
                                    name="cpassword"
                                    placeholder="Confirm your password"
                                    autoComplete="off"
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-outline-info btn-block"
                            >
                                Register
                            </button>
                        </form>

                    </div>



                </div>





                <div className="col-lg-6  mt-5 pt-5  ">

                    <div className=" py-0">

                        <figure  >
                            <img src={register} alt="" />
                        </figure>

                        <NavLink className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/login">I am already registered</NavLink>

                    </div>



                </div>

            </div>



        </div>




    )
}

export default Signup