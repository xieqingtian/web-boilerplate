import React from 'react';
import { hot } from 'react-hot-loader/root';
import BasicLayout from '@ant-design/pro-layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import ROUTE from '../router';
import './App.scss';

function App() {
    return (
        <Router>
            <BasicLayout route={ROUTE}>666{renderRoutes(ROUTE.routes)}</BasicLayout>
        </Router>
    );
}

export default hot(App);
