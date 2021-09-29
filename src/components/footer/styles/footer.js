import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FDDDD8;
    display: flex;
    max-width: 100%%;
    flex-direction: column;
    padding: 50px 56px;
    font-family: 'futura', sans-serif;
    justify-content: center;
    margin: 0;

    @media (max-width: 1080px) {
        padding: 70px 30px;
        max-width: 100%;
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
    color: #364045;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 12px;
`; 

export const Title = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
    color: #364045;
    justify-content: center;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #364045;
    margin-bottom: 20px;

`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;