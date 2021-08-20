import styled from "styled-components"
import { NavLink as Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"

export const Container = styled.div``;


export const Nav = styled.nav`
    background-color: #fff;
    height: 85px;
    display: flex;
    text-align: center;
    overflow: hidden;
    padding-right: 20px;
    margin-top: 0;
`;

export const NavLink = styled(Link)`
    color: #827A5F;
    display: flex;
    font-family: 'Khula', sans-serif;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    transition: all 1s ease-in-out;

    &:hover {
        background-color: #827A5F;
        color: #fff;
    }

    &.active {
      background-color: #827A5F;
      color: #fff;
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

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: -24px;
  
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