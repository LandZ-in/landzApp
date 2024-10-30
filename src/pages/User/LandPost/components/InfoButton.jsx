import React, { useState, useRef, useEffect } from 'react';
import { ImInfo } from "react-icons/im";

const InfoButton = ({ info, id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="tooltip-container" ref={tooltipRef}>

            <ImInfo
                className='i-icon'
                onClick={() => setIsVisible(!isVisible)}
                aria-label={`Show information for ${id}`}
            />

            {isVisible && (
                <div className="tooltip-wrapper">
                    <div className="tooltip-content">
                        <div className="tooltip-arrow" />
                        <div className="tooltip-text">
                            {info}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InfoButton