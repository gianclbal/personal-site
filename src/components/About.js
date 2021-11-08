import React from 'react';
import { StyledAboutWrapper, H2, P } from '../elements';
import { ContentTabs } from './Tabs';
export const About = () => {
    
    return(<StyledAboutWrapper>
        <div className="inner">
            <div classNAme="header">
                <P size="large" weight="bold">Meet Gian</P>
            </div>
            <div>
                <ContentTabs></ContentTabs>
                </div>
        </div>

    </StyledAboutWrapper>)
}

