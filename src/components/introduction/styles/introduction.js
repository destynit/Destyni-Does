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

export const Name = styled.span`
    font-size: 35px;
    color: #F88677;
    @media (max-width: 600px) {
        font-size: 30px;
    }
`;

export const Subheader = styled.h2`
    font-size: 20px;
    color: #364045;
    font-weight: normal;
    width: 500px;
   
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    width: 350px;
    height: 350px;
    padding-right: 175px;
    padding-bottom: 50px;

    @media (max-width: 600px) {
        padding: 0 0 50px;
        margin: 0 auto;
    }
`;