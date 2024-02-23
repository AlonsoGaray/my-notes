const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getAllTags = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${URL_BASE}/api/tags`, payload);
};

const createTag = ({
  name,
}) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  };

  return fetch(`${URL_BASE}/api/tags`, payload);
};

const addNote = ({
  tagId,
  noteId,
}) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tagId,
      noteId,
    }),
  };

  return fetch(`${URL_BASE}/api/tags/tag/add`, payload);
};

const note = {
  getAllTags,
  createTag,
  addNote,
};

export default note;
