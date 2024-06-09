import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:pink;
  padding: 20px;
`;

const WelcomeMessage = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
    const navigate = useNavigate();
  return (
    <HomeContainer>
      <WelcomeMessage>Welcome to Our Application</WelcomeMessage>
      <Description>
        This is the home page of our application. Navigate through the application using the buttons below to explore various features.
      </Description>
      <NavMenu>
        <NavButton onClick={()=>{navigate("/login")}}>Login</NavButton>
        <NavButton onClick={()=>{navigate("/register")}}>Register</NavButton>
        <NavButton onClick={()=>{navigate("/weatherSearch")}}>Weather Search</NavButton>
      </NavMenu>
    </HomeContainer>
  );
};

export default Home;
