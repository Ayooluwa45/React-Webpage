import styled from "styled-components";
import { Link as LinkR} from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
 background-color: ${({scrollNav}) => (scrollNav ? '#000' : '#000')};
  height: 80px;
  display: flex;
  //margin-top: -80px;
  justify-content: center;
  font-size: 1rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;


  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;

`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;


`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.8rem;  
    transform: translate(-100%, 60%);
    cursor: pointer;
    color: #fff;
    }

`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;


@media screen and (max-width: 768px){
    display: none;
}



`
export const NavItem = styled.li`
height: 80px;
`
export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
cursor: pointer;
padding: 0 1rem;
height: 100%;
align-items: center;
text-decoration: none;
cursor: pointer;

&.active {
    border-bottom: 3px solid #01bf71;
}
`
export const NavBtn = styled.div`

display:flex;
align-items: center;


@media screen and (max-width: 768px){
    display: none;
}


`
export const NavBtnLink = styled(LinkR)`
color: #fff;
text-decoration: none;
font-size: 16px;
cursor: pointer;
padding: 10px 22px;
transition:  all 0.2s ease-in-out;
white-space: nowrap;
border-radius: 20px;
background-color: green;
border: none;

/* &:hover{
    transition:  all 0.2s ease-in-out;
    background-color: #fff;
    color: #010606
} */
&:hover {
    transition: 0.2s ease-in-out;
    background-color: #fff;
    color: #010606;
  }
`

