import React from 'react'
import testimonialImg from "../images/testimonial.png"
export default function Testimonial() {
    return (
        <div className='mainContainer'>
              <div>
          <div className='largeHeading'>
            <span >What people say about us</span>
          </div>
          <div className='smallHeading'>
            <span >Hear From Our Satisfied Clients: Real Stories, Real Success, Real Estate Excellence</span>
          </div>
        </div>
 
            <div className='testimonialContainer'>
                <div className='testimonialCard'>
                    <div className='testimonialImgDiv'>
                        <img className='testimonialImg' src={testimonialImg} alt='testimonial-Img' />
                    </div>
                    <div className='testimonialContent'>
                        <div className='authorNameContainer'>
                            <div className='authorName'>
                                <span>Rahul</span>
                            </div>
                            <div className="starsContainer">
                                <div className="stars">
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star">★</span>
                                    <span className="star">★</span>
                                </div>
                            </div>
                        </div>

                        <p style={{margin:"0px"}}>Hear From Our Satisfied Clients: Real Stories, Real Success, Real Estate Excellence</p>
                    </div>
                </div>
            </div>

            <div className='arrowNavigation' >
                <div className='arrow'> &#x2190;</div>
                <div className='arrow'> &#x2192; </div>
            </div>
        </div>
    )
}
