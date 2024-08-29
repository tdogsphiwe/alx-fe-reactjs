// src/pages/Profile.jsx
import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="*" element={<h2>Select a section</h2>} />
      </Routes>
    </div>
  );
}

export default Profile;
