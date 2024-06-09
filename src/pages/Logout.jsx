import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px; /* Add some spacing between the image and message */
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 80vh; /* Limit the image height to 80% of the viewport height */
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #007bff;
  margin-right: 10px;
`;

const Message = styled.h1`
  color: #343a40;
`;

const Logout = () => {
  return (
    <LogoutContainer>
      <ImageContainer>
        <Image src="https://th.bing.com/th?id=OIP.YAXlTjvtEKchdMVc5laZhwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
      </ImageContainer>
      <Icon>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Icon>
      <Message>Thanks for visiting!</Message>
    </LogoutContainer>
  );
}

export default Logout;
