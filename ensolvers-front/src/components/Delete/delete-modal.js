/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
import React, { useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllNotes, deleteNote } from '../../store/actions';
import {
  Background,
  ModalWrapper,
  CloseModalButton,
  PStyle,
  buttonStyle,
  ButtonWrapper,
} from './styled';

export const DeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  noteId,
}) => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const handleDelete = async () => {
    await deleteNote(dispatch, noteId);
    await getAllNotes(dispatch);
    setShowDeleteModal(false);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowDeleteModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showDeleteModal) {
        setShowDeleteModal(false);
      }
    },
    [setShowDeleteModal, showDeleteModal],
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress],
  );

  return (
    <>
      {showDeleteModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <p style={PStyle}>Are you sure you want to delete this note?</p>
            <ButtonWrapper>
              <button style={buttonStyle} type="button" onClick={() => setShowDeleteModal(false)}>No</button>
              <button style={buttonStyle} type="submit" onClick={() => handleDelete()}>Yes</button>
            </ButtonWrapper>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowDeleteModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
