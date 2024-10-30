import React, { useState } from 'react'

const PricingDetails = () => {

    const [titleStatus, setTitleStatus] = useState('');
    const [ownershipType, setOwnershipType] = useState('');
    const [landApproval, setLandApproval] = useState('');
    const [expectedPrice, setExpectedPrice] = useState('');
    const [pricePerSqft, setPricePerSqft] = useState('');
    const [taxExcluded, setTaxExcluded] = useState(false);
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [landDescription, setLandDescription] = useState('');

    const RadioButton = ({ name, options, value, onChange }) => (
        <div className="radio-group">
            {options.map((option) => (
                <label key={option} className={`radio-button ${value === option ? 'active' : ''}`}>
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={value === option}
                        onChange={() => onChange(option)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );

    return (
        <section className='land-pricing-details-section'>

            <div className="row">
                <div className="col-66 left-form-container">
                    <form className="property-form">
                        <div>
                            <h3>Property Title Status</h3>
                            <RadioButton
                                name="titleStatus"
                                options={['Clear', 'Encumbered']}
                                value={titleStatus}
                                onChange={setTitleStatus}
                            />
                        </div>

                        <div>
                            <h3>Ownership Type</h3>
                            <RadioButton
                                name="ownershipType"
                                options={['Freehold', 'Leasehold', 'Power of Attorney']}
                                value={ownershipType}
                                onChange={setOwnershipType}
                            />
                        </div>

                        <div>
                            <h3>Land Approved by</h3>
                            <RadioButton
                                name="landApproval"
                                options={['Local Authority', '---', '---']}
                                value={landApproval}
                                onChange={setLandApproval}
                            />
                        </div>

                        <div className="price-details">
                            <h3>Price Details</h3>
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Expected Price"
                                    value={expectedPrice}
                                    onChange={(e) => setExpectedPrice(e.target.value)}
                                />
                                <input
                                    type="text"
                                    style={{width: "150px"}}
                                    placeholder="Price per Sqft"
                                    value={pricePerSqft}
                                    onChange={(e) => setPricePerSqft(e.target.value)}
                                />
                            </div>
                            <label className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    checked={taxExcluded}
                                    onChange={(e) => setTaxExcluded(e.target.checked)}
                                />
                                <span className="checkmark"></span>
                                Tax and Government charges excluded
                            </label>
                            <label className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    checked={priceNegotiable}
                                    onChange={(e) => setPriceNegotiable(e.target.checked)}
                                />
                                <span className="checkmark"></span>
                                Price negotiable
                            </label>
                        </div>


                        <div className="land-description">
                            <h3>Tell us what makes the land unique</h3>
                            <textarea
                                placeholder="Land description"
                                value={landDescription}
                                onChange={(e) => setLandDescription(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
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

export default PricingDetails