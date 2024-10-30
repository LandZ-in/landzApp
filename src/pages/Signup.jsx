import React from 'react'
import {  Link } from 'react-router-dom'

const Signup = () => {
    return (
        <aside className='login-form-data signup-form-data'>
            <h1>Create Account</h1>
            <p>Signup to the realm of endless land possibilities</p>

            <form className="login-form">

                <label htmlFor="fullname">Fullname</label>
                <input type="text" id="fullname" placeholder="Fullname" />
                
                <label htmlFor="email">Email/ Mobile Number</label>
                <input type="text" id="email" placeholder="Email/ Mobile number" />

                <label htmlFor="set-password">Set Password</label>
                <input type="password" id="set-password" placeholder="6 characters, 1 Capital Letter" />
                <label htmlFor="confirm-password">Password</label>
                <input type="password" id="confirm-password" placeholder="6 characters, 1 Capital Letter" />

                <div className="form-footer">
                    <div>
                        <input type="checkbox" id="terms" className='terms' />
                        <label htmlFor="terms">I agree to the <a href="#">Terms & Policy</a></label>
                    </div>

                </div>

                <button type="submit" className="login-button"><Link to="/login">Sign Up </Link></button>

                <div className="social-login">
                    <button className="social-btn google"> <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google icon" /> Signup with Google</button>
                    <button className="social-btn apple"> <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" alt="apple logo" /> Signup with Apple</button>
                </div>

                <p className="signup-text">Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </aside>
    )
}

export default Signup