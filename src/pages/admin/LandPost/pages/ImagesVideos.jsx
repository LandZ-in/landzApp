import React, { useState } from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";

const ImagesVideos = () => {

    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);

    const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files);
        setPhotos([...photos, ...files]);
    };

    const handleVideoUpload = (e) => {
        const files = Array.from(e.target.files);
        setVideos([...videos, ...files]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ photos, videos });
    };
    return (
        <section className='land-imageVideos-section'>


            <div className="row">
                <div className="col-66 left-form-container">

                    <form className="upload-form" onSubmit={handleSubmit}>
                        <div className="upload-group">
                            <label>Photos</label>
                            <div className="upload-box">
                                <input type="file" accept="image/png, image/jpeg" onChange={handlePhotoUpload} />
                                <div className="upload-placeholder">
                                    <AiOutlineCloudUpload className="upload-icon" />
                                    <p>Browse and choose the files you want to upload from your device</p>
                                    <small>Note: Upload only png, jpeg images with a resolution of 400x300</small>
                                </div>
                            </div>

                            {/* Display Uploaded Photos */}
                            <div className="uploaded-files">
                                {photos.map((photo, index) => (
                                    <img
                                        key={index}
                                        src={URL.createObjectURL(photo)}
                                        alt={`upload-${index}`}
                                        className="uploaded-photo"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="upload-group">
                            <label>Videos</label>
                            <div className="upload-box">
                                <input type="file" accept="video/*" onChange={handleVideoUpload} />
                                <div className="upload-placeholder">
                                    <AiOutlineCloudUpload className="upload-icon" />
                                    <p>Browse and choose the files you want to upload from your device</p>
                                    <small>Note: Upload only png, jpeg images with a resolution of 400x300</small>
                                </div>
                            </div>
                            {/* Display Uploaded Videos */}
                            <div className="uploaded-files">
                                {videos.map((video, index) => (
                                    <video
                                        key={index}
                                        src={URL.createObjectURL(video)}
                                        controls
                                        className="uploaded-video"
                                    />
                                ))}
                            </div>
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

export default ImagesVideos