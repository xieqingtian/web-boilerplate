import { RouteConfig } from 'react-router-config';

import Hello from '../features/Hello';

const ROUTES: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: Hello,
    },
];

export default ROUTES;
