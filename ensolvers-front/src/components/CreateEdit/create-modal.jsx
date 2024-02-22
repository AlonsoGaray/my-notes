/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postNote, getAllNotes } from '../../store/actions';
import {
  Background,
  ModalWrapper,
  CloseModalButton,
  TitleWrapper,
  TitleInput,
  ContentInput,
  ContentWrapper,
  Form,
  buttonStyle,
  ButtonWrapper,
} from './styled';

export const CreateModal = ({
  showCreateModal,
  setShowCreateModal,
  TitleValue,
  ContentValue,
  noteId,
}) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const note = {
    id: noteId,
    title: title || TitleValue,
    content: content || ContentValue,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postNote(dispatch, note);
    await getAllNotes(dispatch);
    setShowCreateModal(false);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowCreateModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showCreateModal) {
        setShowCreateModal(false);
      }
    },
    [setShowCreateModal, showCreateModal],
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
      {showCreateModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper height="450px">
            <h1>Create note</h1>

            <Form onSubmit={handleSubmit}>

              <TitleWrapper>
                <p>Title</p>
                <TitleInput onChange={(e) => setTitle(e.target.value)} type="text" defaultValue={TitleValue} />
              </TitleWrapper>

              <ContentWrapper>
                <p>Content</p>
                <ContentInput onChange={(e) => setContent(e.target.value)} type="text" defaultValue={ContentValue} />
              </ContentWrapper>

              <ButtonWrapper>
                <button style={buttonStyle} type="button" onClick={() => setShowCreateModal(false)}>Cancel</button>
                <button style={buttonStyle} type="submit">Save</button>
              </ButtonWrapper>

            </Form>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowCreateModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
