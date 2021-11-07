import React from 'react';
import { ContainerWrapper  } from '../elements';
import { Nav, Footer, Hero } from '../components';

export const Container = ({children}) => {
    return (<ContainerWrapper>
        <Nav/>
        <Hero />
        {children}
        <Footer />
    </ContainerWrapper>)
}

