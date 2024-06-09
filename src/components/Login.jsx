import React, { useState } from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
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

const Login = () => {
    const [input, setInput] = useState({
        
        email:"",
        password:"",
      });
      const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    const loggedUser = JSON.parse(localStorage.getItem("user",));
    if(input.email ===loggedUser.email && input.password === loggedUser.password){
            navigate("/WeatherSearch");
            
    }else{
        alert("wrong email or password");
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h1>Login</h1>
        <Input
          type="email"
          name='email'
          placeholder="Email"
          value={input.email}
          onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}
          required
        />
        <Input
          type="password"
          name='password'
          placeholder="Password"
          value={input.password}
          onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}
          required
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
