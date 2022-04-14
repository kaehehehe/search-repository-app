import styled, { keyframes } from 'styled-components';

export const Loading = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 30px;
    color: #acbac7;
  }
`;

const moveUp = keyframes`
  from {
  transform: translateY(0px);
  }
  to {
  transform: translateY(-10px);
  }
`;

export const Octocat = styled.img`
  height: 150px;
  width: auto;
  animation: ${moveUp} 1s linear infinite;
`;
