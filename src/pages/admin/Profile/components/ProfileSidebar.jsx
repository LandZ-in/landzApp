import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
export default function ProfileSidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;


  return (
    <div>
         <div className="sidebar-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <div className="sidebar" style={{ flex: 1 }}>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="./" className={` sidebar-link ${isActive('/admin-dashboard/profile/') ? 'active' : ''}`}>
          Profile
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="./account-settings" className={` sidebar-link ${isActive('/admin-dashboard/profile/account-settings') ? 'active' : ''}`}>
          Account Settings
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="./notification-settings" className={` sidebar-link ${isActive('/admin-dashboard/profile/notification-settings') ? 'active' : ''}`}>
          Notification Settings
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="./communication-preferences" className={` sidebar-link ${isActive('/admin-dashboard/profile/communication-preferences') ? 'active' : ''}`}>
          Communication Preferences
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="./property-preferences" className={` sidebar-link ${isActive('/admin-dashboard/profile/property-preferences') ? 'active' : ''}`}>
          Property Preferences
          </Link>
        </li>
      </ul>
    </div>
  </div>
    </div>
  )
}
