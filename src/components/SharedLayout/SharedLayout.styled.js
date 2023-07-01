import { NavLink } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { styled as styledMui } from '@mui/system';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Header = styledMui(AppBar)`
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: #d4a373;
  border-bottom: 2px solid #774936;
 `;

export const SiteNav = styled.nav`
  margin-left: 5px;
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
 display: inline-block;
  padding: 10px 20px;
  background-color: #CD9777;
  color: #fff1e6;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #C38E70;
  };
  &.active{
    background-color: #B07D62;
  }
`;
