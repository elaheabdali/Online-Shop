import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Body = styled.body`
  font-family: 'Share Tech Mono', monospace;
  margin: 10% 0 0 10%;
`;

const Div = styled.div`
  display: inline-block;
  background-color: #3b82f6;
  font-size: 85%;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  transition: 0.3s;
`;

const H1 = styled.h1`
  margin-bottom: 15px;
  font-size: 40px;
  font-weight: bold;
`;
const P = styled.p`
  margin-bottom: 15px;
  font-size: 25px;
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Body>
      <H1>Error 404</H1>
      <P>Oop, Your page not found!</P>
      <Div onClick={() => navigate('/')}>Go Back!</Div>
    </Body>
  );
};

export default NotFound;
