import React from 'react'
import searchIcon from '../images/search.png';
import noCallsImg from '../images/no-calls.png'
import { FaCheck } from "react-icons/fa";
import {
  FilterOutlined
} from "@ant-design/icons";
export default function Calls() {
  const calls = [
    { id: 1, name: 'M. Sharma', number: '90XXXXXXXX' },
    { id: 2, name: 'M. Sharma', number: '90XXXXXXXX' },
    { id: 3, name: 'M. Sharma', number: '90XXXXXXXX' },
  ];
  let emptyData = {};
  return (
    <div>
      {emptyData ? (
        <div className="callsContainer">
        <div>
          <div className='callsHead'>
            <div>
              Calls
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
          <div className='logsByDays'> 
            <div className='callsDate'>
            <span>July 2024</span>
          </div>

            <ul>
              {calls.map(calls => (
                <li key={calls.id} >
                  <div className="callsItem" >

                    <div className="profileInitialsCalls">
                      {calls.name.split(' ').map((n) => n[0]).join('')}
                      <span className="green-tick"><FaCheck /></span>
                    </div>

                    <div className='callsContent'>
                      <div>
                        <div className="callsname">{calls.name}</div>
                        <div className="callNumber">{calls.number}</div>
                      </div>
                      <div className='lastCallTime'>
                        <div>Jul 22

                        </div>
                        <div>
                          11:18 AM

                        </div>
                      </div>
                    </div>

                  </div>

                </li>
              ))}
            </ul>
            </div>

            <div className='logsByDays'> 
            <div className='callsDate'>
            <span>July 2024</span>
          </div>

            <ul>
              {calls.map(calls => (
                <li key={calls.id} >
                  <div className="callsItem" >

                    <div className="profileInitialsCalls">
                      {calls.name.split(' ').map((n) => n[0]).join('')}
                      <span className="green-tick"><FaCheck /></span>
                    </div>

                    <div className='callsContent'>
                      <div>
                        <div className="callsname">{calls.name}</div>
                        <div className="callNumber">{calls.number}</div>
                      </div>
                      <div className='lastCallTime'>
                        <div>Jul 22

                        </div>
                        <div>
                          11:18 AM

                        </div>
                      </div>
                    </div>

                  </div>

                </li>
              ))}
            </ul>
            </div>
        </div>

      </div>) : (
        <div className='noCalls'>
          <img src={noCallsImg} alt='no calls' />
        </div>
      )}
    </div>
  )
}
