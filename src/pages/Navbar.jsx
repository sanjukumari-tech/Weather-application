import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  background-color: #007bff;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #e0e0e0;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/weatherSearch">weatherSearch</StyledLink>
      <StyledLink to="/logout">logout</StyledLink>
    </NavbarContainer>
  );
}

export default Navbar;
