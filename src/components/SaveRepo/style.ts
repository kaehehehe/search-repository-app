import styled from 'styled-components';

export const SaveRepo = styled.div`
  max-width: 1100px;
  height: 100px;
  border-radius: 3px;

  h3 {
    font-size: 1.8rem;
    font-weight: normal;
    text-align: center;
    color: #acbac7;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  padding: 10px 20px;
  border: 1px solid #acbac7;
  border-radius: 10px;
  color: #539bf5;
  margin: 0 10px 10px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RepoName = styled.h4`
  font-size: 1.8rem;
  margin-right: 20px;
`;

export const DeleteIcon = styled.svg`
  width: 15px;
  fill: #acbac7;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    transform: scale(0.95);
  }
`;
