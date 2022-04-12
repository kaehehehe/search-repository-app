import styled from 'styled-components';

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;

  span {
    font-size: 1.8rem;
    color: #acbac7;
    margin-bottom: 8px;
  }

  input {
    width: 400px;
    height: 33px;
    outline: none;
    font-size: 14px;
    border: 1px solid #444c56;
    border-radius: 5px;
    padding-left: 7px;
    color: #acbac7;
    background-color: #2d333b;

    ::placeholder {
      color: #acbac7;
    }
  }
`;
