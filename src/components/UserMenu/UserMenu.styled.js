import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Email = styled.p`
  padding: 5px 0;
  color: #fff1e6;
  font-size: 14px;
  text-decoration: none;
`;

export const Button = styled.button`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 125px;
  font-weight: 600;
  font-size: 14px;
  outline: none;
  color: #fff1e6;
  background-color: #ff4d6d;
  border: 1px solid #ff4d6d;
  border-radius: 4px;
  &:hover {
    background-color: #ff758f;
    border: 1px solid #ff758f;
    cursor: pointer;
  }
`;
