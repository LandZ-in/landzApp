import React from 'react'
import searchIcon from '../images/search.png';
import landIcon from '../images/land.png'
import noPersonalVisitsImg from '../images/no-personal-visits.png'
import {
  FilterOutlined
} from "@ant-design/icons";
import { Link } from 'react-router-dom';
export default function PersonalVisits() {
  let emptyData = {};
  return (
    <div>
      {emptyData ? (<div className="personalVisitContainer">
        <div>
          <div className='callsHead'>
            <div>
              Scheduled Personal Visits
            </div>
            <div className='callsIcons'>
              <FilterOutlined className='iconGrey' />
            </div>
          </div>

        </div>
        <div className='callsList'>

          <div class="search-filter-container" style={{ position: "relative", marginTop: "0px !important" }}>
            <div class="search-input-container">
              <input type="text" id="searchInput" placeholder="Search by number/ name" class="search-input small" />
              <div class="search-icon">
                <img src={searchIcon} alt='' />
              </div>
            </div>
          </div>
          <div className='scheduleVisitsByDays'>
            <div className='callsDate'>
              <span>July 2024</span>
            </div>
            <div class="scheduleVisitcard">
              <div className='projectNameContainer'>
                <div class="projectImagePlaceholder">
                  <img src={landIcon} alt='land' />
                </div>
                <div class="projectContent">
                  <div >
                    <div className='projectName'>
                      <span >Property/ Project Name</span>
                    </div>
                  </div>
                  <div className='subProjectName'>
                    <span>Location</span>

                  </div>

                </div>
              </div>

              <div className='projectActions'>
                <div className='projectLink'>
                  <Link to="#">View on Map</Link>
                </div>
                <div class="buttons">
                  <button class="secondaryBtn">Cancel</button>
                  <button class="blackBtn">Reschedule</button>
                </div>
              </div>

            </div>
          </div>

          <div className='scheduleVisitsByDays'>
            <div className='callsDate'>
              <span>July 2024</span>
            </div>
            <div class="scheduleVisitcard">
              <div className='projectNameContainer'>
                <div class="projectImagePlaceholder">
                  <img src={landIcon} alt='land' />
                </div>
                <div class="projectContent">
                  <div >
                    <div className='projectName'>
                      <span >Property/ Project Name</span>
                    </div>
                  </div>
                  <div className='subProjectName'>
                    <span>Location</span>

                  </div>

                </div>
              </div>

              <div className='projectActions'>
                <div className='projectLink'>
                  <Link to="#">View on Map</Link>
                </div>
                <div class="buttons">
                  <button class="secondaryBtn">Cancel</button>
                  <button class="blackBtn">Reschedule</button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>) : (<div className='noVisits'>
        <img src={noPersonalVisitsImg} alt='no visits' />
      </div>)}
    </div>
  )
}
