import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.8);
  position:fixed;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:500px;
  height:150px;
  box-shadow:05px 16px rgba(0,0,0,0.2);
  background:#fff;
  color:#000;
  position:relative;
  z-index:10;
  border-radius:10px;
`;

const CloseModalButton = styled(MdClose)`
  cursor:pointer;
  position:absolute;
  top:20px;
  right:20px;
  width:32px;
  height:32px;
  padding:0;
  z-index:10;
`;

const Form = styled.form`
  width:90%;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const TitleInput = styled.input`
  width: 80%;
  height: 25px;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  :focus{
    outline: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ContentInput = styled.textarea`
  width: 80%;
  max-width: 80%;
  height: 200px;
  max-height: 200px;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  :focus{
    outline: none;
  }
`;

const PStyle = {
  paddingRight: '33px',
};

const ButtonWrapper = styled.div`
  display: flex;
  float: right;
  margin-right: 45px;
`;
const buttonStyle = {
  cursor: 'pointer',
  marginLeft: '1rem',
  height: '30px',
  width: '60px',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
};
export {
  Background,
  ModalWrapper,
  CloseModalButton,
  TitleWrapper,
  TitleInput,
  ContentWrapper,
  ContentInput,
  Form,
  PStyle,
  ButtonWrapper,
  buttonStyle,
};
