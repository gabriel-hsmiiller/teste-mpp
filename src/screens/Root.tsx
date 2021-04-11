import React, { Suspense, lazy } from 'react';
import { Route, Switch, MemoryRouter } from 'react-router';
import Headbar from '../components/Headbar/Headbar';

const Home = lazy(() => import('./Home/Home'))

const RootApp = () => (
    <div>
        <Headbar />
        <MemoryRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </Suspense>
        </MemoryRouter>
    </div>
); 


export default RootApp;