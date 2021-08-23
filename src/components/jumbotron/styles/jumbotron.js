import styled from 'styled-components'
import {Link as ReachRouterLink} from 'react-router-dom'


export const Container = styled.div``;

export const Title = styled.h1`
    position: absolute;
    font-size: 50px;
    color: #fff;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media(max-width: 600px) {
        color: #6e6a5c;
        font-size: 36px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    color: #fff;
    padding-bottom: 10px;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 600px) {
        color: #6e6a5c;
        font-size: 18px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Button = styled(ReachRouterLink)`
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #a39d89;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 1s;

    &:hover {
        background-color: #6e6a5c;
        color: #fff;
    }
`;