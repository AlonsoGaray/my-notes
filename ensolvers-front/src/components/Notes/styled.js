import styled from 'styled-components';
import { FaStickyNote, FaUpload, FaArchive, FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  height: 80px;
  width: 500px;
`;

const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 90vw;
`;

const NoteContainer = styled.div`
  display: flex;
  margin: 0.8rem;
  padding: 0.6rem;
  width: 45%;
  border: 2px solid black;
  border-radius: 4px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  margin-right: 0.8rem;
`;

const pStyle = {
  margin: '0',
};

const buttonStyle = {
  cursor: 'pointer',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
};

const StickyNote = styled(FaStickyNote)`
  margin-right: 0.6rem;
  width:50px;
  height:50px;
`;

const IconsContainer = styled.div`
  display: flex;
  width: 18%;
  height: 28px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-top: auto;
`;

const Archive = styled(FaArchive)`
  cursor: pointer;
  width: 26px;
  height: 26px;
`;

const Unarchive = styled(FaUpload)`
  cursor: pointer;
  width: 26px;
  height: 26px;
`;

const Edit = styled(FaEdit)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-left: 10px;
`;

const Delete = styled(MdDeleteForever)`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export {
  Container,
  TopContainer,
  NavContainer,
  NotesContainer,
  NoteContainer,
  InfoContainer,
  buttonStyle,
  pStyle,
  StickyNote,
  IconsContainer,
  Archive,
  Unarchive,
  Edit,
  Delete,
};
