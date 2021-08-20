import styled from 'styled-components'

export const Container = styled.div`
    background-color: #a39d89;
    display: flex;
    max-width: 100%;
    flex-direction: column;
    padding: 50px 56px;
    font-family: 'Helvetica', sans-serif;
    justify-content: center;

    @media (max-width: 1080px) {
        padding: 70px 30px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`; 

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;
export const Link = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 12px;
`; 

export const Title = styled.p`
    font-size: 22px;
    margin-bottom: 20px;
    color: #fff;
    font-family: "Brush Script MT", Cursive;
    justify-content: center;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #6e6a5c;
    margin-bottom: 20px;

`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;