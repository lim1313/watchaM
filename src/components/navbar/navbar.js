import React from 'react';
import styled from 'styled-components';
import NavLink from './navLink';
import SearchMovie from './searchMovie';

const NavBar = styled.div`
  background-color: ${({ theme }) => theme.colors.mainDark};
  height: 67px;

  > div {
    height: 100%;
    width: 80%;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    display: flex;
  }
`;

const Navbar = (props) => {
  return (
    <NavBar>
      <div>
        <NavLink />
        <SearchMovie />
      </div>
    </NavBar>
  );
};

export default Navbar;
