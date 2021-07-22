import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const logoStyle = {
  fontSize: "35px",
};

const signInBtnStyle = {
  backgroundColor: "#FA7878",
};

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" style={logoStyle}>
          Charter
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/contact" activeStyle>
            COntact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-up" style={signInBtnStyle}>
            Sign Up
          </NavBtnLink>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
