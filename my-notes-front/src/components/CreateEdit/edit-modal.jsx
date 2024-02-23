/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useCallback, useEffect, useId } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { updateNote, getAllNotes, postTag, addNoteTag, deleteNoteTag, getAllTags } from '../../store/actions';
import {
  Background,
  ModalWrapper,
  CloseModalButton,
  TitleWrapper,
  TitleInput,
  ContentInput,
  ContentWrapper,
  CategoriesWrapper,
  Categories,
  NewCategorieWrapper,
  Form,
  buttonStyle,
  ButtonWrapper,
  TagWrapper,
  TagIcon,
  TagRemove,
} from './styled';

const filter = createFilterOptions();

export const EditModal = ({
  showEditModal,
  setShowEditModal,
  TitleValue,
  ContentValue,
  tagsValue,
  noteId,
  tagNames,
  tags,
  setTagsData,
  tagsData,
}) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');

  const KeyId = useId();

  const note = {
    id: noteId,
    title: title || TitleValue,
    content: content || ContentValue,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateNote(dispatch, note);
    await getAllNotes(dispatch);
    await getAllTags(dispatch);
    setShowEditModal(false);
  };

  const tagsNote = tagsValue.map((tagVal) => tagVal.name);
  const filterId = tags?.filter((tagVal) => tagVal.name === tag);

  const tagObject = {
    tagId: filterId[0]?.id,
    noteId,
  };

  const handleAddTag = async (e) => {
    e.preventDefault();

    if (tagNames.includes(tag) && !tagsNote.includes(tag)) {
      const addedData = await addNoteTag(dispatch, tagObject);
      setTagsData([...tagsData, addedData]);
      await getAllNotes(dispatch);
    } else if (tagNames.includes(tag) && tagsNote.includes(tag)) {
      alert('Tag is already added');
    } else {
      const postedData = await postTag(dispatch, { name: tag });
      await addNoteTag(dispatch, { tagId: postedData.id, noteId });
      setTagsData([...tagsData, postedData]);
      await getAllNotes(dispatch);
    }
  };

  const handleDeleteTag = async (e, tagId) => {
    e.preventDefault();
    const idsObject = {
      tagId,
      noteId,
    };
    const removeFilter = tagsData.filter((tagData) => tagData.id !== tagId);
    setTagsData(removeFilter);
    await deleteNoteTag(dispatch, idsObject);
    await getAllNotes(dispatch);
  };

  const closeModal = async (e) => {
    if (modalRef.current === e.target) {
      setShowEditModal(false);
      await getAllTags(dispatch);
      setTag('');
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showEditModal) {
        setShowEditModal(false);
      }
    },
    [setShowEditModal, showEditModal],
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
      {showEditModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <h1>Edit note</h1>

            <Form onSubmit={handleSubmit}>

              <TitleWrapper>
                <p>Title</p>
                <TitleInput onChange={(e) => setTitle(e.target.value)} type="text" defaultValue={TitleValue} />
              </TitleWrapper>

              <ContentWrapper>
                <p>Content</p>
                <ContentInput onChange={(e) => setContent(e.target.value)} type="text" defaultValue={ContentValue} />
              </ContentWrapper>

              <CategoriesWrapper>
                <p>Categories</p>
                <Categories>
                  {tagsValue?.map((tagMap) => {
                    const { id: tagIdValue, name } = tagMap;
                    return (
                      <TagWrapper key={tagIdValue}>
                        <TagIcon />
                        <p>{name}</p>
                        <TagRemove onClick={(e) => handleDeleteTag(e, tagIdValue)} />
                      </TagWrapper>
                    );
                  })}
                </Categories>
              </CategoriesWrapper>

              <NewCategorieWrapper>
                <Autocomplete
                  value={tag}
                  onChange={(event, newValue) => {
                    setTag(newValue);
                  }}
                  onInputChange={(event, newValue) => {
                    setTag(newValue);
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    const { inputValue } = params;
                    const isExisting = options.some((option) => params === option);
                    if (inputValue !== '' && !isExisting) {
                      filtered.push(inputValue);
                    }
                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  options={tagNames}
                  getOptionLabel={(option) => {
                    if (typeof option === 'string') {
                      return option;
                    }
                    if (option) {
                      return option;
                    }
                    return option;
                  }}
                  sx={{ width: 450, border: 1, borderRadius: 2 }}
                  freeSolo
                  renderInput={(params) => <TextField key={KeyId} {...params} label="Tags" />}
                />
                <button style={buttonStyle} type="submit" onClick={handleAddTag}>Add</button>
              </NewCategorieWrapper>

              <ButtonWrapper>
                <button style={buttonStyle} type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button style={buttonStyle} type="submit">Save</button>
              </ButtonWrapper>

            </Form>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowEditModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
