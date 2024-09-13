'use client'
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the spinning animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled-component for the spinner wrapper
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Styled-component for the spinner itself
const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ color }) => color};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = ({ color }) => (
  <SpinnerWrapper>
    <Spinner color={color} />
  </SpinnerWrapper>
);

export default LoadingSpinner;
