import React, { useEffect } from 'react'
import getVerifiedAgent from '../images/get-verified-agent.png';
import getVerifiedBuilder from '../images/get-verified-builder.png';
import VerifiedByAgent from '../components/VerifiedByAgent';
import VerifiedByBuilder from '../components/VerifiedByBuilder';
export default function GetVerified() {
    const [formData, setFormData] = React.useState({
        userType: 'Agent',
    });
    const [isAgent, setAgent] = React.useState(true);
    const [isBuilder, setBuilder] = React.useState(false);



    const handleVerifyByAgentOrBuilder = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, userType: value });
        if (value === "Agent") {
            setAgent(true);
            setBuilder(false);
        } else {
            setAgent(false);
            setBuilder(true);
        }
    }
    useEffect(() => {
        console.log("isAgent:", isAgent);
        console.log("isBuilder:", isBuilder);
    }, [isAgent, isBuilder]);


    return (
        <>
            <div className='mediumHeading'>
                <span>Request Verification</span>

            </div>
            <div className='row'>
                <div className='col-66'>
                    <div className="getVerifiedAgentContainer">

                       

                            <div className="form-group">
                                <label className='label'>I am a</label>
                                <div className="radio-group">
                                    {['Agent', 'Builder'].map((option) => (
                                        <label key={option} className="radio-label label">
                                            <input
                                                type="radio"
                                                name="userType"
                                                value={option}
                                                checked={formData.userType === option}
                                                onChange={handleVerifyByAgentOrBuilder}
                                            />
                                            <span className="radio-custom"></span>
                                            <span className='radio-option'>{option}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                          {isAgent?( 
                            
                          <><VerifiedByAgent /></> ):(<VerifiedByBuilder />)}
                         
                    </div>
                </div>
                <div className='col-33'>
                    <div className='noChats'>

                        {isAgent? <img src={getVerifiedAgent} alt='no chats' />: <img src={getVerifiedBuilder} alt='no chats' />}
                    </div>
                </div>
            </div>
        </>
    )
}
