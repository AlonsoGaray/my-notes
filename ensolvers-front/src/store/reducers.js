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

const initialState = {
  note: [],
  tag: [],
};

function reducer(state = initialState, action = '') {
  const newValue = action.payload;
  switch (action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        note: [newValue],
      };
    case GET_ALL_NOTES:
      return {
        ...state,
        note: newValue,
      };
    case UPDATE_NOTE:
      return state.map((note) => {
        if (note.id === newValue.id) {
          return {
            ...note,
            ...newValue,
          };
        }
        return note;
      });
    case DELETE_NOTE:
      return state.filter(({ id }) => id !== newValue.id);
    case DELETE_TAG_NOTE:
      return {
        ...state,
        note: [newValue],
      };

    case GET_ALL_TAGS:
      return {
        ...state,
        tag: newValue,
      };
    case CREATE_TAG:
      return {
        ...state,
        ...newValue,
      };
    case ADD_TAG_NOTE:
      return {
        ...state,
        ...newValue,
      };

    default:
      return state;
  }
}
export default reducer;
