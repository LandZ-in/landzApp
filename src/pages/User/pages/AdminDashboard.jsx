import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import "../admin.css";

import PropertyListing from './PropertyListing';
import Home from './Home';
import Interactions from "./Interactions";
import Subscription from './Subscription';
import LegalSupport from './LegalSupport';
import AccountSettings from '../Profile/Pages/AccountSettings';
import CommPreference from '../Profile/Pages/CommPreference';
import NotificationSettings from '../Profile/Pages/NotificationSettings';
import Leads from './Leads';
import Profile from '../Profile/Pages/Profile';
import PropertyPreferences from '../Profile/Pages/PropertyPreferences';
import LandListRoute from './LandListRoute';
import ProfileSidebarMenuRoute from '../Profile/Pages/ProfileSidebarMenuRoute';
import Notifications from './Notifications';


export default function adminDashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="overview" element={<Home />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="property-listing" element={<PropertyListing />} />
          <Route path="land-listing/*" element={<LandListRoute />} />
          <Route path="interactions" element={<Interactions />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path='legal-support' element={<LegalSupport />} />
          <Route path="interactions" element={<Interactions />} />
          <Route path="leads" element={<Leads />} />
          <Route path="profile/*" element={<ProfileSidebarMenuRoute/>} />
        </Routes>
      </div>
    </div>
  );
}
