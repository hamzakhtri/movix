import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'

const Trending = () => {

    cosnt[endPoint, setEndPoint] = useState("day");

    const onTabChange = (tab) => {
        
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className='carouselTitle'>
                    Trending
                </span>
                <SwitchTab data={["Day", "Week"]} />
            </ContentWrapper>
        </div>
    )
}

export default Trending