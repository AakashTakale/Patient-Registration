import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { validateForm, formatPhoneNumber } from "./helperFunctions";
import './Patient.css'

const Patient = () => {
    let userObj = {
        id: null,
        firstName: '',
        lastName: '',
        dob: '',
        phone: '',
        email: '',
        appointment: ''
    }
    const [userData, setUserData] = useState(userObj)
    const [formErrors, setFormErrors] = useState({})

    const addPatient = async (record) => {
//         const url = 'http://localhost:5000/patients'
        const url = 'https://my-json-server.typicode.com/AakashTakale/patient-registration/patients'
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(record)
        })

        const data = await res.json()
        console.log(data)
        setUserData(userObj)
    }
    const handleUserChange = (e) => {
        if (e.target.name === "phone") {
            const formattedPhoneNumber = formatPhoneNumber(e.target.value);
            e.target.value = formattedPhoneNumber;
        }
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let generateID = Date.now()
        userData.id = generateID
        console.log("Record: ", userData)
        const checkFormValidation = validateForm(userData);
        setFormErrors(checkFormValidation)
        const dt = new Date(userData.appointment).toLocaleString()
        if (Object.keys(checkFormValidation).length === 0) {
            alert(`Hi ${userData.firstName}!\nYour appointment has been confirmed for ${dt}.\nThank you and we will see you soon!`)
            addPatient(userData)
        }
    }

    return (
        <div className="container">
            <div className="header">
                <h4>Patient Registration Form</h4>
                <Link to='/' className="home-link">Home Page</Link>
                {/* <a href='/Patient-Registration' className="home-link">Home Page</a> */}
            </div>

            <form onSubmit={handleSubmit}>
                <div className="container registration-form">
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Eg. John"
                                name="firstName"
                                id="firstName"
                                value={userData.firstName}
                                onChange={handleUserChange}
                            />
                            <p className="error-message">{formErrors.firstName}</p>
                        </div>
                        <div className="col form-group">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Eg. Doe"
                                name="lastName"
                                value={userData.lastName}
                                onChange={handleUserChange}
                            />
                            <p className="error-message">{formErrors.lastName}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="email" className="form-label">Email ID</label>
                            <input type="email"
                                className="form-control"
                                placeholder="abc@xyz.com"
                                name="email"
                                value={userData.email}
                                onChange={handleUserChange}
                            />
                            <p className="error-message">{formErrors.email}</p>
                        </div>
                        <div className="col form-group">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="123-456-7890"
                                name="phone"
                                value={userData.phone}
                                onChange={handleUserChange}
                            />
                            <p className="error-message">{formErrors.phone}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                name="dob"
                                value={userData.dob}
                                onChange={handleUserChange}
                            />
                            <p className="error-message">{formErrors.dob}</p>
                        </div>
                        <div className="col form-group">
                            <label htmlFor="appointment" className="form-label">Appointment Day/Time</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                name="appointment"
                                value={userData.appointment}
                                onChange={handleUserChange}
                            />
                            <p className="error-message">{formErrors.appointment}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary" id="submitBtn">Submit</button>
                </div>
            </form>
        </div >
    )
}

export default Patient
