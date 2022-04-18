import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;

  input {
    width: 450px;
    height: 50px;
    outline: none;
    font-size: 16px;
    border: 1px solid #444c56;
    border-radius: 30px;
    padding-left: 15px;
    color: #acbac7;
    background-color: #2d333b;

    ::placeholder {
      color: #acbac7;
    }
  }
`;
