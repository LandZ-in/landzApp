import React, { useState } from 'react';
import feedback from '../../images/feedback.jpg';

const SubmitFeedback = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    mobileNumber: "123-456-7890",
    gender: "female",
    experience: [],
    soilFertility: [],
    irrigation: "yes",
    previousUse: "Agriculture",
    waterAccess: "yes",
    waterQuality: "Clean",
    waterRights: "no",
    distanceToMarket: "10 miles",
    environmentalConcerns: "None",
    titleDisputes: "Clear title",
    suitableCrops: "Wheat, Corn",
    roi: "4",
    developmentPotential: "yes",
    recommend: "yes",
    overallRating: "4",
    agreePublicReview: true,
    confirmHonestReview: true,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      if (name === "experience" || name === "soilFertility") {
        setFormData(prevData => ({
          ...prevData,
          [name]: checked
            ? [...prevData[name], value]
            : prevData[name].filter(item => item !== value)
        }));
      } else {
        // For regular checkboxes like agreePublicReview
        setFormData(prevData => ({
          ...prevData,
          [name]: checked
        }));
      }
    } else {
      // For other input types (text, radio, etc.)
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  console.log(Array.isArray(formData.experience))
  
  return (
    <section className="submit-feedback-section">
      <div className="section-container">
        <div className="header">
          <h1>Submit Feedback</h1>
        </div>

        <div className="form-container">
          <div className="right">
            <form className="feedback-form" onSubmit={handleSubmit}>
              
              <div className="input-group">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  value={formData.fullName} 
                  onChange={handleChange} 
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email} 
                  onChange={handleChange} 
                />
              </div>

              <div className="input-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobileNumber" 
                  name="mobileNumber"
                  value={formData.mobileNumber} 
                  onChange={handleChange} 
                />
              </div>

              <div className="input-group">
                <label>Gender</label>
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="male" 
                      checked={formData.gender === "male"} 
                      onChange={handleChange} 
                    /> Male
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="female" 
                      checked={formData.gender === "female"} 
                      onChange={handleChange} 
                    /> Female
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="others" 
                      checked={formData.gender === "others"} 
                      onChange={handleChange} 
                    /> Others
                  </label>
                </div>
              </div>

              <div className="input-group">
                <label>How was your overall experience visiting this land?</label>
                <div className="checkbox-group">
                  {["Excellent", "Good", "Average", "Poor"].map(option => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        name="experience"
                        value={option}
                        checked={formData.experience.includes(option)}
                        onChange={handleChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="input-group">
                <label>How would you rate the soil fertility?</label>
                <div className="checkbox-group">
                  {["Very Fertile", "Fertile", "Moderate", "Poor"].map(option => (
                    <label key={option}>
                      <input
                        type="checkbox"
                        name="soilFertility"
                        value={option}
                        checked={formData.soilFertility.includes(option)}
                        onChange={handleChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="input-group">
                <label>Is the land well-drained, and are there irrigation facilities available?</label>
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="irrigation" 
                      value="yes" 
                      checked={formData.irrigation === "yes"} 
                      onChange={handleChange} 
                    /> Yes
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="irrigation" 
                      value="no" 
                      checked={formData.irrigation === "no"} 
                      onChange={handleChange} 
                    /> No
                  </label>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="previousUse">What has the land been previously used for?</label>
                <input 
                  type="text" 
                  id="previousUse" 
                  name="previousUse"
                  value={formData.previousUse} 
                  onChange={handleChange} 
                />
              </div>

              <div className="input-group">
                <label>Is there access to water resources?</label>
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="waterAccess" 
                      value="yes" 
                      checked={formData.waterAccess === "yes"} 
                      onChange={handleChange} 
                    /> Yes
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="waterAccess" 
                      value="no" 
                      checked={formData.waterAccess === "no"} 
                      onChange={handleChange} 
                    /> No
                  </label>
                </div>
              </div>

              <div className="input-group">
                <label>How would you describe the quality of water available?</label>
                <div className="radio-group">
                  {["Clean", "Moderate", "Contaminated"].map(option => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="waterQuality"
                        value={option.toLowerCase()}
                        checked={formData.waterQuality === option}
                        onChange={handleChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="input-group">
                <label>Are there any water rights or restrictions associated with the property?</label>
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="waterRights" 
                      value="yes" 
                      checked={formData.waterRights === "yes"} 
                      onChange={handleChange} 
                    /> Yes
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="waterRights" 
                      value="no" 
                      checked={formData.waterRights === "no"} 
                      onChange={handleChange} 
                    /> No
                  </label>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="distanceToMarket">How far is the land from the nearest market or distribution center?</label>
                <input 
                  type="text" 
                  id="distanceToMarket" 
                  name="distanceToMarket"
                  value={formData.distanceToMarket} 
                  onChange={handleChange} 
                />
              </div>

              <div className="input-group">
                <label htmlFor="environmentalConcerns">Are there any environmental concerns?</label>
                <textarea 
                  id="environmentalConcerns" 
                  name="environmentalConcerns"
                  value={formData.environmentalConcerns} 
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="input-group">
                <label htmlFor="titleDisputes">Is the title clear, and are there any disputes or restrictions?</label>
                <textarea 
                  id="titleDisputes" 
                  name="titleDisputes"
                  value={formData.titleDisputes} 
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="input-group">
                <label htmlFor="suitableCrops">What types of crops or agricultural uses is the land suitable for?</label>
                <textarea 
                  id="suitableCrops" 
                  name="suitableCrops"
                  value={formData.suitableCrops} 
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="input-group">
                <label>What is the return on investment potential?</label>
                <select 
                  name="roi" 
                  value={formData.roi} 
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5].map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label>Does the land have any development potential?</label>
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="developmentPotential" 
                      value="yes" 
                      checked={formData.developmentPotential === "yes"} 
                      onChange={handleChange} 
                    /> Yes
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="developmentPotential" 
                      value="no" 
                      checked={formData.developmentPotential === "no"} 
                      onChange={handleChange} 
                    /> No
                  </label>
                </div>
              </div>

              <div className="input-group">
                <label>Would you recommend this land for agricultural or investment purposes?</label>
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="recommend" 
                      value="yes" 
                      checked={formData.recommend === "yes"} 
                      onChange={handleChange} 
                    /> Yes
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="recommend" 
                      value="no" 
                      checked={formData.recommend === "no"} 
                      onChange={handleChange} 
                    /> No
                  </label>
                </div>
              </div>

              <div className="input-group">
                <label>Overall Rating</label>
                <select 
                  name="overallRating" 
                  value={formData.overallRating} 
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5].map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label>
                  <input 
                    type="checkbox" 
                    name="agreePublicReview" 
                    checked={formData.agreePublicReview} 
                    onChange={handleChange} 
                  />
                  I agree for this feedback to be shared publicly
                </label>
              </div>

              <div className="input-group">
                <label>
                  <input 
                    type="checkbox" 
                    name="confirmHonestReview" 
                    checked={formData.confirmHonestReview} 
                    onChange={handleChange} 
                  />
                  I confirm that this review is honest and based on my experience
                </label>
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>

          <div className="left">
            <img src={feedback} alt="Submit Feedback" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitFeedback;
