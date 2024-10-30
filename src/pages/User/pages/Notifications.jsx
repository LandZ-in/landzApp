import React from 'react'
import hotelImg from '../images/hotel1.png';
import { LockOutlined, StarFilled } from '@ant-design/icons';
import { TbParkingCircle } from "react-icons/tb";
import { IoBarbellSharp } from "react-icons/io5";
import { MdLocalBar } from "react-icons/md";
export default function Notifications() {
    return (
        <div style={{overflowX:"hidden"}}>
            <div className='adminContent'>
                <div className='mediumHeading'>
                    <span>Land Listing</span>
                </div>
                <div className='smallHeading'>
                    <span>Easily Manage, Track, and Update Your Listings for Maximum Exposure</span>
                </div>
            </div> 
            <div className='row'>
                <div className='col-66 no-padding'>
                    <div className='notificationCardContainer'>
                        <div class="notiCard">
                            <div class="notiHeader">
                                <span>New Listing</span>
                                <span class="date">Tue 23 July 2024 10:30AM</span>
                            </div>

                            <div class="notiSubtitle">New properties matching your criteria have been listed! Check them out now</div>
                            <div className='notiSubContent'>
                                <div class="notiProperty">
                                    <img src={hotelImg} alt="Alpine Ski House" class="notiPropertyImage" />
                                    <div class="notiPropertyDetails">
                                        <div class="notiPropertyTitle">
                                            <span class="notiPropertyName">Alpine Ski House</span>
                                            <span class="notiRating">★ <span style={{ color: "black" }}>4.5</span> </span>
                                        </div>
                                        <div class="notiLocation">Location Name</div>
                                        <div class="amenities">
                                            <span class="amenity"><IoBarbellSharp /> Gym</span>
                                            <span class="amenity"><TbParkingCircle /> Paid parking</span>
                                            <span class="amenity"><LockOutlined /> Safe box</span>
                                            <span class="amenity"><MdLocalBar /> No bar</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="notiPriceSection">
                                    <div class="notiPriceDetails">
                                        <span class="notiPrice">₹ 10.25 Cr</span>
                                        <span class="price-sqft">| ₹ 3377/ Sqft</span>
                                    </div>
                                    <div class="notiButtons">
                                        <button class="btn-share">Share</button>
                                        <button class="blackBtn">View</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="notiCard">
                            <div class="notiHeader">
                                <span>New Listing</span>
                                <span class="date">Tue 23 July 2024 10:30AM</span>
                            </div>

                            <div class="notiSubtitle">New properties matching your criteria have been listed! Check them out now</div>
                            <div className='notiSubContent'>
                                <div class="notiProperty">
                                    <img src={hotelImg} alt="Alpine Ski House" class="notiPropertyImage" />
                                    <div class="notiPropertyDetails">
                                        <div class="notiPropertyTitle">
                                            <span class="notiPropertyName">Alpine Ski House</span>
                                            <span class="notiRating"><StarFilled /> <span style={{ color: "black" }}>4.5</span> </span>
                                        </div>
                                        <div class="notiLocation">Location Name</div>
                                        <div class="amenities">
                                            <span class="amenity"><IoBarbellSharp /> Gym</span>
                                            <span class="amenity"><TbParkingCircle /> Paid parking</span>
                                            <span class="amenity"><LockOutlined /> Safe box</span>
                                            <span class="amenity"><MdLocalBar /> No bar</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="notiPriceSection">
                                    <div class="notiPriceDetails">
                                        <span class="notiPrice">₹ 10.25 Cr</span>
                                        <span class="price-sqft">| ₹ 3377/ Sqft</span>
                                    </div>
                                    <div class="notiButtons">
                                        <button class="btn-share">Share</button>
                                        <button class="blackBtn">View</button>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="notiCard">
                            <div class="notiHeader">
                                <span>Remainder</span>
                                <span class="date">Tue 23 July 2024 10:30AM</span>
                            </div>

                            <div class="notiSubtitle">You have a property visit scheduled for tomorrow at 10:00 AM</div>

                            <div class="notiPriceSection no-padding">
                                <div class="notiPriceDetails">

                                </div>
                                <div class="notiButtons">
                                    <button class="blackBtn">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-33 paddingRight'>
                    <div class="subscribe-section">
                        <div className='mediumHeading'><span>
                        Take Control of Your Notifications!
                        </span></div>
                        <p class="para">Customize the notifications you receive to match your preferences. Stay informed with updates that matter to you</p>
                        <div class="button-container">
                            <button class="subscribe-btn">Customize Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
