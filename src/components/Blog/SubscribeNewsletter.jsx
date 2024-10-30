import React, { useState } from 'react'

const SubscribeNewsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscribing email:', email);
        setEmail('');
    };

    return (
        <div className='subscribe-newsletter'>
            <div className="newsletter-container">
                <div className="newsletter-content">
                    <p className="newsletter-tagline">Stay Informed, Stay Connected</p>
                    <h1 className="newsletter-heading">Subscribe to Our Newsletter</h1>
                    <p className="newsletter-description">
                        Join our newsletter and receive the latest updates, exclusive offers, and valuable insights on land buying and selling delivered to your inbox
                    </p>

                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SubscribeNewsletter