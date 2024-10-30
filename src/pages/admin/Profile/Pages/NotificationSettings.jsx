import React, { useEffect, useState } from 'react';

const NotificationSettings = () => {
    const [settings, setSettings] = useState({
        enableOrDisableAllNotifications: true,
        alertForNewListings: true,
        updatesOnSavedProperties: true,
        notificationForPriceChangesOrStatusUpdates: true,
        newLeadAlerts: true,
        specialOffersAndDiscounts: true,
        newsletterSubscriptions: false,
        subscriptionRenewalAlerts: false,
    });

    const [deliveryMethod, setDeliveryMethod] = useState('sms');

    useEffect(() => {
        if (settings.enableOrDisableAllNotifications) {
            //setting all other settings to true
            setSettings(prev => ({
                ...prev,
                alertForNewListings: true,
                updatesOnSavedProperties: true,
                notificationForPriceChangesOrStatusUpdates: true,
                newLeadAlerts: true,
                specialOffersAndDiscounts: true,
                newsletterSubscriptions: true,
                subscriptionRenewalAlerts: true,
            }));
        } else {
            //setting all other settings to false
            setSettings(prev => ({
                ...prev,
                alertForNewListings: false,
                updatesOnSavedProperties: false,
                notificationForPriceChangesOrStatusUpdates: false,
                newLeadAlerts: false,
                specialOffersAndDiscounts: false,
                newsletterSubscriptions: false,
                subscriptionRenewalAlerts: false,
            }));
        }
    }, [settings.enableOrDisableAllNotifications]);

    const handleToggle = (setting) => {

        if (setting === 'enableOrDisableAllNotifications') {
            setSettings(prev => ({
                ...prev,
                [setting]: !prev[setting],
            }));
        } else {

            setSettings(prev => ({
                ...prev,
                [setting]: !prev[setting],

                enableOrDisableAllNotifications: false,
            }));
        }
    };

    const formatLabel = (key) => {
        return key.split(/(?=[A-Z])/).join(' ').replace(/^\w/, c => c.toUpperCase());
    };

    return (
        <section className='account-settings-section notification-settings-section'>
            <div className='section-heading'>
                <div className="profile-breadcrumb">
                    <span>Profile & Settings / <span className='breadcrumb-active-page'>Notification Settings</span></span>
                </div>
                <div className='mediumHeading'>
                    <span>Profile</span>
                </div>
            </div>

            <div className="notification-settings">
                {Object.entries(settings).map(([key, value]) => (
                    <div key={key} className="setting-row">
                        <span className="setting-label">{formatLabel(key)}</span>
                        <label className="toggle-switch">
                            <input
                                type="checkbox"
                                checked={value}
                                onChange={() => handleToggle(key)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                ))}
                <div className="delivery-method">
                    <span className="setting-label">Choose notification delivery methods</span>
                    <div className="button-group">
                        <label className={`radio-button ${deliveryMethod === 'sms' ? 'active' : ''}`}>
                            <input
                                type="radio"
                                value="sms"
                                checked={deliveryMethod === 'sms'}
                                onChange={() => setDeliveryMethod('sms')}
                            />
                            SMS
                        </label>
                        <label className={`radio-button ${deliveryMethod === 'email' ? 'active' : ''}`}>
                            <input
                                type="radio"
                                value="email"
                                checked={deliveryMethod === 'email'}
                                onChange={() => setDeliveryMethod('email')}
                            />
                            Email
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotificationSettings;
