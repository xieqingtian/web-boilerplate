import React from 'react';
import { hot } from 'react-hot-loader/root';
import { useSelector } from 'react-redux';

import './App.scss';
import Hello from '../features/Hello';
import { RootState } from '@/store/rootReducer';

function App() {
    const count = useSelector((state: RootState) => state.count.count);

    return (
        <div>
            <h1 className="h1">{count}</h1>
            <Hello name="哈哈" />
        </div>
    );
}

export default hot(App);