import React from 'react'
import LandPostSidebar from '../components/LandPostSidebar'
import { Routes, Route } from 'react-router-dom';
import BasicDetails from './BasicDetails';
import MarkOnMap from './MarkOnMap';
import LocationDetails from './LocationDetails';
import ImagesVideos from './ImagesVideos';
import PricingDetails from './PricingDetails';
import LandDetails from './LandDetails';
import Breadcrums from '../components/Breadcrums';
import UploadDocuments from './UploadDocuments';
export default function LandPostHome() {
    console.log("in slider");
  return (
    <div>
      <div style={{ display: 'flex' }}>
      <LandPostSidebar/>
      <div style={{ padding: '20px', flex: 1 }}>
      <Breadcrums/>
      <div className='mediumHeading' style={{marginBottom:"14px"}} >
                <span >Add New Listing</span>
       </div>
        <Routes>
          
          <Route path="/" element={<BasicDetails />} />
          <Route path="basic-details" element={<BasicDetails />} />
          <Route path="mark-your-property" element={<MarkOnMap />} />
          <Route path="location-details" element={<LocationDetails />} />
          <Route path="land-details" element={<LandDetails />} />
          <Route path="upload-documents" element={<UploadDocuments />} />
          <Route path="images-videos" element={<ImagesVideos />} />
          <Route path="pricing-details" element={<PricingDetails />} />
         
         
        </Routes>
      </div>
    </div>
    </div>
  )
}
