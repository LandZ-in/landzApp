import React from 'react'
import Messages from '../components/Messages';
import Calls from '../components/Calls';
import PersonalVisits from '../components/PersonalVisits';
export default function Interactions() {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs = [
      { label: 'Messages', content: <Messages /> },
      { label: 'Calls', content: <Calls /> },
      { label: 'Personal Visits', content: <PersonalVisits /> },
    
  ];

  return (
    <div className='adminContent'>
         <div className='headContainer'>
          <div className='mediumHeading'>
            <span >Interactions</span>
          </div>
          <div className='smallHeading'>
            <span >Access and track all your property-related interactions in one convenient place.</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection:"row", gap:"50px", marginTop:"24px"}}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveTab(index)}
                        style={{
                            padding: '5px 0px',
                            cursor: 'pointer',
                            borderBottom: activeTab === index ? '2px solid #065E14' : 'none',
                            color: activeTab === index ? '#065E14' : '#A0A0A0',
                        }}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div style={{ padding: '20px'}}>
                {tabs[activeTab].content}
            </div>
    </div>
  )
}
