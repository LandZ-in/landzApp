import React from 'react'
import SubscriptionCard from '../components/SubscriptionCard'
import { SUBSCRIPTION_PLANS } from '../../../data'

const Subscription = () => {
    return (
        <div className='adminContent'>

    
        <section className='subscription-section'>
            <div>
                <div className='mediumHeading'>
                    <span >Subscription </span> 
                </div>
                <div className='smallHeading'>
                    <span >Easily Manage Your Subscription and Maximize Your Benefits.</span>
                </div>
            </div>


            <div className="current-plan">
                <div className='mediumHeading'>
                    <span >Current Plan </span>
                </div>
                <div className='smallHeading'>
                    <span >You are using <span className='current-plan-type'>FREE</span> plan at this moment. Explore our other plans to get additional features that benefits.</span>
                </div>
            </div>

            <div className="subscription-card">

                {SUBSCRIPTION_PLANS.map((data) => (
                    <SubscriptionCard key={data.plan} plan={data.plan} price={data.price} planDetails={data.planDetails} />
                ))}
            </div>
        </section>
        </div>
    )
}

export default Subscription