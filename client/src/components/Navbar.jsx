
import 'bootstrap/dist/css/bootstrap.css'

import './Navbar.css'

import logo from '../img/mylogo.png'

import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <>

            <nav class="navbar bg-dark border-bottom border-body navbar-expand-lg topbottom " data-bs-theme="dark">
                <div class="container-fluid background" style={{backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)"}}>
                    <NavLink className="navbar-brand white" href="#">



                        <img src={logo} alt="" className='object-fit-sm-contain border rounded' />
                        MyProfile


                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <NavLink className="nav-link active white " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="login">Login</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/signup">Registration</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar