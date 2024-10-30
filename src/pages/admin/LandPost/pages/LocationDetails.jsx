import React, { useState } from 'react'

const LocationDetails = () => {
    const [formData, setFormData] = useState({
        state: "",
        district: "",
        mandal: "",
        city: "",
        address: "",
        pincode: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <section className='land-location-details-section'>

            <div className="row">
                <div className="col-66 left-form-container">
                        <form className="form-container" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>State</label>
                                <select name="state" value={formData.state} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="State1">State 1</option>
                                    <option value="State2">State 2</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>District</label>
                                <select name="district" value={formData.district} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="District1">District 1</option>
                                    <option value="District2">District 2</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Mandal</label>
                                <select name="mandal" value={formData.mandal} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="Mandal1">Mandal 1</option>
                                    <option value="Mandal2">Mandal 2</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>City/ Village/ Town</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City/ Village/ Town"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Complete Address</label>
                                <textarea
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label>Pincode</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    placeholder="Pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="submit-button">Save & Continue</button>
                        </form>
                </div>

                <aside className="col-33">
                    <div class="subscribe-section">
                        <div className='mediumHeading'><span>
                            Get Verified Fast—Boost Your Listing's Visibility!
                        </span></div>
                        <p class="para">Subscribe now to fast-track your land verification and enhance your listing's visibility. With our expedited verification service, your property gains instant credibility, attracting more potential buyers and increasing engagement. Don't miss out on this opportunity to make your listing stand out!</p>
                        <div class="button-container">
                            <button class="subscribe-btn">Post Land Details</button>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default LocationDetails