import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';

import PeopleLib from '../features/PeopleLib';
import DocLib from '../features/DocLib';

const ROUTE: RouteConfig = {
    routes: [
        {
            path: '/people-lib',
            name: '人员库',
            exact: true,
            render: () => <Redirect to="/people-lib/list" />,
            routes: [
                {
                    path: '/people-lib/list',
                    exact: true,
                    component: PeopleLib,
                },
                {
                    path: '/people-lib/detail',
                    exact: true,
                    component: PeopleLib,
                },
            ],
        },
        {
            path: '/doc-lib',
            name: '文档库',
            exact: true,
            render: () => <Redirect to="/doc-lib/list" />,
            routes: [
                {
                    path: '/doc-lib/list',
                    exact: true,
                    component: DocLib,
                },
                {
                    path: '/doc-lib/detail',
                    exact: true,
                    component: DocLib,
                },
            ],
        },
    ],
};
export default ROUTE;
