import React from 'react'
import '../profile.css'

const CommPreference = () => {
    return (
        <section className='account-settings-section'>
            <div className='section-heading'>
                <div className="profile-breadcrumb">
                    <span>Profile & Settings / <span className='breadcrumb-active-page'>Communication Preferences</span></span>
                </div>
                <div className='mediumHeading'>
                    <span >Profile </span>
                </div>
            </div>

            <div className="profile-container">
                {/* Email Section */}
                <div className="profile-row">
                    <div className="profile-info">
                        <span>Email</span>
                        <span className='info-detail'>username@email.com</span>
                    </div>
                    <button className="update-button">Update</button>
                </div>

                {/* Mobile Section */}
                <div className="profile-row">
                    <div className="profile-info">
                        <span>Mobile</span>
                        <span className='info-detail'>9090XXXXXX</span>
                    </div>
                    <button className="update-button">Update</button>
                </div>

                {/* Preferred Language Section */}
                <div className="profile-row">
                    <span>Preferred Language</span>
                    <div className="profile-info">
                        <select className="select-box">
                            <option value="English">English</option>
                            <option value="Spanish">Hindi</option>
                            <option value="French">Someting</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommPreference