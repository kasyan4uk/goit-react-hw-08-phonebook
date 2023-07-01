import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 32px;
`;

export const StyledLink = styled(Link)`
  color: #774936;
`;
