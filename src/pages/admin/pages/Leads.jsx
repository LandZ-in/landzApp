import React, { useState } from 'react';
import { MoreOutlined, PhoneOutlined, CloseOutlined } from "@ant-design/icons";


export default function Leads() {
    const [showMenu, setShowMenu] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);

    const handleMoreClick = (leadId) => {
        setShowMenu((prev) => (prev === leadId ? null : leadId));
    };

    const handleMenuClose = () => {
        setShowMenu(null);
    };

    const handleSidebarOpen = () => {
        setShowSidebar(true);
        handleMenuClose();
    };

    const handleSidebarClose = () => {
        setShowSidebar(false);
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest('.popupMenu') && !e.target.closest('.logIcons')) {
            setShowMenu(null);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div className='adminContent'>
            <div className='headContainer'>
                <div className='mediumHeading'><span>Leads</span></div>
                <div className='SmallHeading'><span>Effortlessly Track and Convert Your Leads into Clients!</span></div>
            </div>

            <div className='row leadContainer'>

                {/* New Leads Card */}
                <div className='col-25'>
                    <div className='leadCard'>
                        <div className='leadCardHead leadHeadOrangeColor'><span style={{ color: "black" }}>New Leads</span></div>
                        <div className='leadCardContent leadContentOrangeColor'>
                            <div className='leadsTime'><span>July 2024</span></div>
                            <div className='logList'>
                                {['John Doe', 'Jane Smith', 'Chris Johnson'].map((name, index) => (
                                    <div key={`new-${index}`} className='logItem'>
                                        <div className='logName'><span>{name}</span></div>
                                        <div className='logIcons'>
                                            <PhoneOutlined />
                                            <MoreOutlined onClick={() => handleMoreClick(`new-${index}`)} />
                                            {showMenu === `new-${index}` && (
                                                <div className='popupMenu'>
                                                    <div className='popupMenuItem' onClick={handleSidebarOpen}>View Lead Profile</div>
                                                    <div className='popupMenuItem' onClick={handleMenuClose}>Submit Feedback</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contacted Card */}
                <div className='col-25'>
                    <div className='leadCard'>
                        <div className='leadCardHead leadHeadBlueColor'><span>Contacted</span></div>
                        <div className='leadCardContent leadContentBlueColor'>
                            <div className='leadsTime'><span>Today</span></div>
                            <div className='logList'>
                                {['Michael Lee', 'Anna Taylor', 'Tom Brown'].map((name, index) => (
                                    <div key={`contacted-${index}`} className='logItem'>
                                        <div className='logName'><span>{name}</span></div>
                                        <div className='logIcons'>
                                            <PhoneOutlined />
                                            <MoreOutlined onClick={() => handleMoreClick(`contacted-${index}`)} />
                                            {showMenu === `contacted-${index}` && (
                                                <div className='popupMenu'>
                                                    <div className='popupMenuItem' onClick={handleSidebarOpen}>View Lead Profile</div>
                                                    <div className='popupMenuItem' onClick={handleMenuClose}>Submit Feedback</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clients Card */}
                <div className='col-25'>
                    <div className='leadCard'>
                        <div className='leadCardHead leadHeadGreenColor'><span>Clients</span></div>
                        <div className='leadCardContent leadContentGreenColor'>
                            <div className='leadsTime'><span>Today</span></div>
                            <div className='logList'>
                                {['Emily Clark', 'James Wilson', 'Sarah Martinez'].map((name, index) => (
                                    <div key={`client-${index}`} className='logItem'>
                                        <div className='logName'><span>{name}</span></div>
                                        <div className='logIcons'>
                                            <PhoneOutlined />
                                            <MoreOutlined onClick={() => handleMoreClick(`client-${index}`)} />
                                            {showMenu === `client-${index}` && (
                                                <div className='popupMenu'>
                                                    <div className='popupMenuItem' onClick={handleSidebarOpen}>View Lead Profile</div>
                                                    <div className='popupMenuItem' onClick={handleMenuClose}>Submit Feedback</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closed Card */}
                <div className='col-25'>
                    <div className='leadCard'>
                        <div className='leadCardHead leadHeadPinkColor'><span>Closed</span></div>
                        <div className='leadCardContent leadContentPinkColor'>
                            <div className='leadsTime'><span>Today</span></div>
                            <div className='logList'>
                                {['Linda King', 'Mark Davis'].map((name, index) => (
                                    <div key={`closed-${index}`} className='logItem'>
                                        <div className='logName'><span>{name}</span></div>
                                        <div className='logIcons'>
                                            <PhoneOutlined />
                                            <MoreOutlined onClick={() => handleMoreClick(`closed-${index}`)} />
                                            {showMenu === `closed-${index}` && (
                                                <div className='popupMenu'>
                                                    <div className='popupMenuItem' onClick={handleSidebarOpen}>View Lead Profile</div>
                                                    <div className='popupMenuItem' onClick={handleMenuClose}>Submit Feedback</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                {showSidebar && (
                    <div className="leadSidebarOverlay" onClick={handleSidebarClose}>
                        <div className="leadSidebar" onClick={(e) => e.stopPropagation()}>
                            <div className="leadSidebarHeader">
                                <span>Lead Profile</span>
                                <button onClick={handleSidebarClose}><CloseOutlined /></button>
                            </div>
                            <div className="leadSidebarContent">
                                <div class="profile-container">
                                    <div class="lead-basic-information-section">
                                        <h2 class="section-title">Basic Information</h2>
                                        <div className='lead-profile-section'><div class="profile-avatar"></div><span>Name</span></div>

                                        <div class="profile-header-info">

                                            <div class="info-grid">
                                                <div class="info-item">
                                                    <span class="info-label">Mobile Number</span>
                                                    <span class="info-value">8XXXXXXXXX</span>
                                                </div>
                                                <div class="info-item">
                                                    <span class="info-label">Email</span>
                                                    <span class="info-value">user@gmail.com</span>
                                                </div>
                                                <div class="info-item">
                                                    <span class="info-label">Age</span>
                                                    <span class="info-value">36</span>
                                                </div>
                                                <div class="info-item">
                                                    <span class="info-label">Communication Call</span>
                                                    <span class="info-value">Call</span>
                                                </div>
                                                <div class="info-item">
                                                    <span class="info-label">Urgency</span>
                                                    <span class="info-value">Flexible</span>
                                                </div>
                                                <div class="info-item">
                                                    <span class="info-label">Financing Status</span>
                                                    <span class="info-value">---</span>
                                                </div>
                                                <div class="info-item">
                                                    <span class="info-label">Rating</span>
                                                    <span class="info-value">4.0</span>
                                                </div>
                                                <div class="info-item">
                                                    <span class="info-label">Engagement Score</span>
                                                    <span class="info-value">3.9</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="property-interests-section">
                                        <h2 class="section-title">Property Interests</h2>
                                        <div class="info-grid">
                                            <div class="info-item">
                                                <span class="info-label">Type of Property</span>
                                                <span class="info-label">Preferred Locations</span>
                                                <span class="info-label">Preferred Amenities</span>

                                                <span class="info-label">Budget Range</span>

                                            </div>
                                            <div class="info-item">
                                                <span class="info-value">Residential, Agriculture</span>
                                                <span class="info-value">Hyderabad, Vijayawada</span>
                                                <span class="info-value">Pool, Solar, Gym, Security</span>
                                                <span class="info-value">10L - 40L</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="interaction-history-section">
                                        <h2 class="section-title">Interaction History</h2>
                                        <div class="stats-grid">
                                            <div class="stat-item">
                                                <div class="stat-label">Properties Viewed</div>
                                                <div class="stat-value">100</div>
                                            </div>
                                            <div class="stat-item">
                                                <div class="stat-label">Liked Properties</div>
                                                <div class="stat-value">10</div>
                                            </div>
                                            <div class="stat-item">
                                                <div class="stat-label">Scheduled Visits</div>
                                                <div class="stat-value">20</div>
                                            </div>
                                            <div class="stat-item">
                                                <div class="stat-label">Contacted</div>
                                                <div class="stat-value">25</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="cta-section">
                                        <h3 class="cta-title">Unlock Deeper Insights, Make Informed Decisions!</h3>
                                        <p class="cta-description">Discover valuable insights about your potential leads! Enhance your decision-making with comprehensive lead analytics by subscribing today. Get access to detailed profiles, engagement metrics, and more. Empower your sales strategy with the right information at your fingertips</p>
                                        <button class="subscribe-button">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
