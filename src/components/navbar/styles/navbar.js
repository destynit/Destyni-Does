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
    font-size: 16px;

    :hover {
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
      -webkit-transition: all 2s ease-in-out;
      -moz-transition: all 2s ease-in-out;
      -ms-transition: all 2s ease-in-out;
      -o-transition: all 2s ease-in-out;
      transition: all 2s ease-in-out;  
 
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
  cursor: pointer;   
    -webkit-transition: all 2s ease-in-out;
    -moz-transition: all 2s ease-in-out;
    -ms-transition: all 2s ease-in-out;
    -o-transition: all 2s ease-in-out;
    transition: all 2s ease-in-out;

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
    -webkit-transition: all 2s ease-in-out;
    -moz-transition: all 2s ease-in-out;
    -ms-transition: all 2s ease-in-out;
    -o-transition: all 2s ease-in-out;
    transition: all 2s ease-in-out;
    `;