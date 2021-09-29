import styled from "styled-components"
import { NavLink as Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"

export const Container = styled.div`
  font-family: 'Futura', sans-serif;
  display: flex;
`;

export const Nav = styled.nav`
    display: flex;
    background-color: #FFF9F9;
    width: 100%;
    overflow: hidden;
    justify-content: space-between;

`;

export const Logo = styled.img`
  width: 250px;
  height: 100px;
  padding: 20px 60px;
`;

export const LogoLink = styled(Link)``;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  padding-right: 60px;

  @media screen and (max-width: 768px) { 
    display: ${({open}) => open ? "block" : "none"};
    margin: 0px;
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0; 
    left: 0;
    background-color: #827A5F;    
    overflow-x: hidden; 
    padding: 20px;
    transition: 0.5s; 
    `;

export const NavLink = styled(Link)`
    color: #364045;
    display: flex;
    font-family: 'Khula', sans-serif;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    transition: all 1s ease-in-out;

    &:hover {
        color: #F88677;
    }

    &.active {
      color: #F88677;
    }

    @media screen and (max-width: 768px) { 
      color: #fff
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #827A5F;
    
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;  
      // transition: all 0.3s ease-in-out; 

    }

    &:hover {
      animation-name: bars;
      animation-duration: 2s; 
    }
    @keyframes bars {
      from {color: #827A5F;}
      to {color: rgba(163, 157, 137, 0.9)}
    }
  `;

export const Times = styled(FaTimes)`
  display: none; 
  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 40px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;

    &:hover {
      animation-name: times;
      animation-duration: 2s; 
    }
    @keyframes times {
      from {color: #fff; }
      to {color: rgba(163, 157, 137, 0.9);}
  }
}

`;
