import React, { useState } from 'react'
import LandDocument from './LandDocument';
import LandPricingDetails from './LandPricingDetails';
import { LAND_PROFILE_MORE_DETAILS_TABS, LAND_PROFILE_BASIC_DETAILS } from '../data';
import LandOwnerDetails from './LandOwnerDetails';

const LandProfileMoreDetails = () => {
    const [activeTab, setActiveTab] = useState('basicDetails');
    

    const renderBasicDetails = () => (
        <div className="flex flex-wrap -mx-2">
            {LAND_PROFILE_BASIC_DETAILS.map((detail, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/5 px-2 mb-4">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500 uppercase">{detail.label}</span>
                        <span className="font-medium">{detail.value}</span>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'basicDetails':
                return renderBasicDetails();
            case 'documents':
                return <LandDocument />;
            case 'pricing':
                return <LandPricingDetails />;
            case 'ownerDetails':
                return <LandOwnerDetails />;
            case 'marketRate':
                return <p>Market Rate content </p>;
            default:
                return null;
        }
    };


    return (
        <>
            {/* main container  */}
            <div className='px-7 mt-5 w-full '>
                <div className='rounded-xl shadow-md px-8 py-10 w-full'>

                    <h2 className='text-2xl font-bold'>More Details</h2>
                    <div className="mb-4">
                        <ul className="flex flex-wrap -mb-px">
                            {LAND_PROFILE_MORE_DETAILS_TABS.map((tab) => (
                                <li key={tab.id} className="mr-2">
                                    <button
                                        className={`inline-block pt-4 px-4 rounded-t-lg ${activeTab === tab.id
                                                ? 'text-[#065E14] border-b-2 border-[#065E14] font-semibold'
                                                : 'text-gray-500 hover:text-gray-600 hover:border-gray-300'
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        {tab.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandProfileMoreDetails