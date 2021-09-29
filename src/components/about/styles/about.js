import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    background-color: #FFF9F9;
    font-family: 'futura', 'nunito-sans', sans-serif;
    justify-content: space-between;
    overflow: hidden;

    @media(max-width: 600px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 175px;

    @media (max-width: 600px) {
        padding: 0;
        margin: 0 auto;
        text-align: center;
    }
`;

export const Header = styled.h1`
    font-size: 35px;
    color: #364045;
    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

export const Body = styled.p`
    font-size: 20px;
    color: #364045;
    font-weight: normal;
    width: 500px;
   
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;


export const Image = styled.img`
    display: flex;
    border-radius: 10px;
    width: 350px;
    height: 520px;
    margin-right: 175px; 
    margin-bottom: 30px;

    @media (max-width: 600px) {
        margin: 0 auto;
    }
`;