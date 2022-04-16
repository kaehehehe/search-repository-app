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

  &:hover svg {
    opacity: 0.7;
  }

  svg {
    fill: #22272d;
    width: 25px;
  }
`;
