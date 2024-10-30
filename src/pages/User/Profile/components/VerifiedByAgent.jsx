import React from 'react'

export default function VerifiedByAgent() {
    const [formData, setFormData] = React.useState({
        userType: 'Agent',
        fullName: '',
        email: '',
        mobileNumber: '',
        licenseNumber: '',
        methodofContact: '',
        specialization: '',
        YearsofExperience: '',
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
                        <label className='label'>Years of Experience</label>
                        <select
                            id="YearsofExperience"
                            name="YearsofExperience"
                            value={formData.YearsofExperience}
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
