import React from 'react'

export default function VerifiedByBuilder() {
    const [formData, setFormData] = React.useState({
        userType: 'Builder',
        fullName: '',
        email: '',
        mobileNumber: '',
        licenseNumber: '',
        businessName:'',
        bRegistrationNumber:'',
        businessAddress:'',
        website:'',
        methodofContact: '',
        specialization: '',
        yearsofExperience: '',
        businessOverview:'',
        totalProjects:'',
        
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted: ', formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <div className="form-group">
                        <label className='label'>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className='label'>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className='label'>Mobile Number</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            placeholder="Mobile Number"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label className='label'>License Number</label>
                        <input
                            type="text"
                            name="licenseNumber"
                            placeholder="License Number"
                            value={formData.licenseNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="document-upload">
                        <span>Upload License document</span>
                        <button type="button" className="upload-btn">Upload</button>
                    </div>
                    <div className="form-group">
                        <label className='label'>Business Name</label>
                        <input
                            type="text"
                            name="businessName"
                            placeholder="Business Name"
                            value={formData.businessName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='label'>Business Registration Number</label>
                        <input
                            type="text"
                            name="bRegistrationNumber"
                            placeholder="Registration Number"
                            value={formData.bRegistrationNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="document-upload">
                        <span>Upload Registration document</span>
                        <button type="button" className="upload-btn">Upload</button>
                    </div>
                    <div className="form-group">
                        <label className='label'>Business Address</label>
                        <textarea
                            name="businessAddress"
                            placeholder="Business Address"
                            value={formData.businessAddress}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='label'>Website</label>
                        <input
                            type="text"
                            name="website"
                            placeholder="Website"
                            value={formData.website}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='label'>Years of Experience</label>
                        <select
                            id="yearsofExperience"
                            name="yearsofExperience"
                            value={formData.yearsofExperience}
                            onChange={handleInputChange}
                        >
                            <option value="">Select</option>
                            {/* Add options here */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='label'>Business Overview</label>
                        <textarea
                            name="businessOverview"
                            placeholder="Business Overview"
                            value={formData.businessOverview}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className='label'>Total Projects</label>
                        <select
                            id="totalProjects"
                            name="totalProjects"
                            value={formData.totalProjects}
                            onChange={handleInputChange}
                        >
                            <option value="">Select</option>
                            {/* Add options here */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='label'>Projects Completed</label>
                        <select
                            id="projectsCompleted"
                            name="projectsCompleted"
                            value={formData.projectsCompleted}
                            onChange={handleInputChange}
                        >
                            <option value="">Select</option>
                            {/* Add options here */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='label'>Preferred Method of Contact</label>
                        <div className="radio-group">
                            {['Email', 'SMS', 'Call'].map((option) => (
                                <label key={option} className="radio-label label">
                                    <input
                                        type="radio"
                                        name="methodofContact"
                                        value={option}
                                        checked={formData.methodofContact === option}
                                        onChange={handleInputChange}
                                    />
                                    <span className="radio-custom"></span>
                                    <span className='radio-option'>{option} </span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <label className='label'>Specialization/ Area of Expertise</label>
                        <textarea
                            name="specialization"
                            placeholder="Write something"
                            value={formData.specialization}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div class="form-group checkbox-section">
                        <input type="checkbox" id="agree" name="agree" value="agree" />
                        <label className='label' for="agree" class="checkbox-label">I agree to the terms and conditions of the verification process.</label>
                    </div>

                    <div class="form-group checkbox-section">
                        <input type="checkbox" id="agree" name="agree" value="agree" />
                        <label className='label' for="agree" class="checkbox-label">I consent to have my credentials and documents reviewed for verification purposes.</label>
                    </div>
                </div>
            </div>
            <div>
                <button type="submit" className="blackBtn">Submit</button>

            </div>
        </form>
    )
}
