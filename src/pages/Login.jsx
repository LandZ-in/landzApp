import React from 'react'
import backgroundImage from '../images/login.jpg'
import '../style.css'
import { Outlet } from 'react-router-dom'

const Login = () => {

  const leftSection = {
    background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${backgroundImage}) no-repeat center center`,
  }
  return (
    <div className="login-background">
      <div className="left-section" style={leftSection}>
        <div className="content">
          <h1>Discover your perfect plot</h1>
          <p>Explore the possibilities and uncover your perfect plot with us. Whether it's a serene countryside retreat, an urban oasis, or a picturesque piece of wilderness, our platform is your key to finding the ideal land. Start your journey now, and let the discovery of your dream property begin!</p>
        </div>
      </div>
      <div className="right-section">
        <Outlet />
      </div>
    </div>
  );
}

export default Login