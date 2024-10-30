import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
export default function LandPostSidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className="sidebar-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div className="sidebar" style={{ flex: 1 }}>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="./basic-details" className={` sidebar-link ${isActive('/admin-dashboard/land-listing/new-listing/basic-details') ? 'active' : ''}`}>
              Basic Details
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./mark-your-property" className={` sidebar-link ${isActive('/admin-dashboard/land-listing/new-listing/mark-your-property') ? 'active' : ''}`}>
              Mark your property
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./location-details" className={` sidebar-link ${isActive('/admin-dashboard/land-listing/new-listing/location-details') ? 'active' : ''}`}>
              Location Details
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./land-details" className={` sidebar-link ${isActive('/admin-dashboard/land-listing/new-listing/land-details') ? 'active' : ''}`}>
              Land Details
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./upload-documents" className={` sidebar-link ${isActive('/admin-dashboard/land-listing/new-listing/upload-documents') ? 'active' : ''}`}>
              Upload Documents
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./images-videos" className={` sidebar-link ${isActive('/admin-dashboard/land-listing/new-listing/images-videos') ? 'active' : ''}`}>
              Images & Videos
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./pricing-details" className={` sidebar-link ${isActive('/admin-dashboard/land-listing/new-listing/pricing-details') ? 'active' : ''}`}>
              Pricing & Other Details
            </Link>
          </li>
        </ul>
        <div class="progress-container">
          <div class="progress-title">10% Progress</div>
          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
          <div class="progress-subtitle">
            <span class="progress-status">Just Starting</span>—You're 10% Closer to a Live Listing
          </div>
        </div>
      </div>
    </div>
  )
}
