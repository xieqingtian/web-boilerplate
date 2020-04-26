import React from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { changeCount } from '@/store/countSlice';
import { RootState } from '@/store/rootReducer';
import styles from './index.module.scss';

export default function Hello() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.count.count);

    const increase = () => {
        dispatch(changeCount(1));
    };

    const reduce = () => {
        dispatch(changeCount(-1));
    };

    return (
        <React.Fragment>
            <h2 className={styles.h2}>{count}</h2>
            <Button type="primary" onClick={increase}>
                加1
            </Button>
            <Button type="primary" onClick={reduce}>
                减1
            </Button>
        </React.Fragment>
    );
}
