import { InfoCircleOutlined } from '@ant-design/icons'
import { LAND_DOCUMENT } from '../data';
import { Tooltip } from 'react-tooltip'

const LandDocument = () => {

    const getColorClass = (percentage) => {
        if (percentage >= 90) return 'text-[#34A853]';
        if (percentage >= 60) return 'text-[#FBBC05]';
        return 'A0A0A0'; //Default
    };


    return (
        <>
            <div className='flex flex-wrap w-full pt[-20px]'>
                {LAND_DOCUMENT.map((data) => (
                    <div key={data.title} className="container bg-[#F9FAFB] shadow-md relative p-4 rounded-lg w-[30%] me-8 mt-8">
                        <h3 className='text-lg font-semibold'>{data.title}</h3>
                        <p className={`text-sm mt-2 font-semibold ${getColorClass(data.verified)}`}>{data.verified ? `${data.verified}% verified` : "Not uploaded"} <a href="#" className='underline text-[#87441E] ms-10'>Click to view</a></p>

                        <span
                            data-tooltip-id="tool"
                            data-tooltip-content="some popup text"
                            className='absolute right-2 top-3 text-sm text-[#a0a0a0] cursor-pointer'
                        >
                            <InfoCircleOutlined className='text-xl'/>
                            <Tooltip id='tool' className=""/>
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LandDocument