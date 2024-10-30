import React, { useState} from 'react'
import { Link } from 'react-router-dom';

const Profile = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        gender: '',
        dob: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted: ', formData);
    };

    return (
        <section className='account-settings-section profile-section'>
            <div className='section-heading'>
                <div className='mediumHeading'>
                   <span>Profile</span> 
                </div>
            </div>



            <div className='row'>
                <div className='col-66'>
                    {/* profile section container  */}
                    <div className="profile-form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="profile-picture-upload">
                                <div className="profile-picture-placeholder"></div>
                                <button type="button" className="upload-btn">Upload Profile Picture</button>
                            </div>

                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    placeholder="Mobile Number"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Gender</label>
                                <div className="radio-group">
                                    {['Male', 'Female', 'Others'].map((option) => (
                                        <label key={option} className="radio-label">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value={option}
                                                checked={formData.gender === option}
                                                onChange={handleInputChange}
                                            />
                                            <span className="radio-custom"></span>
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <textarea
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <button type="submit" className="save-btn">Save</button>
                        </form>
                    </div>
                </div>

                <div className='col-33'>
                    <div class="get-verified-section">
                        <div className='mediumHeading'><span>
                            Are You a Builder or Agent? Get Verified Today!
                        </span></div>
                        <p class="para">Stand out from the crowd and gain trust with our verified badge. Join our network of trusted professionals and showcase your properties with confidence.</p>
                        <div class="button-container">
                        <Link to="./get-verified">   <button class="get-verified-btn">Get Verified Now</button> </Link>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Profile