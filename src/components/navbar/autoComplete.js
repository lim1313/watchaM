// import React from 'react';
// import { useSelector } from 'react-redux';
// import styled, { css } from 'styled-components';
// import { v4 as uuidv4 } from 'uuid';

// const Auto = styled.ul`
//   position: absolute;
//   top: 42px;
//   z-index: 999;
//   width: 100%;
//   margin: 0;
//   padding: 0.4rem 0;
//   border-radius: 2px;
//   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
//   background-color: white;
// `;

// const MovieTitle = styled.li`
//   list-style: none;
//   padding: 0.5rem;

//   ${({ topWord }) =>
//     topWord &&
//     css`
//       color: ${({ theme }) => theme.colors.mainPink};
//       font-size: 0.9rem;
//     `}

//   &:not(:first-of-type):hover {
//     background-color: rgba(100, 100, 100, 0.1);
//     cursor: pointer;
//   }
// `;

// const AutoComplete = ({ inputValue, submitMovie, keydownTarget }) => {
//   let value = inputValue;

//   const state = useSelector((state) => state.allMovie);
//   const movieName = state.map((v) => v.original_title);

//   return (
//     <Auto>
//       <MovieTitle topWord={true}>연관검색어</MovieTitle>
//       {movieName.map((title, i) => {
//         if (title.toLowerCase().includes(value.toLowerCase())) {
//           return (
//             <MovieTitle
//               key={uuidv4()}
//               onClick={() => submitMovie(title)}
//               focus={keydownTarget === i ? true : false}
//             >
//               {title}
//             </MovieTitle>
//           );
//         }
//       })}
//     </Auto>
//   );
// };
// export default AutoComplete;
