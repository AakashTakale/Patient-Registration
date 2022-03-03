import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import '../../App.css'
import './Doctor.css'

const Doctor = () => {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const patientsFromServer = await fetchPatients()
            setPatients(patientsFromServer)
        }
        getUsers()
    }, [])

    const fetchPatients = async () => {
        const res = await fetch('http://localhost:5000/patients')
        const data = await res.json()

        return data
    }

    return (
        <div className="container">
            <div className="header">
                <h4>List of Patients Appointment</h4>
                <Link to='/' className="home-link">Home Page</Link>
                {/* <a href='/Patient-Registration' className="home-link">Home Page</a> */}
            </div>
            <div className="table-responsive-md">
                <table className="table table-striped">
                    <thead className="thead-style">
                        <tr><th>First Name</th>
                            <th>Last Name</th>
                            <th>DOB</th>
                            <th>Phone No</th>
                            <th>Email</th>
                            <th>Appointment</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-style">
                        {patients.length > 0 ? (patients.sort((a, b) => { return new Date(a.appointment) - new Date(b.appointment) })
                            .map((patient) => (
                                <tr key={patient.id}>
                                    <td>{patient.firstName}</td>
                                    <td>{patient.lastName}</td>
                                    <td>{patient.dob}</td>
                                    <td>{patient.phone}</td>
                                    <td>{patient.email}</td>
                                    <td>{new Date(patient.appointment).toLocaleString()}</td>
                                </tr>
                            ))) : (<tr><td colSpan="6" className="no-appointments">No Appointments Scheduled</td></tr>)}
                        
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Doctor