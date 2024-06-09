import  { useState } from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom"

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const RegisterForm = styled.form`
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

const Register = () => {
    const navigate=useNavigate();
  const [input, setInput] = useState({
    name:"",
    email:"",
    password:"",
  });
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//storing it in local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/login")
  };

 

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <h2>Register</h2>
        <Input
          type="text"
          name='name'
          placeholder="Name"
          value={input.name}
          onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}
          required
        />
        <Input
          type="email"
          name ="email"
          placeholder="Email"
          value={input.email}
          onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}
          required
        />
        <Input
        name='password'
          type="password"
          placeholder="Password"
          value={input.password}
          onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}
          required
        />
        <Button type="submit">Register</Button>
      </RegisterForm>
      <p>Have already an account ?
        <a href="/login">
        <u>Login here</u>
        </a>
      </p>
    </RegisterContainer>
  );
};

export default Register;
