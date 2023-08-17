
import { useNavigate } from 'react-router-dom'
import Profile1 from "../img/resized/profile1.png";
import pranta from "../img/resized/man.png";
import { useEffect, useState } from 'react';
import axios from "axios"




const About = () => {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState
        ('home');
    
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {


        try {
            const res = await axios.get('/about', {
                withCredentials: true,                // without this line cookie info wont be send to backend
            });

            const data = res.data;

            console.log(data);

            setUserData(data);

            if (!res.status === 200) { 
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            navigate('/login');
        }
    };




    useEffect(() => {

        callAboutPage();      //we cannot have async func inside use-effect 

    }, []);




    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className='bg-primary-subtle vh-100 vw-90 py-5 '>
            <div className="container border shadow-sm alert alert-info shadow-lg my-5">

                <form >
                    <div className="row">
                        <div className="col-md-4 ">
                            <img className="img-fluid" src={userData.name === "Pranta Paul" ? pranta: Profile1  } alt="" />
                        </div>
                        <div className="col-md-6">

                            <div className="container ">
                                <h2 className="fw-bold">{userData.name }</h2>
                                <h5 className="text-muted">{userData.work }</h5>
                                <p className="profile-rating mt-3 mb-5"> RANKING: <span>1/10</span></p>

                                <ul className="nav nav-tabs fw-bold" role="tablist">
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                                            id="home-tab"
                                            onClick={() => handleTabClick('home')}
                                            role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                                            id="profile-tab"
                                            onClick={() => handleTabClick('profile')}
                                            role="tab"> Timeline</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="button" name="btnAddMore" className="profile-edit-btn btn btn-info" value="Edit Profile" />
                        </div>


                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work fw-medium">
                                <p className="mt-4"><h3>Work link</h3></p>
                                <div className="mt-4">
                                    <a className="link-primary" href="https://www.youtube.com/channel/UC0uM9BEziELSdlSt8BoWcDA">Youtube</a><br />
                                </div>
                                <div className="mt-3">
                                    <a className="link-success" href="https://www.youtube.com/channel/UC0uM9BEziELSdlSt8BoWcDA">Instagram</a><br />
                                </div>
                                <div className="mt-3">
                                    <a className="link-danger" href="https://www.youtube.com/channel/UC0uM9BEziELSdlSt8BoWcDA">Facebook</a><br />
                                </div>
                                <div className="mt-3">
                                    <a className="link-warning" href="https://www.youtube.com/channel/UC0uM9BEziELSdlSt8BoWcDA">Github</a><br />
                                </div>
                                <div className="mt-3">
                                    <a className="link-info" href="https://www.youtube.com/channel/UC0uM9BEziELSdlSt8BoWcDA">Linkdin</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-8 pl-5 about-info alert alert-primary bg-success p-2 text-dark bg-opacity-10">

                            <div className="tab-content profile-tab fw-medium" id="myTabContent ">
                                <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row ">
                                        <div className="col-md-6">
                                            <label  > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>93283923927328739279</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.name }</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.email }</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.phone}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.work }</p>
                                        </div>
                                    </div>
                            

                                </div>

                                <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>
                                                Experience
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                Fresher
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>
                                                Experience
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                Fresher
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>
                                                Experience
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                Fresher
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>
                                                Experience
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                Fresher
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>
                                                Experience
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p> class
                                                Fresher
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>
                                                Experience
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                Fresher
                                            </p>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default About;

