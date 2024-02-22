const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const createNote = ({
  title,
  content,
}) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
    }),
  };

  return fetch(`${URL_BASE}/api/notes`, payload);
};

const updateNote = (note) => {
  const { id } = note;
  const payload = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  };

  return fetch(`${URL_BASE}/api/notes/${id}`, payload);
};

const deleteNote = (id) => {
  const payload = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${URL_BASE}/api/notes/${id}`, payload);
};

const getAllNotes = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${URL_BASE}/api/notes`, payload);
};

const deleteNoteTag = ({
  tagId,
  noteId,
}) => {
  const payload = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tagId,
      noteId,
    }),
  };

  return fetch(`${URL_BASE}/api/notes/tags/remove`, payload);
};

const note = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  deleteNoteTag,
};

export default note;
