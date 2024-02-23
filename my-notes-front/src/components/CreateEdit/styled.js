import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { BsFillTagFill } from 'react-icons/bs';

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
  width: 800px;
  height: ${(props) => props.height || '720px'};
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
  height: 50px;
  margin: 1rem;
  margin-left: 60px;
  border-radius: 4px;
  border: 1px solid black;
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
  height: 180px;
  max-height: 180px;
  margin: 1rem;
  margin-left: 33px;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  :focus{
    outline: none;
  }
`;

const CategoriesWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Categories = styled.div`
  width: 79%;
  max-width: 80%;
  height: 120px;
  max-height: 180px;
  overflow-y: scroll;
  margin: 1rem;
  padding: 0.4rem;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const NewCategorieWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 90px;
  margin-right: 60px;
  margin-left: auto;
`;

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

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  margin-bottom: 5px;
`;

const TagIcon = styled(BsFillTagFill)`
  width:32px;
  height:32px;
  z-index:10;
  margin-right: 5px;
`;

const TagRemove = styled(MdClose)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-left: 5px;
  z-index: 10;
`;

export {
  Background,
  ModalWrapper,
  CloseModalButton,
  TitleWrapper,
  TitleInput,
  ContentWrapper,
  ContentInput,
  CategoriesWrapper,
  Categories,
  NewCategorieWrapper,
  Form,
  ButtonWrapper,
  buttonStyle,
  TagWrapper,
  TagIcon,
  TagRemove,
};
