import React, { useState } from 'react'
import { LAND_PROFILE_SIMILAR_LISTING_TABS } from '../data';
import SimilarAgriLands from './SimilarAgriLands';

const SimilarLandListings = () => {
    const [activeTab, setActiveTab] = useState('agriculture');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'agriculture':
                return <SimilarAgriLands />;
            case 'residential':
                return <p>Residential Lands goes here</p>;
            case 'commercial':
                return <p>Commercial Lands goes here</p>;
            case 'industrial':
                return <p>Property Transactions content</p>;
            case 'others':
                return <p>Market Rate content </p>;
            default:
                return null;
        }
    };

    return (
        <>

            <div className='p-0 lg:px-7 mt-5 w-full'>
                <div className='rounded-xl shadow-md px-8 py-10 w-full'>

                    <h3 className='text-2xl font-bold'>Discover Similar Land Listings</h3>
                    <p className='my-4'>Explore similar land listings tailored to your dream and investments</p>

                    <div className="mb-4">
                        <ul className="flex flex-wrap -mb-px">
                            {LAND_PROFILE_SIMILAR_LISTING_TABS.map((tab) => (
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

                    <div className=" p-0 lg:p-4 rounded-lg">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimilarLandListings