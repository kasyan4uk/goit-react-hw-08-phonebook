import { styled as styledMui } from '@mui/system';
import styled from 'styled-components';
import { Button as ButtonMUI, TextField } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 500px;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Input = styledMui(TextField)`

`;

export const Button = styledMui(ButtonMUI)`
  background-color: #D69F7E;
  color: #fff1e6;
  padding: 0;
  margin-top: 15px;
  height: 38px;
  width: 125px;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  border: 1px solid grey;
  border-radius: 4px;
  &:hover {
    background-color: #C38E70;
  }
`;
