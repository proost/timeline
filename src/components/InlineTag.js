import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  margin:0 0 50px 0;
  padding:10px;
  text-align:center;
  color:darken(#e5e5e5, 50%);
  border-bottom:solid 1px #e5e5e5;
`;

export function H2({ children }) {
  return (
    <StyledH2>{ children }</StyledH2>
  )
}

const StyledP = styled.p`
  margin: 0 0 3em 0;
  position: relative;
`

export function P({ children }) {
  return (
    <StyledP>{children}</StyledP>
  )
}

