import React from 'react';

import * as S from './style';

type ModalProps = {
  text: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ text, setShowModal }: ModalProps) => {
  return (
    <S.Background
      onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
    >
      <S.Modal>
        <S.Text>{text}</S.Text>
        <S.Button type="button" onClick={() => setShowModal(false)}>
          확인
        </S.Button>
      </S.Modal>
    </S.Background>
  );
};

export default Modal;
