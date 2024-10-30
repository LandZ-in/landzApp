import React from 'react'
import '../landpost.css';
export default function BasicDetails() {
    const [activeIndex, setActiveIndex] = React.useState(0); 
    const [activeIndexLookingfor, setActiveIndexLookingfor] = React.useState(0); 
    const [activeIndexLandZone, setActiveIndexLandZone] = React.useState(0); 


    const handleBoxClick = (index) => {
        setActiveIndex(index);
    };
   const handleBoxClickLookingfor = (index) => {
    setActiveIndexLookingfor(index);
    };

    const handleBoxClickLandZone = (index) => {
        setActiveIndexLandZone(index);
    };

    const profiles = [{ id: 1, name: 'Owner' },
    { id: 2, name: 'Agent' },];

    const lookingfor = [{ id: 1, name: 'Sell' },
    { id: 2, name: 'Rent/Lease' },];

    const landZoningOptions = [{ id: 1, name: 'Agriculture land' },
    { id: 2, name: 'Industrial land' },
    { id: 3, name: 'Commercial land' },
    { id: 4, name: 'Residential land' },
    { id: 5, name: 'Non-agriculture' },
    { id: 6, name: 'Special Economic zone' }, { id: 7, name: 'Eco sensitive & reserved land' }];

    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        mobileNumber: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (

        <div className='headContainer'>
      
            <div className='row'>
                <div className="col-66">
                    <section className="form-container">
                        <div >
                            <form onSubmit={"handleSubmit"} className="contact-form">


                                <div className="form-group">
                                    <label>I'm</label>
                                    <div className="option-container">
                                        {profiles.map((profile, index) => (
                                            <div
                                                key={index}
                                                className={`option ${activeIndex === index ? 'active' : ''}`}
                                                onClick={() => handleBoxClick(index)}
                                            >
                                                {profile.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>You are looking to?</label>
                                    <div className="option-container">
                                        {lookingfor.map((lfor, index) => (
                                            <div
                                                key={index}
                                                className={`option ${activeIndexLookingfor === index ? 'active' : ''}`}
                                                onClick={() => handleBoxClickLookingfor(index)}
                                            >
                                                {lfor.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Select Land zoning</label>

                                    <div className="option-container">
                                        {landZoningOptions.map((opt, index) => (
                                            <div
                                                key={index}
                                                className={`option ${activeIndexLandZone === index ? 'active' : ''}`}
                                                onClick={() => handleBoxClickLandZone(index)}
                                            >
                                                {opt.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
                                <button type="submit" className="primaryBtn">Save & Continue</button>
                            </form>
                        </div>
                    </section>
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

        </div>
    )
}
