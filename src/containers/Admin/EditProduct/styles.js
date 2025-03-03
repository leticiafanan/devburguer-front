import style from 'styled-components';
import ReactSelect from 'react-select';
import {Button} from '../../../components';

export const Container = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Form = style.form`
    border-radius: 20px;
    background-color: ${(props) => props.theme.black};
    padding: 32px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const InputGroup = style.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${(props) => props.theme.white};
`;


export const Label = style.label`
  color: ${(props) => props.theme.white};
  font-size: 16px;
`;


export const Input = style.input`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding: 0 12px;
  border: none;
`;

export const LabelUpload = style.label`
  cursor: pointer;
  border: 1px dashed ${(props) => props.theme.whitey};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  color: ${(props) => props.theme.white};
  margin: 20px 0; 

  > svg {
  width: 24px;
  height: 24px;
  fill: ${(props) => props.theme.white};
  margin-right: 8px;
  }

  input {
    display: none;
  }
`;

export const Select = style(ReactSelect)`
  
`;

export const SubmitButton = style(Button)`
  margin-top: 40px;
`;

export const ErrorMessage = style.span`
  color: ${(props) => props.theme.darkRed};
  font-size: 14px;
  line-height: 80%;
  font-weight: 600;
`;
