import React from 'react';
import Section from '../components/common/Section';
import { Rate } from '../components/context/Rate';
import * as FlexLayout from '../styles/layouts/flex';


const Home = () => {

    return (
        <Section id='home'>
            <FlexLayout.FlexCenter>
                <Rate />
            </FlexLayout.FlexCenter>
        </Section>
    )
};

export default Home;