import React from 'react'
import { UpOutlined, DownOutlined,PlusOutlined } from '@ant-design/icons'
export default function LandDetails() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isDropdownOpen, setDropdownOpen] = React.useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleBoxClick = (index) => {
        setActiveIndex(index);
    };

    const landFacing = [{ id: 1, name: 'North' },
        { id: 2, name: 'East' },
        { id: 3, name: 'West' },
        { id: 4, name: 'South' },
        { id: 5, name: 'North-East' },
        { id: 6, name: 'North-West' },
        { id: 7, name: 'South-East' },
        { id: 8, name: 'South-West' },
       
    ];

    const utilities = [{ id: 1, name: 'Gas supply' },
        { id: 2, name: 'Electricity' },
        { id: 3, name: 'Sewer system' },
        { id: 4, name: 'Waste disposal' },
        { id: 5, name: 'Stormwater management' },
       
    ];
    const landProneEnvironment = [{ id: 1, name: 'Floods' },
        { id: 2, name: 'Droughts' },
        { id: 3, name: 'Soil erosion' },
        { id: 4, name: 'Landslides' },
        { id: 5, name: 'Coastal erosion' },
        { id: 6, name: 'Desertification' },
        { id: 7, name: 'Pests & diseases' },
        { id: 8, name: 'Pollution' },
        { id: 9, name: 'Contamination' },
        { id: 10, name: 'Wildfire' },
    ];

    const previouslyUsed = [{ id: 1, name: 'Agriculture' },
        { id: 2, name: 'Unused' },{ id: 3, name: 'Others' }];

    const constructionAllowed = [{ id: 1, name: 'Yes' },
    { id: 2, name: 'No' },];

    const transportAvailability = [{ id: 1, name: 'Yes' },
    { id: 2, name: 'No' },];

    const waterAvailability = [{ id: 1, name: 'Very Good' },
    { id: 2, name: 'Good' }, { id: 1, name: 'Adequate' },
    { id: 2, name: 'Bad' },];

    const soilQuality = [{ id: 1, name: 'Very Good' },
    { id: 2, name: 'Good' }, { id: 1, name: 'Adequate' },
    { id: 2, name: 'Bad' },];

    const soiltype = [{ id: 1, name: 'Black Soil' },
    { id: 2, name: 'Red & yellow Soil' },
    { id: 3, name: 'Alluvial Soil' },
    { id: 4, name: 'Laterite Soil' },
    { id: 5, name: 'Arid or desert soil' },
    { id: 6, name: 'Saline & alkaline soil' },
    { id: 7, name: 'Peaty & marshy soil' },
    { id: 7, name: 'Forest or mountainous soil' }];

    const [formData, setFormData] = React.useState({
        surveyNumber: "",
        AreaofLand: "",
        LengthofPlotFt: "",
        BreadthofPlot: "",
        waterSource: "",
        nearestRoadDistance: "",
        openSides:"",
        constructions:"",
        previouslyUsedLand:"",
        landRestricted:""


    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>

            <div className='headContainer'>
                <div className='row' >
                    <div className="col-66">
                        <section className="form-container" style={{ overflow: "auto", height: "82vh" }}>
                            <div >
                                <form onSubmit={"handleSubmit"} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="surveyNumber">Survey Number</label>
                                        <input
                                            type="tel"
                                            id="surveyNumber"
                                            name="surveyNumber"
                                            value={formData.surveyNumber}
                                            onChange={handleChange}
                                            placeholder="Survey Number"
                                        />
                                    </div>

                         
                                    <div className="form-group">
                                        <label htmlFor="AreaofLand">Area of the Land</label>
                                        <div className="select-container">
                                            <select
                                                id="AreaofLand"
                                                name="AreaofLand"
                                                value={formData.AreaofLand}
                                                onChange={handleChange}
                                                onClick={handleDropdownToggle}
                                                className="custom-select"
                                            >
                                                <option value="">Select</option>
                                                <option value="AreaofLand1">Area of Land</option>
                                                <option value="AreaofLand2">Area of Land</option>
                                            </select>
                                            <span className="icon-container">
                                            Sqft  <DownOutlined />
                                            </span>
                                        </div>
                                    </div>
                                    <label>Property Dimensions <span style={{ color: "#616161", fontWeight:"normal" }}>(optional)</span></label>
                                    <div className='propertyDimensions'>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                id="LengthofPlotFt"
                                                name="LengthofPlotFt"
                                                value={formData.LengthofPlotFt}
                                                onChange={handleChange}
                                                placeholder="Length of plot (in Ft.)"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                id="BreadthofPlot"
                                                name="BreadthofPlot"
                                                value={formData.BreadthofPlot}
                                                onChange={handleChange}
                                                placeholder="Breadth of plot (in Ft.)"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Soil Type</label>
                                        <div className="option-container">
                                            {soiltype.map((soil, index) => (
                                                <div
                                                    key={index}
                                                    className={`option ${activeIndex === index ? 'active' : ''}`}
                                                    onClick={() => handleBoxClick(index)}
                                                >
                                                    {soil.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Soil Quality</label>
                                        <div className="option-container">
                                            {soilQuality.map((soilQ, index) => (
                                                <div
                                                    key={index}
                                                    className={`option ${activeIndex === index ? 'active' : ''}`}
                                                    onClick={() => handleBoxClick(index)}
                                                >
                                                    {soilQ.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Water Availability</label>
                                        <div className="option-container">
                                            {waterAvailability.map((water, index) => (
                                                <div
                                                    key={index}
                                                    className={`option ${activeIndex === index ? 'active' : ''}`}
                                                    onClick={() => handleBoxClick(index)}
                                                >
                                                    {water.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="waterSource">Water Source</label>
                                        <div className="select-container">
                                            <select
                                                id="waterSource"
                                                name="waterSource"
                                                value={formData.waterSource}
                                                onChange={handleChange}
                                                onClick={handleDropdownToggle}
                                                className="custom-select"
                                            >
                                                <option value="">Select</option>
                                                <option value="waterSource1">water Source 1</option>
                                                <option value="waterSource2">water Source 2</option>
                                            </select>
                                            <span className="icon-container">
                                               <DownOutlined />
                                            </span>
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label>Transport Availability</label>
                                        <div className="option-container">
                                            {transportAvailability.map((transport, index) => (
                                                <div
                                                    key={index}
                                                    className={`option ${activeIndex === index ? 'active' : ''}`}
                                                    onClick={() => handleBoxClick(index)}
                                                >
                                                    {transport.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="nearestRoadDistance">Nearest Road Distance</label>
                                        <div className="select-container">
                                            <select
                                                id="nearestRoadDistance"
                                                name="nearestRoadDistance"
                                                value={formData.nearestRoadDistance}
                                                onChange={handleChange}
                                                onClick={handleDropdownToggle}
                                                className="custom-select"
                                            >
                                                <option value="">Select</option>
                                                <option value="nearest Road Distance">Nearest Road Distance 1</option>
                                                <option value="Nearest Road Distance">Nearest Road Distance 2</option>
                                            </select>
                                            <span className="icon-container">
                                                Km <DownOutlined />
                                            </span>
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="openSides">No of Open Sides</label>
                                        <div className="select-container">
                                            <select
                                                id="openSides"
                                                name="openSides"
                                                value={formData.openSides}
                                                onChange={handleChange}
                                                onClick={handleDropdownToggle}
                                                className="custom-select"
                                            >
                                                <option value="">Select</option>
                                                <option value="openSides1">open Sides 1</option>
                                                <option value="openSides2">open Sides 2</option>
                                            </select>
                                            <span className="icon-container">
                                                <DownOutlined />
                                            </span>
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label>Construction allowed on this land?</label>
                                        <div className="option-container">
                                            {constructionAllowed.map((construction, index) => (
                                                <div
                                                    key={index}
                                                    className={`option ${activeIndex === index ? 'active' : ''}`}
                                                    onClick={() => handleBoxClick(index)}
                                                >
                                                    {construction.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="constructionsDone">Any constructions done?</label>
                                        <textarea
                                            rows={4}
                                            id="constructions"
                                            name="constructions"
                                            value={formData.constructions}
                                            onChange={handleChange}
                                            placeholder="Mention construction done on the land"
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                            <label>Is there a boundary wall around the land?</label>
                                            <div className="option-container">
                                                {constructionAllowed.map((construction, index) => (
                                                    <div
                                                        key={index}
                                                        className={`option ${activeIndex === index ? 'active' : ''}`}
                                                        onClick={() => handleBoxClick(index)}
                                                    >
                                                        {construction.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Land previously used for?</label>
                                            <div className="option-container">
                                                {previouslyUsed.map((land, index) => (
                                                    <div
                                                        key={index}
                                                        className={`option ${activeIndex === index ? 'active' : ''}`}
                                                        onClick={() => handleBoxClick(index)}
                                                    >
                                                        {land.name}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                        <label htmlFor="previouslyUsedLand">How is the land previously used?</label>
                                        <textarea
                                            rows={4}
                                            id="previouslyUsedLand"
                                            name="previouslyUsedLand"
                                            value={formData.previouslyUsedLand}
                                            onChange={handleChange}
                                            placeholder="Mention how the land is previously used"
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label>Any restriction on the land use?</label>
                                        <div className="option-container">
                                            {constructionAllowed.map((construction, index) => (
                                                <div
                                                    key={index}
                                                    className={`option ${activeIndex === index ? 'active' : ''}`}
                                                    onClick={() => handleBoxClick(index)}
                                                >
                                                    {construction.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="landRestricted">How is the land restricted to use?</label>
                                        <textarea
                                            rows={4}
                                            id="landRestricted"
                                            name="landRestricted"
                                            value={formData.landRestricted}
                                            onChange={handleChange}
                                            placeholder="Mention how the land is restricted for certain use"
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Land prone to any environmental conditions?</label>
                                        <div className="option-container">
                                            {landProneEnvironment.map((landProne, index) => (
                                                <div
                                                    key={index}
                                                    className={`option ${activeIndex === index ? 'active' : ''}`}
                                                    onClick={() => handleBoxClick(index)}
                                                >
                                                    {landProne.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Availability of basic utilities</label>
                                        <div className="option-container">
                                            {utilities.map((utility, index) => (
                                                <div
                                                    key={index}
                                                    className={`option ${activeIndex === index ? 'active' : ''}`}
                                                    onClick={() => handleBoxClick(index)}
                                                >
                                                     <PlusOutlined className='addIcon' /> {utility.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Land Facing</label>
                                        <div className="option-container">
                                            {landFacing.map((land, index) => (
                                                <div
                                                    key={index}
                                                    className={`option ${activeIndex === index ? 'active' : ''}`}
                                                    onClick={() => handleBoxClick(index)}
                                                >
                                                    {land.name}
                                                </div>
                                            ))}
                                        </div>
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
        </div>
    )
}
