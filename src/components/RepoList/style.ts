import styled from 'styled-components';

export const RepoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.li`
  font-size: 1.8rem;
  color: #acbac7;
  margin-top: 50px;
`;

export const ListItem = styled.li`
  width: 70%;
  font-size: 1.8rem;
  padding: 30px 0;
  transition: all 300ms linear;
  border-bottom: 1px solid #363e47;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.h4`
  font-size: 2.8rem;
  color: #539bf5;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  color: #acbac7;
  margin-bottom: 8px;
`;

export const IssuesCount = styled.div`
  font-size: 1.6rem;
  color: #acbac7;
  margin-bottom: 5px;
`;

export const UpdatedAt = styled(IssuesCount)`
  margin-bottom: 0;
  font-size: 1.4rem;
`;
