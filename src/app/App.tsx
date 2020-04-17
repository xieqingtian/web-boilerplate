import React from 'react';
import { hot } from 'react-hot-loader/root';
import BasicLayout from '@ant-design/pro-layout';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import ROUTES from '../router';
import './App.scss';

function App() {
    return (
        <Router>
            <BasicLayout
                menuItemRender={(menuItemProps, defaultDom) => {
                    if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
                        return defaultDom;
                    }
                    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
                }}
                route={ROUTES}
            >
                {renderRoutes(ROUTES)}
            </BasicLayout>
        </Router>
    );
}

export default hot(App);
