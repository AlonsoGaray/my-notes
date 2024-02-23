import {
  CREATE_NOTE,
  GET_ALL_NOTES,
  UPDATE_NOTE,
  DELETE_NOTE,
  GET_ALL_TAGS,
  CREATE_TAG,
  ADD_TAG_NOTE,
  DELETE_TAG_NOTE,
} from './constants';

import noteService from '../services/note';
import tagService from '../services/tag';

export const postNote = async (dispatch, note) => {
  try {
    const response = await noteService.createNote(note);
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: CREATE_NOTE, payload: data });
    }

    return response;
  } catch (err) {
    return new Error(err);
  }
};

export const getAllNotes = async (dispatch) => {
  try {
    const response = await noteService.getAllNotes();
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_ALL_NOTES, payload: data });
    }

    return data;
  } catch (err) {
    return new Error(err);
  }
};

export const updateNote = async (dispatch, note) => {
  try {
    const response = await noteService.updateNote(note);

    if (response.ok) {
      dispatch({ type: UPDATE_NOTE, payload: [] });
    }

    return response;
  } catch (err) {
    return new Error(err);
  }
};

export const deleteNote = async (dispatch, id) => {
  try {
    const response = await noteService.deleteNote(id);
    if (response.ok) {
      dispatch({ type: DELETE_NOTE, payload: [] });
    }

    return response;
  } catch (err) {
    return new Error(err);
  }
};

export const getAllTags = async (dispatch) => {
  try {
    const response = await tagService.getAllTags();
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: GET_ALL_TAGS, payload: data });
    }

    return data;
  } catch (err) {
    return new Error(err);
  }
};

export const postTag = async (dispatch, tag) => {
  try {
    const response = await tagService.createTag(tag);
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: CREATE_TAG, payload: data });
    }

    return data;
  } catch (err) {
    return new Error(err);
  }
};

export const addNoteTag = async (dispatch, values) => {
  try {
    const response = await tagService.addNote(values);
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: ADD_TAG_NOTE, payload: data });
    }

    return data;
  } catch (err) {
    return new Error(err);
  }
};

export const deleteNoteTag = async (dispatch, values) => {
  try {
    const response = await noteService.deleteNoteTag(values);
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: DELETE_TAG_NOTE, payload: data });
    }

    return data;
  } catch (err) {
    return new Error(err);
  }
};
