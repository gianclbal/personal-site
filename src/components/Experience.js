import React from 'react';
import { StyledExperienceWrapper, P } from '../elements';
import { ExperienceTabs } from './Tabs';

export const Experience = () => {
    return(<StyledExperienceWrapper id="experience">
        <div className="inner">
            <div className="header">
                <P size="large" weight="bold">Experience</P>
                </div>
            <div>
                <ExperienceTabs />
                </div>
        </div>
    </StyledExperienceWrapper>)
}