/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getAllNotes, updateNote, getAllTags } from '../../store/actions';
import { DeleteModal } from '../Delete/delete-modal';
import { EditModal } from '../CreateEdit/edit-modal';
import {
  Container,
  TopContainer,
  NavContainer,
  NotesContainer,
  NoteContainer,
  InfoContainer,
  pStyle,
  StickyNote,
  IconsContainer,
  Unarchive,
  Edit,
  Delete,
} from './styled';

const Archived = () => {
  const notes = useSelector((state) => state.note);
  const tags = useSelector((state) => state.tag);
  const dispatch = useDispatch();

  const [showCreateEditModal, setShowCreateEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [titleData, setTitleData] = useState('');
  const [contentData, setContentData] = useState('');
  const [noteId, setNoteId] = useState(0);
  const [tagsData, setTagsData] = useState([]);
  const [tagNames, setTagNames] = useState('');
  const [tagFilter, setTagFilter] = useState(null);

  const openEditModal = (noteIdValue, title, content, tagsArray) => {
    setTitleData(title);
    setContentData(content);
    setNoteId(noteIdValue);
    setTagsData(tagsArray);
    setShowCreateEditModal((prev) => !prev);
  };

  const openDeleteModal = (noteIdValue) => {
    setNoteId(noteIdValue);
    setShowDeleteModal((prev) => !prev);
  };

  const handleArchive = async (noteIdValue) => {
    const form = {
      id: noteIdValue,
      archived: false,
    };
    await updateNote(dispatch, form);
    await getAllNotes(dispatch);
  };

  useEffect(() => {
    const getNotes = async () => {
      await getAllNotes(dispatch);
    };
    getNotes();
    const getTags = async () => {
      await getAllTags(dispatch);
    };
    getTags();
  }, [dispatch]);

  useEffect(() => {
    const tagMap = tags.map((tagValue) => tagValue.name);
    setTagNames(tagMap);
  }, [tags]);

  return (
    <Container>
      <TopContainer>
        <NavContainer>
          <h1>Archived Notes</h1>
          <Link to="/">&lt; Go back to unarchived notes</Link>
        </NavContainer>
        <Autocomplete
          id="Tag-Auto"
          options={tagNames}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Tag" />}
          onChange={(event, newValue) => {
            setTagFilter(newValue);
          }}
        />
      </TopContainer>
      <NotesContainer>
        {
        notes?.filter((note) => {
          if (tagFilter !== null) {
            return note.archived === true && note.tags.some((tag) => tag.name === tagFilter);
          }
          return (note.archived === true);
        })
          .map((note) => {
            const date = new Date(note.updatedAt);
            const day = date.toLocaleString('en-us', { day: '2-digit' });
            const month = date.toLocaleString('en-us', { month: 'short' });
            const year = date.toLocaleString('en-us', { year: 'numeric' });
            return (
              <NoteContainer key={note.id}>
                <StickyNote />
                <InfoContainer>
                  <p style={pStyle}>{note.title}</p>
                  <p style={pStyle}>
                    Last edited:
                    {' '}
                    {`${day}/${month}/${year}`}
                  </p>
                </InfoContainer>
                <IconsContainer>
                  <Unarchive onClick={() => handleArchive(
                    note.id,
                  )}
                  />
                  <Edit onClick={() => openEditModal(
                    note.id,
                    note.title,
                    note.content,
                    note.tags,
                  )}
                  />
                  <Delete onClick={() => openDeleteModal(note.id)} />
                </IconsContainer>
              </NoteContainer>
            );
          })
      }
      </NotesContainer>
      <EditModal
        showCreateEditModal={showCreateEditModal}
        setShowCreateEditModal={setShowCreateEditModal}
        setTagsData={setTagsData}
        tagsData={tagsData}
        TitleValue={titleData}
        ContentValue={contentData}
        tagsValue={tagsData}
        noteId={noteId}
        tagNames={tagNames}
        tags={tags}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        noteId={noteId}
      />
    </Container>
  );
};

export default Archived;
