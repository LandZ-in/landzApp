import React, { useState } from 'react'
import legalAdvisor from '../images/legalAdvisory.jpg'

const LegalSupport = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        gender: '',
        role: '',
        needSupportWith: '',
        remarks: '',
        preferredContact: '',
        scheduleDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    return (
        <div className='adminContent'>

        <section  className='legal-section'>
            <div>
                <div className='mediumHeading'>
                    <span >Legal Advise & Support </span>
                </div>
                <div className='smallHeading'>
                    <span >Reliable Support When You Need It Most!</span>
                </div>
            </div>


            <section className="form-container">
                <div className="left-form-div">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <input
                                type="tel"
                                id="mobileNumber"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                placeholder="Mobile Number"
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
                                            onChange={handleChange}
                                        />
                                        <span className="radio-custom"></span>
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>I am a</label>
                            <div className="radio-group">
                                {['Buyer', 'Seller', 'admin', 'Builder'].map((option) => (
                                    <label key={option} className="radio-label">
                                        <input
                                            type="radio"
                                            name="role"
                                            value={option}
                                            checked={formData.role === option}
                                            onChange={handleChange}
                                        />
                                        <span className="radio-custom"></span>
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="needSupportWith">Need Support With</label>
                            <select
                                id="needSupportWith"
                                name="needSupportWith"
                                value={formData.needSupportWith}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                {/* Add options here */}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="remarks">Remarks</label>
                            <textarea
                                id="remarks"
                                name="remarks"
                                value={formData.remarks}
                                onChange={handleChange}
                                placeholder="Remarks"
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label>Preferred Contact</label>
                            <div className="radio-group">
                                {['Email', 'Call'].map((option) => (
                                    <label key={option} className="radio-label">
                                        <input
                                            type="radio"
                                            name="preferredContact"
                                            value={option}
                                            checked={formData.preferredContact === option}
                                            onChange={handleChange}
                                        />
                                        <span className="radio-custom"></span>
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="scheduleDate">Select Date To Schedule a Call</label>
                            <input
                                type="date"
                                id="scheduleDate"
                                name="scheduleDate"
                                value={formData.scheduleDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Attach Documents (if any)</label>
                            <input type="file" />
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>

                <aside className="right-image-container">
                    <img src={legalAdvisor} alt="legal Advisor" />
                </aside>
            </section>
        </section>
        </div>
    )
}

export default LegalSupport