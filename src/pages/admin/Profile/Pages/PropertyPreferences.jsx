import React, { useState } from 'react'
import LandTagSearch from '../components/LandTagSearch';

const PropertyPreferences = () => {

    const [formData, setFormData] = useState({
        propertyTypes: [],
        subcategories: [],
        apartmentTypes: [],
        furnishingTypes: [],
        facing: [],
        cities: [],
        minPrice: '',
        maxPrice: '',
        minArea: "",
        maxArea: '',
        proximityDistance: '',
        proximityData1: '',
        distanceUnit: '',
        bedrooms: '',
        areaUnit: '',
        bathrooms: '',
        propertyAgeMin: '',
        propertyAgeMax: '',
        newProperties: false,
        propertyView: '',
        financialStatus: "",
        finalizeDecison: "",
        amenities: []
    });

    const [amenityInput, setAmenityInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [selectedCities, setSelectedCities] = useState([]);

    const amenitiesOptions = ['Pool', 'Solar Panels', 'Security', 'Gym', 'Parking'];
    const citiesOptions = ['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Mumbai'];


    const handleCheckboxChange = (event, fieldName) => {
        const { value, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [fieldName]: checked
                ? [...prev[fieldName], value]
                : prev[fieldName].filter((item) => item !== value),
        }));
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSave = () => {
        console.log('Form Data:', formData);
        // Handle form save logic
    };

    return (
        <section className='property-preferences-section'>
            <div className='section-heading'>
                <div className="profile-breadcrumb">
                    <span>Profile & Settings / <span className='breadcrumb-active-page'>Property Preferences</span></span>
                </div>
                <div className='mediumHeading'>
                    <span>Profile</span>
                </div>
            </div>

            <div className="property-prefrences-form">
                <form className="property-form">
                    <h2>Preferred Property Types</h2>
                    <div className="checkbox-group">
                        {['Residential', 'Commercial', 'Plots', 'Farmlands', 'Industrial Properties'].map((type) => (
                            <label key={type} >
                                <input
                                    className='custom-checkbox'
                                    type="checkbox"
                                    value={type}
                                    onChange={(e) => handleCheckboxChange(e, 'propertyTypes')}
                                />
                                {type}
                            </label>
                        ))}
                    </div>

                    <h2>Preferred Property Subcategories</h2>
                    <div className="checkbox-group">
                        {['Apartments', 'Villas', 'Office Spaces', 'Shops', 'Studio Apartments'].map((sub) => (
                            <label key={sub} >
                                <input
                                    className='custom-checkbox'
                                    type="checkbox"
                                    value={sub}
                                    onChange={(e) => handleCheckboxChange(e, 'subcategories')}
                                />
                                {sub}
                            </label>
                        ))}
                    </div>

                    <h2>Preferred Apartment Types</h2>
                    <div className="checkbox-group">
                        {['1 BHK', '2 BHK', '3 BHK', '5 BHK'].map((type) => (
                            <label key={type}>
                                <input
                                    type="checkbox"
                                    value={type}
                                    className='custom-checkbox'
                                    onChange={(e) => handleCheckboxChange(e, 'apartmentTypes')}
                                />
                                {type}
                            </label>
                        ))}
                    </div>

                    <h2>Preferred Furnishing Types</h2>
                    <div className="checkbox-group">
                        {['Fully Furnished', 'Semi furnished', 'Unfurnished'].map((furnish) => (
                            <label key={furnish}>
                                <input
                                    type="checkbox"
                                    value={furnish}
                                    className='custom-checkbox'
                                    onChange={(e) => handleCheckboxChange(e, 'furnishingTypes')}
                                />
                                {furnish}
                            </label>
                        ))}
                    </div>

                    <h2>Preferred Facing</h2>
                    <div className="checkbox-group">
                        {['North', 'South', 'East', 'West', 'North-East', 'North-West', 'South-East', 'South-West'].map((facing) => (
                            <label key={facing}>
                                <input
                                    type="checkbox"
                                    value={facing}
                                    className='custom-checkbox'
                                    onChange={(e) => handleCheckboxChange(e, 'facing')}
                                />
                                {facing}
                            </label>
                        ))}
                    </div>


                    <div className="preffered-width">

                        <div className="form-finalize-decison margin-bottom">
                            <h2>How soon are you looking to finalize your purchase or rental decison?</h2>
                            <select name="finalizeDecison" value={formData.finalizeDecison} onChange={handleInputChange}>
                                <option value="">Select</option>
                                {/* Add property view options here */}
                            </select>
                        </div>

                        <div className="form-price-range  margin-bottom">

                            <div className="price-range">
                                <h2>Min Price Range</h2>
                                <select name="minPrice" value={formData.minPrice} onChange={handleInputChange}>
                                    <option value="">Select</option>
                                    {/* Add price options here */}
                                </select>
                            </div>

                            <div className="price-range">
                                <h2>Max Price Range</h2>
                                <select name="maxPrice" value={formData.maxPrice} onChange={handleInputChange}>
                                    <option value="">Select</option>
                                    {/* Add price options here */}
                                </select>
                            </div>

                        </div>

                        {/* financial status  */}
                        <div className="form-financial-status margin-bottom">
                            <h2>What is your current financial status?</h2>
                            <select name="financialStatus" value={formData.financialStatus} onChange={handleInputChange}>
                                <option value="">Select</option>
                                {/* Add property view options here */}
                            </select>

                        </div>


                        {/* Area range  */}

                        <div className="form-area-range margin-bottom">

                            <div className="area-range">
                                <h2>Min Area</h2>
                                <div className="area-input-wrapper">
                                    <input
                                        type="number"
                                        value={formData.minArea}
                                        onChange={handleInputChange}
                                        placeholder="2500"
                                        className="input-area-range"
                                    />
                                    <select value={formData.areaUnit} onChange={handleInputChange} className="select-area">
                                        <option value="Sqft">Sqft</option>
                                        <option value="Sqm">Sqm</option>
                                    </select>
                                </div>
                            </div>

                            <div className="area-range">
                                <h2>Max Area</h2>
                                <div className="area-input-wrapper">
                                    <input
                                        type="number"
                                        value={formData.maxArea}
                                        onChange={handleInputChange}
                                        placeholder="4500"
                                        className="input-area-range"
                                    />
                                    <select value={formData.areaUnit} onChange={handleInputChange} className="select-area">
                                        <option value="Sqft">Sqft</option>
                                        <option value="Sqm">Sqm</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <LandTagSearch
                            title="Preferred Cities/Locations"
                            options={citiesOptions}
                            input={cityInput}
                            setInput={setCityInput}
                            selected={selectedCities}
                            setSelected={setSelectedCities}
                            placeholder="Search Cities"
                            className="margin-bottom"
                        />


                        {/* proximity location  */}
                        <div className="form-proximity-location margin-bottom">
                            <h2>Proximity to preffered locations</h2>


                            {/* first data  */}
                            <div className="proximity-data proximity-data1">
                                <select name="porximity" value={formData.proximityData1} onChange={handleInputChange}>
                                    <option value="hospital">Hospital</option>
                                    {/* Add price options here */}
                                </select>

                                <div className="area-input-wrapper">
                                    <input
                                        type="number"
                                        value={formData.proximityDistance}
                                        onChange={handleInputChange}
                                        placeholder="2"
                                        className="input-area-range"
                                    />
                                    <select value={formData.distanceUnit} onChange={handleInputChange} className="select-area">
                                        <option value="Sqft">Km</option>
                                        <option value="Sqm">m</option>
                                    </select>

                                </div>
                            </div>

                            {/* second data  */}
                            <div className="proximity-data proximity-data2">
                                <select name="porximity" value={formData.proximityData1} onChange={handleInputChange}>
                                    <option value="hospital">School</option>
                                    {/* Add price options here */}
                                </select>

                                <div className="area-input-wrapper">
                                    <input
                                        type="number"
                                        value={formData.proximityDistance}
                                        onChange={handleInputChange}
                                        placeholder="2"
                                        className="input-area-range"
                                    />
                                    <select value={formData.distanceUnit} onChange={handleInputChange} className="select-area">
                                        <option value="Sqft">Km</option>
                                        <option value="Sqm">M</option>
                                    </select>

                                </div>
                            </div>

                        </div>

                        <div className="form-bedroom  margin-bottom">
                            <div className="bedroom-select">
                                <h2>No. of Bedrooms</h2>
                                <select name="bedrooms" value={formData.bedrooms} onChange={handleInputChange}>
                                    <option value="">Select</option>
                                    {/* Add bedroom options here */}
                                </select>
                            </div>

                            <div className="bedroom-select">
                                <h2>No. of Bathrooms</h2>
                                <select name="bathrooms" value={formData.bathrooms} onChange={handleInputChange}>
                                    <option value="">Select</option>
                                    {/* Add bathroom options here */}
                                </select>
                            </div>
                        </div>

                        <div className="form-preffered-age">
                            <h2>Preferred Property Age</h2>
                            <div className="prefAge">
                                <select name="propertyAgeMin" value={formData.propertyAgeMin} onChange={handleInputChange}>
                                    <option value="">Min</option>
                                    {/* Add bathroom options here */}
                                </select>
                                <select name="propertyAgeMax" value={formData.propertyAgeMax} onChange={handleInputChange}>
                                    <option value="">Max</option>
                                    {/* Add bathroom options here */}
                                </select>
                            </div>
                        </div>

                        <div className="property-age-checkbox">
                            <label>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <input
                                        type="checkbox"
                                        className='custom-checkbox'
                                        name="newProperties"
                                        checked={formData.newProperties}
                                        onChange={handleInputChange}
                                    />
                                    I only prefer new properties
                                </div>
                            </label>
                        </div>

                        <div className="form-preffered-property-view margin-bottom">
                            <h2>Preferred Property View</h2>
                            <select name="propertyView" value={formData.propertyView} onChange={handleInputChange}>
                                <option value="">Select</option>
                                {/* Add property view options here */}
                            </select>
                        </div>

                        <LandTagSearch
                            title="Preferred Amenities"
                            options={amenitiesOptions}
                            input={amenityInput}
                            setInput={setAmenityInput}
                            selected={selectedAmenities}
                            setSelected={setSelectedAmenities}
                            placeholder="Search Amenities"
                        />
                    </div>

                    <button type="button" className="save-btn" onClick={handleSave}>
                        Save
                    </button>
                </form >
            </div >
        </section >
    )
}

export default PropertyPreferences