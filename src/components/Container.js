import React from 'react';
import { ContainerWrapper  } from '../elements';
import { Nav, Footer, Hero, Seo } from '../components';
import { graphql } from 'gatsby';

export const Container = ({children}) => {

    

    return (<ContainerWrapper>
        <Seo/>   
        <Nav/>
        <Hero />
        {children}
        <Footer />
    </ContainerWrapper>)
}

