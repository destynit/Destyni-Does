import styled from 'styled-components'
import {Link as ReachRouterLink} from 'react-router-dom'


export const Container = styled.div``;

export const Title = styled.h1`
    position: absolute;
    font-size: 90px;
    color: #fff;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1100px) {
        color: #6e6a5c;
        font-size: 60px;
    }

    @media screen and (max-width: 700px) {
        color: #6e6a5c;
        font-size: 40px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 45px;
    font-weight: normal;
    line-height: normal;
    color: #fff;
    padding-bottom: 10px;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1100px) {
        color: #6e6a5c;
        font-size: 30px;
    }

    @media screen and (max-width: 700px) {
        color: #6e6a5c;
        font-size: 20px;
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
    font-size: 25px;
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

    @media screen and (max-width: 1100px) {
        font-size: 17px;
    }

    @media screen and (max-width: 700px) {
        font-size: 11px;
    }
`;