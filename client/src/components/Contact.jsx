
import { useNavigate } from 'react-router-dom'
import inbox1 from "../img/resized/inbox1.png"
import inbox2 from "../img/resized/inbox2.png"
import phn from "../img/md-phone.png"
import mail from "../img/md-email.png"
import address from "../img/address.gif"
import faceWithPhone from "../img/facewithphone.png"
import user from "../img/user.png"
import email from "../img/email.png"
import phone from "../img/phone.png"

import "./Contact.css"
import { useState, useEffect } from "react"
import axios from "axios"

const Contact = () => {

    const navigate = useNavigate();
    const [reciever, setReciever] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [userData, setUserData] = useState({});

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setReciever({ ...reciever, [name]: value })
    }

    const userContact = async () => {


        try {

            const res = await axios.get('/getData', {
                withCredentials: true,                // without this line cookie info wont be send to backend
            });

            const data = res.data;

            setUserData(data);


            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            //navigate('/login');


        }
    };




    useEffect(() => {

        userContact();      //we cannot have async func inside use-effect 

    }, []);



    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = reciever;
        console.log(name, email, phone, message, userData.email);

        try {



            await axios.post('/message', {
                name: name, email: email, phone: phone, message: message, semail: userData.email
            });

            alert("Message sent successfully")
            navigate('/contact');


        } catch (err) {
            console.log(err)
            alert(err)
        }

    }



    const deleteMessage = async (e) => { 
        
        try {



            await axios.post('/deleteMessage', {
                userID: userData._id,
                messID: e.target.id
            });

            setUserData({
                ...userData,
                messages: userData.messages.filter((message) => message._id !== e.target.id)
              });
            alert("Message is being deleted")
            navigate('/contact');


        } catch (err) {
            console.log(err)
            alert(err)
        }
    }


    const textAreaStyle = {
        height: '160px'
    }

    return (
        <div className='bg-dark-subtle background'>
            <div className="row px-4 py-4 container-fluid ">
                <div className="col-sm-4 mb-3 mb-sm-0  ">
                    <div className="card py-0">
                        <div className="card-body row">
                            <div className="col-sm-2 mb-3 mb-sm-0 ">
                                <img src={phn} alt="" />
                            </div>

                            <div className="col-sm-6 mb-3 mb-sm-0 container-fluid">
                                <h4>Phone</h4>
                                <div>{userData.phone}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mb-3 mb-sm-0  ">
                    <div className="card py-0 ">
                        <div className="card-body row">
                            <div className="col-sm-2 mb-3 mb-sm-0 ">
                                <img src={mail} alt="" />
                            </div>

                            <div className="col-sm-6 mb-3 mb-sm-0  container-fluid ">
                                <h4>Email</h4>
                                <div>{userData.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mb-3 mb-sm-0  ">
                    <div className="card py-0">
                        <div className="card-body row">
                            <div className="col-sm-2 mb-3 mb-sm-0 ">
                                <img src={address} alt="" />
                            </div>

                            <div className="col-sm-10 mb-3 mb-sm-0 container-fluid px-0 ">
                                <h4>Address</h4>
                                <div className="p-0">jahsjahsjahsjahsja asjhjash</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-around flex-wrap p-3">
                <div>
                    <img src={inbox2 } alt="" />
                </div>
                <div >
                    <h2 className='pt-5 mt-5'>Your MessageBox</h2>
                </div>

                <div>
                    <img src={inbox1 } alt="" />
                </div>
            </div>

            <div className="container d-flex flex-wrap gap-3 p-5  border shadow-lg">
               
                {(userData.messages) ? (
                    userData.messages.map((message, index) => (
                        <div key={index} className="card bg-info-subtle" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h4 className="card-title">Message {index + 1}</h4>
                                <p className="card-text">{message.body}</p>
                                <p className="card-text fw-light">From: {message.semail}</p>
                                <a href="#" className="btn btn-primary" id={message._id } onClick={deleteMessage}>Delete</a>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>No messages to display.</h1>
                )}
            </div> 


            <div className="container border shadow-lg mt-4 custom-height">
                <div className="row py-4 px-3">
                    <div className="col-md-6 py-4">
                        <h1>Get in Touch</h1>
                    </div>
                    <div className="col-md-6">
                        <img src={faceWithPhone} alt="" />
                    </div>

                </div>
                <form method='POST' onSubmit={PostData} >
                    <div className="row py-4 px-3">
                        <div className="form-group col-md-4">
                            <span className="input-group-text justify-content-center align-items-center" id="inputGroup-sizing-default">

                                <img src={user} alt="" />

                            </span>
                            <input type="text"
                                name="name"
                                autoComplete="off"
                                value={reciever.name}
                                onChange={handleInputs}
                                placeholder="Enter reciever's name"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" />

                        </div>

                        <div className="form-group col-md-4">
                            <span className="input-group-text justify-content-center align-items-center" id="inputGroup-sizing-default">
                                <img src={email} alt="" />
                            </span>
                            <input type="email"
                                name="email"
                                autoComplete="off"
                                value={reciever.email}
                                onChange={handleInputs}
                                placeholder="Enter reciever's email"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" />
                        </div>

                        <div className="form-group col-md-4">
                            <span className="input-group-text justify-content-center align-items-center" id="inputGroup-sizing-default">
                                <img src={phone} alt="" />
                            </span>
                            <input type="text"
                                name="phone"
                                autoComplete="off"
                                value={reciever.phone}
                                onChange={handleInputs}
                                placeholder="Enter reciever's phone no."
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" />
                        </div>


                    </div>

                    <div class="form-floating px-1">

                        <textarea
                            class="form-control bg-body-tertiary"
                            name='message'
                            autoComplete="off"
                            value={reciever.message}
                            onChange={handleInputs}
                            style={textAreaStyle}
                            placeholder="Leave a comment here"
                            id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">🤠  leave a message</label>
                    </div>

                    <div className="py-3">
                        <button type="submit" className="btn btn-outline-dark btn-block">Submit</button>
                    </div>

                </form>
            </div>


        </div >
    )
}

export default Contact
