import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 240px;
  padding-left: 5px;
  height: 24px;
  font-size: 14px;
  outline: none;
  border: 2px solid #CD9777;
  border-radius: 3px;
  background-color: transparent;
`;

export const Span = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 0;
  color: #fff1e6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 4px;
  height: 28px;
  width: 125px;
  font-weight: 700;
  font-size: 14px;
  outline: none;
  background-color: #CD9777;
  border: 1px solid #CD9777;
  border-radius: 4px;
  &:hover {
    background-color: #C38E70;
    border: 1px solid #C38E70;
    cursor: pointer;
  }
`;
