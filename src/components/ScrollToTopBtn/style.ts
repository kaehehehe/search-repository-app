import styled from 'styled-components';

type ArrowUpProps = {
  display: string;
};

export const ArrowUp = styled.div<ArrowUpProps>`
  display: ${({ display }) => display};
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #acbac7;
  position: fixed;
  bottom: 90px;
  right: 50px;
  cursor: pointer;

  .arrow-up-icon {
    width: auto;
    height: 30px;
    color: #22272d;
  }

  &:hover .arrow-up-icon {
    opacity: 0.7;
  }
`;
