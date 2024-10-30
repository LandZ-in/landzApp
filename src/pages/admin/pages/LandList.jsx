import React from 'react'
import tradingIcon from "../images/treding.svg";
import wishIcon from "../images/wishlist.svg";
import searchIcon from "../images/search.png";
import filterIcon from "../images/filterslines.svg";
import shareIcon from "../images/share.svg"
import locIcon from "../images/location-icon.png"
import landIcon from "../images/land.png"
import { Link } from 'react-router-dom';
import noLandListImg from '../images/no-land-list.png'
let emptyData = {};
export default function LandList() {
    return (
        <div className='adminContent'>

            <div className='landListHead'>
                <div className='listingHeader'>
                    <div>
                        <div className='mediumHeading'>
                            <span>Land Listing</span>
                        </div>
                        <div className='smallHeading'>
                            <span>Easily Manage, Track, and Update Your Listings for Maximum Exposure</span>
                        </div>
                    </div>
                    <div>
                        <Link to="./new-listing"><button className="blackBtn">+ Add New Listing</button>
                        </Link>
                    </div>
                </div>
            </div>
            {emptyData ? (<div className='landListContent'>
                <div className="search-filter-container" style={{ position: "relative" }}>
                    <div className="search-input-container">
                        <input type="text" id="searchInput" placeholder="Search" className="search-input" />
                        <div className="search-icon">
                            <img src={searchIcon} alt='' />
                        </div>
                    </div>

                    <button className="filterBtn">
                        <img src={filterIcon} alt="Filter Icon" className="filter-icon" />
                        <span className="filter-txt">More filters</span>
                    </button>
                </div>

                <div className="card-container">
                    <div className="card">
                        <div className="card-image">
                            <img src={landIcon} alt="land" width="240px" />
                            <div className="labels">
                                <div className="label-shape"><span className="verify-txt">
                                    Verified
                                </span></div>
                                <div className="rating">
                                    <span className="star-icon">★</span>
                                    <span className="rating-value">4.0</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="location-div ">
                                <div className="location-info">
                                    <img src={locIcon} alt="Location" width="18px" />
                                    <p className="location-txt">Srisailam Highway, Hyderabad</p>
                                </div>

                                <div className="card-actions">
                                    <button className="wish-btn"><img src={wishIcon} alt='wish-btn' /></button>
                                    <button className="share-btn"><img src={shareIcon} alt='share-btn' /></button>
                                    <button className="contact-btn">Contact</button>
                                </div>
                            </div>

                            <div className="price-info">
                                <p className="price">5.25 Cr </p>
                                <p className="price-per-sqft"> | 1377/Sqft</p>
                            </div>
                            <div className="attributes-row">
                                <div className="attribute">
                                    <p className="attributes">AREA</p>
                                    <p className="attr-value">1503 Sqft</p>
                                </div>
                                <div className="attribute">
                                    <p className="attributes">ROAD DISTANCE</p>
                                    <p className="attr-value">1Km</p>
                                </div>
                                <div className="attribute">
                                    <p className="attributes">SOIL TYPE</p>
                                    <p className="attr-value">Black Soil</p>
                                </div>
                                <div className="attribute">
                                    <p className="attributes">AVAILABILITY</p>
                                    <p className="attr-value">Immediate</p>
                                </div>
                            </div>
                            <div className="trending-info">
                                <img src={tradingIcon} alt="Trending" />
                                <p>Getting high demand than other properties in the same location</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>):
            (<div className='noLandList'>
                <img src={noLandListImg} alt='no chats' />
            </div>)}
      </div>
    )
}
