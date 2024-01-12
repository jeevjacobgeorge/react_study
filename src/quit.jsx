import React from 'react'
import styles from './quit.module.css'
import { Link } from 'react-router-dom'
const quit = () => {
  return (
    <>
        <div className="header">
            <div className="logo"><Link to="/about" className="options">About me</Link></div>
            <div className="logo"><Link to="/" className="options">Register</Link></div>
            <div className="logo"><Link to="" className="options">Quit</Link></div>
        </div>

        <div className={styles.container}>
            <h1>Goodbye!</h1>
            <p>Thank you for using our service. We hope to see you again!</p>
        </div>
    </>
  )
}

export default quit