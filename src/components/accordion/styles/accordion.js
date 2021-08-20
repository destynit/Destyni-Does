import styled from 'styled-components'
import {FaAngleDown, FaAngleUp} from "react-icons/fa"

export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222;
    font-family: 'Helvetica', sans-serif;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`; 

export const Item = styled.div`
    margin-bottom: 10px;

    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Title = styled.h1`
    font-size: 30px; 
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 25px;
    }
`;

export const Header = styled.div`
    display: flex;
    max-width: 1500px;
    justify-content: space-between;
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 1px;
    font-weight: normal;
    background: #a39d89;
    color: #fff;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;
    width: 500px;

    &:hover {
        background-color: rgba(163, 157, 137, 0.9)
    }
    @media (max-width: 600px) {
        font-size: 15px;
        width: 375px;
    }
`;

export const Body = styled.body`
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 18px;
    font-weight: normal;
    line-height: normal;
    margin: 0;
    background: #a39d89;
    color: #fff;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;
    width: 500px;

    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 22px;
        width: 375px;
    }
`;

export const AngleDown = styled(FaAngleDown)`
    color: black;
    padding-left: 10px;
    color: #fff;
    transition: 0.3s;

`;


export const AngleUp = styled(FaAngleUp)`
    color: black;
    transition: 0.3s;
    color: #fff;

`;