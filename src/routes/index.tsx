import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Main } from '../styles/components/common';
import Hero from './Hero';


const Routes = () => {
    return (
        <Main>
            <Switch>
                <Route path='/' element={<Hero />} />
            </Switch>
        </Main>
    )
};

export default Routes;