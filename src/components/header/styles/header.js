import styled from 'styled-components'
import {Link as ReachRouterLink} from 'react-router-dom'

export const Background = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const Container = styled.div``;

export const Link = styled.p``;

export const Logo = styled.img`
    height: 85px;
    width: 150px;
    padding-left: 20px;
    padding-right: 20px;

    
    @media screen and (max-width: 768px) {
        // height: 80px;
        // width: 130px;
    }
`;

export const ButtonLink = styled(ReachRouterLink)``;