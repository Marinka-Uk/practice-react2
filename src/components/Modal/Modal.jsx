import { Component } from 'react';
import s from './Modal.module.css';
import { useEffect, useState } from 'react';

export const Modal = ({ closeModal, Show, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscapeClose);

   
  }, []);

 useEffect(() => {
    return () => {
        window.removeEventListener('keydown', onEscapeClose);
      };

 })
  const onEscapeClose = e => {
    console.log(e.key);
    if (e.key === 'Control') {
      closeModal();
    }
  };

  const onClose = e => {
    if (e.target === e.targetTurget) {
      Show();

      if (e.target.className === 'backdrop') {
        Show();
      }
    }
  };

  return (
    <>
      <div onClick={onClose} className={s.backdrop}>
        <div className={s.Modal}>{children}</div>
      </div>
    </>
  );
};
