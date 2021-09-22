import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ theme }) => theme.wrapper.width};
  margin: ${({ theme }) => theme.wrapper.margin};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .empty {
    margin: 1rem;
  }
`;

const Emptypage = (props) => {
  return (
    <Wrapper>
      <div className='empty'>This is Empty Page</div>
      <Link to='/' className='empty'>
        Go Back
      </Link>
    </Wrapper>
  );
};
export default Emptypage;
