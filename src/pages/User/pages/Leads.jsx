import React from 'react'
import noLeadsImg from '../images/no-leads.png';
import {
    MoreOutlined, PhoneOutlined
} from "@ant-design/icons";
export default function Leads() {
    return (
        <div className='adminContent'>
            <div className='headContainer'>
                <div className='mediumHeading'>
                    <span >Leads</span>
                </div>
                <div className='SmallHeading'>
                    <span >Effortlessly Track and Convert Your Leads into Clients!</span>
                </div>
            </div>
            {/* empty Leads IMG */}

            {/* <div className='noLeads'>
            <img src={noLeadsImg} alt='no leads' />
        </div> */}
            <div className='leadContainer'>
                <div className='leadCard'>
                    <div className='leadCardHead leadHeadOrangeColor' >
                        <span style={{ color: "black" }}>
                            New Leads
                        </span>
                    </div>
                    <div className='leadCardContent leadContentOrangeColor'>
                        <div className='leadsTime'>
                            <span>July 2024</span>
                        </div>

                        <div className='logList'>
                            <div className='logItem'>
                                <div className='logName'><span>Name</span></div>
                                <div className='logIcons'>
                                    <PhoneOutlined />
                                    <MoreOutlined />
                                </div>

                            </div>

                            <div className='logItem'>
                                <div className='logName'><span>Name</span></div>
                                <div className='logIcons'>
                                    <PhoneOutlined />
                                    <MoreOutlined />
                                </div>

                            </div>
                            <div className='logItem'>
                                <div className='logName'><span>Name</span></div>
                                <div className='logIcons'>
                                    <PhoneOutlined />
                                    <MoreOutlined />
                                </div>

                            </div>
                            <div className='logItem'>
                                <div className='logName'><span>Name</span></div>
                                <div className='logIcons'>
                                    <PhoneOutlined />
                                    <MoreOutlined />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='leadCard'>
                    <div className='leadCardHead leadHeadBlueColor'>
                        Contacted
                    </div>
                    <div className='leadCardContent leadContentBlueColor'>
                        <div className='leadsTime'>
                            <span>Today</span>
                        </div>

                        <div className='logList'>
                            <div className='logItem'>
                                <div className='logName'><span>Name</span></div>
                                <div className='logIcons'>
                                    <PhoneOutlined />
                                    <MoreOutlined />
                                </div>
                            </div>

                            <div className='logItem'>
                                <div className='logName'><span>Name</span></div>
                                <div className='logIcons'>
                                    <PhoneOutlined />
                                    <MoreOutlined />
                                </div>
                            </div>

                            <div className='logItem'>
                                <div className='logName'><span>Name</span></div>
                                <div className='logIcons'>
                                    <PhoneOutlined />
                                    <MoreOutlined />
                                </div>
                            </div>

                            <div className='logItem'>
                                <div className='logName'><span>Name</span></div>
                                <div className='logIcons'>
                                    <PhoneOutlined />
                                    <MoreOutlined />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='leadCard'>
                    <div className='leadCardHead leadHeadGreenColor'>
                        Clients
                    </div>
                    <div className='leadCardContent leadContentGreenColor'>
                        <div>
                            <div className='leadsTime'>
                                <span>Today</span>
                            </div>

                            <div className='logList'>
                                <div className='logItem'>
                                    <div className='logName'><span>Name</span></div>
                                    <div className='logIcons'>
                                        <PhoneOutlined />
                                        <MoreOutlined />
                                    </div>
                                </div>
                            </div>

                            <div className='logList'>
                                <div className='logItem'>
                                    <div className='logName'><span>Name</span></div>
                                    <div className='logIcons'>
                                        <PhoneOutlined />
                                        <MoreOutlined />
                                    </div>
                                </div>
                            </div>
                            <div className='logList'>
                                <div className='logItem'>
                                    <div className='logName'><span>Name</span></div>
                                    <div className='logIcons'>
                                        <PhoneOutlined />
                                        <MoreOutlined />
                                    </div>
                                </div>
                            </div>
                            <div className='logList'>
                                <div className='logItem'>
                                    <div className='logName'><span>Name</span></div>
                                    <div className='logIcons'>
                                        <PhoneOutlined />
                                        <MoreOutlined />
                                    </div>
                                </div>
                            </div>
                            <div className='logList'>
                                <div className='logItem'>
                                    <div className='logName'><span>Name</span></div>
                                    <div className='logIcons'>
                                        <PhoneOutlined />
                                        <MoreOutlined />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='leadsTime'>
                                <span>Yesterday</span>
                            </div>

                            <div className='logList'>
                                <div className='logItem'>
                                    <div className='logName'><span>Name</span></div>
                                    <div className='logIcons'>
                                        <PhoneOutlined />
                                        <MoreOutlined />
                                    </div>
                                </div>
                            </div>

                            <div className='logList'>
                                <div className='logItem'>
                                    <div className='logName'><span>Name</span></div>
                                    <div className='logIcons'>
                                        <PhoneOutlined />
                                        <MoreOutlined />
                                    </div>
                                </div>
                            </div>
                            <div className='logList'>
                                <div className='logItem'>
                                    <div className='logName'><span>Name</span></div>
                                    <div className='logIcons'>
                                        <PhoneOutlined />
                                        <MoreOutlined />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='leadCard'>
                    <div className='leadCardHead leadHeadPinkColor'>
                        Closed
                    </div>
                    <div className='leadCardContent leadContentPinkColor'>
                        <div className='leadsTime'>
                            <span>Today</span>
                        </div>

                        <div className='logList'>
                            <div className='logItem'>
                                <div className='logName'><span>Name</span></div>
                                <div className='logIcons'>
                                    <PhoneOutlined />
                                    <MoreOutlined />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
