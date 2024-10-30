import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from "../images/testimonial.png"
import logoImg from '../images/logo.png'
import {
  SettingOutlined, HomeOutlined, UpOutlined, DownOutlined,
  BarChartOutlined, FileDoneOutlined, CommentOutlined, DollarOutlined,
  UserOutlined, LikeOutlined, LogoutOutlined
} from "@ant-design/icons";
import { useLocation } from 'react-router-dom';

export default function Sidebar() {
  const [isDashboardOpen, setIsDashboardOpen] = React.useState(false);
  const [isListingOpen, setIsListingOpen] = React.useState(false);
  const [isSlidebarOpen, setIsSidebarOpen] = React.useState(false);

  const location = useLocation();

  const isNewListRoute = location.pathname.startsWith('/admin-dashboard/land-listing/new-listing') || location.pathname.startsWith('/admin-dashboard/profile');

  const toggleDashboardMenu = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const toggleListingMenu = () => {
    setIsListingOpen(!isListingOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSlidebarOpen);
  };
  const isActive = (path) => location.pathname === path;
  return (
    <div className="sidebar-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div className='logoContainer'>
        <div className='logoImg' style={{ padding: !isNewListRoute || isSlidebarOpen ? "0" : "10px 0 0 10px" }} onClick={toggleSidebar}>
          <img src={logoImg} alt='logo' />
        </div>
        {(!isNewListRoute || isSlidebarOpen) && (<div className='logoName'>
          <span>Landz App</span>
        </div>)}
      </div>
      <div className="sidebar" style={{ flex: 1, width: !isNewListRoute || isSlidebarOpen ? "280px " : "auto" }}>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="./home" className={` sidebar-link ${isActive('/admin-dashboard/home') ? 'active' : ''}`}>
              <HomeOutlined className='sidebar-icon' /> {(!isNewListRoute || isSlidebarOpen) && (<span className='menuLabel'>Home</span>)}
            </Link>
          </li>
          <li className="sidebar-item">
            <div onClick={toggleDashboardMenu} className="sidebar-link sidebar-link-list">
              <div>
                <BarChartOutlined className='sidebar-icon' /> {(!isNewListRoute || isSlidebarOpen) && (<span className='menuLabel'>Dashboard</span>)}
              </div>
              {(!isNewListRoute || isSlidebarOpen) && (isDashboardOpen ? <UpOutlined className="toggle-icon" /> : <DownOutlined className="toggle-icon" />)}
            </div>
            {(isSlidebarOpen || !isNewListRoute) && isDashboardOpen && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="./overview" className={` sidebar-link ${isActive('/admin-dashboard/overview') ? 'active' : ''}`}>Overview</Link>
                </li>
                <li className="submenu-item">
                  <div className={`notification-menu sidebar-link ${isActive('/admin-dashboard/notifications') ? 'active' : ''}`}>
                    <Link to="./notifications" >Notifications</Link>
                    <span className='notification-count'>10</span>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li className="sidebar-item">
            <div onClick={toggleListingMenu} className="sidebar-link sidebar-link-list">
              <div>
                <FileDoneOutlined className='sidebar-icon' />{(!isNewListRoute || isSlidebarOpen) && (<span className='menuLabel'> My Listings</span>)}
              </div>
              {(!isNewListRoute || isSlidebarOpen) && (isListingOpen ? <UpOutlined className="toggle-icon" /> : <DownOutlined className="toggle-icon" />)}
            </div>
            {(isSlidebarOpen || !isNewListRoute) && isListingOpen && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="./property-listing" className={`sidebar-link ${isActive('/admin-dashboard/property-listing') ? 'active' : ''}`}>Property Listing</Link>
                </li>
                <li className="submenu-item">
                  <Link to="./land-listing" className={`sidebar-link ${isActive('/admin-dashboard/land-listing') ? 'active' : ''}`}>Land Listing</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="sidebar-item">
            <Link to="./interactions" className={`sidebar-link ${isActive('/admin-dashboard/interactions') ? 'active' : ''}`}>
              <CommentOutlined className='sidebar-icon' /> {(!isNewListRoute || isSlidebarOpen) && (<span className='menuLabel'>Interactions</span>)}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./leads" className={`sidebar-link ${isActive('/admin-dashboard/leads') ? 'active' : ''}`}>
              <UserOutlined className='sidebar-icon' />{(!isNewListRoute || isSlidebarOpen) && (<span className='menuLabel'> Leads</span>)}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./subscription" className={`sidebar-link ${isActive('/admin-dashboard/subscription') ? 'active' : ''}`}>
              <DollarOutlined className='sidebar-icon' />{(!isNewListRoute || isSlidebarOpen) && (<span className='menuLabel'> Subscription</span>)}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./legal-support" className={`sidebar-link ${isActive('/admin-dashboard/legal-support') ? 'active' : ''}`}>
              <LikeOutlined className='sidebar-icon' /> {(!isNewListRoute || isSlidebarOpen) && (<span className='menuLabel'>Legal Advise & Support</span>)}
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./profile" className={`sidebar-link ${isActive('/admin-dashboard/profile') ? 'active' : ''}`}>
              <SettingOutlined className='sidebar-icon' />{(!isNewListRoute || isSlidebarOpen) && (<span className='menuLabel'> Profile Settings</span>)}
            </Link>
          </li>
        </ul>
      </div>

      {/* Profile Section at Footer */}
      <div className="profileLogout" style={{ flexDirection: !isNewListRoute || isSlidebarOpen ? "row" : "column", gap: !isNewListRoute || isSlidebarOpen ? "0" : "18px" }}>
        <img
          src={profileImg}
          alt="Profile"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',

            objectFit: 'cover',
          }}
        />
        {(!isNewListRoute || isSlidebarOpen) && (<div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>John Doe</span>
          <span style={{ fontSize: '14px', color: '#888' }}>johndoe@emp.com</span>
        </div>)}

        <div className='logoutContainer'><Link to='/'><LogoutOutlined /></Link></div>
      </div>
    </div>
  );
}
