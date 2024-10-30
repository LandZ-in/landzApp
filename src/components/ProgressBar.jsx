import React from 'react'

const ProgressBar = ({width,strokeColor, trailColor, percentage, strokeWidth, label, ...props }) => {

    const progressBarStyle = {
        width: width,
        height: `${strokeWidth}px`,
        backgroundColor: trailColor,
        borderRadius: '50px',
        overflow: 'hidden',
        position: 'relative',
      };
    
      const progressStyle = {
        width: `${percentage}%`,
        height: '100%',
        backgroundColor: strokeColor,
        transition: 'width 0.3s ease',
        borderRadius: 'inherit',
      };
    
      const labelStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        fontWeight: 'bold',
      };
    return (
        <>
            <div style={progressBarStyle}>
                <div style={progressStyle} />
                {label && <span style={labelStyle}>{percentage}%</span>}
            </div>
        </>
    )
}

export default ProgressBar