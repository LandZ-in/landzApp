import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import ProfileSidebar from '../components/ProfileSidebar';
import AccountSettings from './AccountSettings';
import NotificationSettings from './NotificationSettings';
import CommPreference from './CommPreference';
import PropertyPreferences from './PropertyPreferences';
import Breadcrumbs from '../../LandPost/components/Breadcrums';
import GetVerified from './GetVerified';
export default function ProfileSidebarMenuRoute() {
    console.log("in routes");
  return (
    <div>

    <div>
      <div style={{ display: 'flex' }}>
      <ProfileSidebar/>
      <div style={{ padding: '20px', flex: 1 }}>
        <Breadcrumbs />
        <Routes> <Route path="/" element={<Profile />} />
        <Route path="get-verified" element={<GetVerified />} />
          <Route path="account-settings" element={<AccountSettings />} />
          <Route path="notification-settings" element={<NotificationSettings />} />
          <Route path="communication-preferences" element={<CommPreference />} />
          <Route path="property-preferences" element={<PropertyPreferences />} />

        </Routes>
      </div>
    </div>
    </div>
    </div>
  )
}
