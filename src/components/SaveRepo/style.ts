import styled from 'styled-components';

export const SaveRepo = styled.div`
  max-width: 1100px;
  border-radius: 3px;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 10px;
`;

export const Message = styled.li`
  color: #acbac7;
  font-size: 1.6rem;
`;

export const ListItem = styled.li`
  padding: 10px 20px;
  border: 1px solid #acbac7;
  border-radius: 10px;
  color: #539bf5;
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RepoName = styled.h4`
  font-size: 1.8rem;
  margin-right: 20px;
  cursor: pointer;
`;

export const IcDelete = styled.div`
  .delete-icon {
    width: auto;
    height: 20px;
    fill: #acbac7;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.7;
  }
`;
