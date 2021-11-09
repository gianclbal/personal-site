import React from 'react';
import { StyledAboutWrapper, H2, P } from '../elements';
import { AboutTabs } from './Tabs';
export const About = () => {
    
    return(<StyledAboutWrapper id="about">
        <div className="inner">
            <div className="header">
                <P size="large" weight="bold">Meet Gian</P>
            </div>
            <div>
                <AboutTabs></AboutTabs>
                </div>
        </div>

    </StyledAboutWrapper>)
}

