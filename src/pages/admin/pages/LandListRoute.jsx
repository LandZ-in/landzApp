import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandList from './LandList';
import LandPostHome from '../LandPost/pages/LandPostHome';
export default function LandListRoute() {
  return (
    <div>
       <Routes>
      <Route path="/" element={<LandList />} />
      <Route path="new-listing/*" element={<LandPostHome/>} />
    </Routes>
    </div>
  )
}
