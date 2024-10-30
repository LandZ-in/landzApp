
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import FarmlandSearchCard from './FarmlandSearchCard'
import { useEffect, useState } from 'react'
import SearchCardTablet from './SearchCardTablet'
import { useNavigate } from 'react-router-dom'

const ListViewSearch = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)
    const navigate = useNavigate();

    const handleResize = () => {
        setIsDesktop(window.innerWidth > 1024);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* cards for search reasult  */}
            <div>
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
                <div className="mt-5 cursor-pointer" onClick={() => navigate('/land-profile')}>
                    {isDesktop ? <FarmlandSearchCard /> : <SearchCardTablet />}
                </div>
                
            </div>

            {/* pagination  */}

            <div className="pagination flex justify-between px-10 mt-5">
                <div className="prev">
                    <button disabled> <ArrowLeftOutlined /> Previous</button>
                </div>
                <div className="pages">
                    <button className='bg-[#F0FDF2] rounded-lg border-none px-5 py-1'>1</button>
                    <button className='rounded-lg border-none px-5 py-1'>2</button>
                    <button className='rounded-lg border-none px-5 py-1'>3</button>
                    <button className='rounded-lg border-none px-5 py-1'>. . .</button>
                    <button className='rounded-lg border-none px-5 py-1'>8</button>
                    <button className='rounded-lg border-none px-5 py-1'>9</button>
                    <button className='rounded-lg border-none px-5 py-1'>10</button>
                </div>

                <div className="next">
                    <button>Next <ArrowRightOutlined /></button>
                </div>
            </div>
        </>
    )
}

export default ListViewSearch