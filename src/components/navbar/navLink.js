import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
  font-size: ${({ logo }) => (logo ? '1.5rem' : '1.1rem')};
  margin-right: ${({ logo }) => (logo ? '1.5rem' : '0.5rem')};
  text-decoration: none;
  color: ${({ logo, theme }) => (logo ? theme.colors.mainPink : 'white')};
  transition: text-shadow 0.2s;

  &:hover {
    text-shadow: 0px 0px 5px white;
  }
`;

const NavLink = (props) => {
  return (
    <div>
      <LinkStyle to='/' logo='ture'>
        WatchaM
      </LinkStyle>
      <LinkStyle to='/movieList'>전체 리스트</LinkStyle>
      <LinkStyle to='/movieLike'>찜한 영화</LinkStyle>
    </div>
  );
};

export default NavLink;
