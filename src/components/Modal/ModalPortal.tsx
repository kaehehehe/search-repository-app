import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: any) => {
  const modal = document.getElementById('modal');
  return ReactDOM.createPortal(children, modal!);
};

export default ModalPortal;
