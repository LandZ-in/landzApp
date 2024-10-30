import React from 'react'
import { GiCheckMark } from "react-icons/gi";

const SubscriptionCard = ({ plan, price, planDetails }) => {
    return (
        <div className="pricing-card">
            <div className="card-header">{plan}</div>
            <div className="pricing-card-data">
                <div className="card-price">${price}/mth</div>
                <div className="card-subtext">Billed annually.</div>
                <ul className="features-list">

                    {planDetails.map((data) => (
                        <li key={data.id}><span className="check-icon"><GiCheckMark /></span>{data.detail}</li>
                    ))}
                </ul>
                <button className="get-started-btn">Get started</button>
                <div className="footer-text">15 days of free trial available</div>
            </div>
        </div>
    )
}

export default SubscriptionCard