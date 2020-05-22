import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import logo from './logo.jpg';

type Props = {};

export const Header: FC<Props> = () => {
    return (
        <Container>
            <Logo src={logo} />
            <Title>Web Boilerplate</Title>
            <SubTitle>web project template based on qingtian-cli</SubTitle>
            <Button
                onClick={() => {
                    window.open('https://github.com/xieqingtian/qingtian-cli', '_blank');
                }}
            >
                Get Started
            </Button>
        </Container>
    );
};

const Container = styled.header`
    padding: 64px;
    color: #fff;
    text-align: center;
    background-color: #000;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 48px;
`;

const SubTitle = styled.p`
    font-size: 24px;
`;
