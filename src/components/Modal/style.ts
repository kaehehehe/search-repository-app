import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #22272d;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #acbac7;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 5px 10px;
  border: 1px solid #444c56;
  border-radius: 5px;
  color: #acbac7;
  background-color: #2d333b;
  cursor: pointer;

  &:hover {
    background-color: #22272d;
  }
`;
