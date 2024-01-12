import React from 'react'
import portrait from './assets/jeev.jpg'
import './about.css'
import { Link } from 'react-router-dom'
const about = () => {
  return (
    <>
    <div className="header">
        <div className="logo"><Link to="" className="options">About me</Link></div>
        <div className="logo"><Link to="/" className="options">Register</Link></div>
        <div className="logo"><Link to="/quit" className="options">Quit</Link></div>
    </div>
    <div class="hero">
    <img src={portrait} alt = "My protrait"/>
    <div class = "details">
        <h1>Jeev Jacob George</h1>
        <h2>Btech CSE Student</h2>
        <h2>Sree Chitra Thirunal College of Engineering</h2>
        <div class="boxes">
            <div class ="box">
                <h3>Hobbies</h3>
                <ul id = "hobbies">
                    <li>Programming</li>
                    <li>Reading</li>
                    <li>Travelling</li>
                </ul>
            </div>
            <div class ="box">
                <h3>Projects</h3>
                <ul id = "hobbies">
                    <li> <a href="https://github.com/jeevjacobgeorge/django_attendance_predictor">Attendance Predictor</a></li>
                    <li> <a href="https://github.com/jeevjacobgeorge/employee_task_scheduler">Employee Task Scheduler</a></li>
                    <li> <a href="https://github.com/jeevjacobgeorge/gta_sandshores_hackathon">Stress Relief</a></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default about