import React from 'react';
import homeBanner from "../images/banner1.jpg";
import SimilarLands from '../components/SimilarLands';
import searchIcon from "../images/search-icon.png";
import NotificationIcon from "../images/notification-icon.png";
import PropertyAssitanceIcon from "../images/expert-assistance.png";
import NewListLands from '../components/NewListLands';
import Testimonial from '../components/Testimonial';

export default function Home() {

  return (
    <>

      <div className='mainContainer'>
        <div>
          <div className='largeHeading'>
            <span >Embark on Your Land Journey:<br />
              Uncover Your Ideal Plot</span>
          </div>
          <div className='smallHeading'>
            <span >Explore, Purchase, and Sell with Effortless Ease</span>
          </div>
        </div>


        <div>
          <button className='primaryBtn exploreBtn'>Explore</button>
        </div>

        <div className='homeBanner'>
          <img src={homeBanner} alt='banner' width="100%" />
        </div>
        <SimilarLands />
      </div>

      {/* what we offer section */}
      <div className='offerDiv'>

    
        <div>
        <div className='largeHeading'> 
          <span>What we offer</span>
          </div>
          <div className='smallHeading'> 
            <span>
            Discover What Sets Us Apart: Your Premier Destination for Land Buying and Selling
          </span>
          </div>
        </div>
        <div className='offerringList'>
          <div className='offerringListItem'>
            <div>
              <img src={searchIcon} alt='property search' />
            </div>
            <div className='offerringListItemHeader'>
              <span>Easy Property Search</span>
            </div>
            <div className='offerringListItemContent'>
              <span >Easily find the perfect piece of land by
                customizing your search criteria.</span>
            </div>
          </div>

          <div className='offerringListItem'>
            <div>
              <img src={NotificationIcon} alt='property match alert' />
            </div>

            <div className='offerringListItemHeader'>
              <span>Property Match Alerts</span>
            </div>
            <div className='offerringListItemContent'>
              <span>Get notified when a property that matches your
                preferences becomes available.</span>
            </div>
          </div>

          <div className='offerringListItem'>
            <div>
              <img src={PropertyAssitanceIcon} alt='property assitance' />
            </div>
            <div className='offerringListItemHeader'>
              <span>Expert Assistance</span>
            </div>
            <div className='offerringListItemContent'>
              <span>Connect & chat with experienced legal advisors
                for guidance and support.</span>
            </div>

          </div>

        </div>
      </div>

      <NewListLands />

      <Testimonial />

    </>
  )
}
