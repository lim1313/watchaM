import React from 'react';
import styled from 'styled-components';

const SclUp = styled.button`
  position: fixed;
  width: 5%;
  height: 30px;
  bottom: 5%;
  right: 2.5%;
  border: none;
  border-radius: 50%;
  transition: background-color 0.2s;
  font-weight: bolder;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainPink};
    cursor: pointer;
  }
`;

const Scrolltop = (props) => {
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <SclUp onClick={goTop}>top</SclUp>;
};
export default Scrolltop;
