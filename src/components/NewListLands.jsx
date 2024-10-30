import React from 'react'
import location from "../images/location-icon.png"
import homeBanner from "../images/banner1.jpg";
export default function NewListLands() {
    const [currentIndex, setCurrentIndex] = React.useState(0);


    const cardData = [
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
        { title: '3 Acres Land for Sale', price: '36L', location: 'Srisailam Highway, Hyderabad', rating: 4.3 },
    ];

    const cardsPerSlide = 4;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1, Math.ceil(cardData.length / cardsPerSlide) - 1)
        );
    };

    const displayedCards = cardData.slice(
        currentIndex * cardsPerSlide,
        currentIndex * cardsPerSlide + cardsPerSlide
    );
    return (
        <div>
            <div className='mainContainer'>
                <div>
                    <div className=''>
                        <div>
                            <div className='largeHeading'>
                                <span >Newly Listed Lands</span>
                            </div>
                            <div className='smallHeading'>
                                <span >Explore the Latest Additions to Our Land Portfolio</span>
                            </div>
                        </div>
                        <div className='newlyListedLandsSlider'>
                            {displayedCards.map(() =>
                                <div className="mask">
                                    <img src={homeBanner} alt="land" className="masked-image" />
                                    <div className="slider-card-content">
                                        <div className="card-title-rating">
                                            <p >Agriculture Land
                                            </p>
                                        </div>
                                        <div className="card-price">
                                            &#x20B9; 36 L | 10890 sqft
                                        </div>
                                        <div className="cardLocation">
                                            <img src={location} alt="location" className="locationIcon" />
                                            <p className="locationText" style={{ alignSelf: "center" }}>Srisailam Highway, Hyderabad</p>
                                        </div>
                                        <div className="card-action">
                                            <button className="smallPrimaryBtn">Contact Owner</button>
                                            <span className="star-rating">
                                                <span
                                                    style={{ fontSize: "14px", alignSelf: "flexEnd", paddingRight: "3px", fontWeight: 600 }}>4.0
                                                </span>
                                                &#9734;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}



                        </div>

                        <div className='arrowNavigation' >
                            <div
                                className='arrow'
                                style={{ color: currentIndex > 0 ? '#212121' : '#A0A0A0', border: currentIndex > 0 ? "2px solid #212121" : "2px solid #A0A0A0" }}
                                onClick={handlePrev}
                            > &#x2190;</div>
                            <div
                                className='arrow'
                                style={{ color: currentIndex < Math.ceil(cardData.length / cardsPerSlide) - 1 ? '#000' : '#A0A0A0', border: currentIndex < Math.ceil(cardData.length / cardsPerSlide) - 1 ? "2px solid #212121" : "2px solid #A0A0A0" }}
                                onClick={handleNext}
                            > &#x2192; </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
