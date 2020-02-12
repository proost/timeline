import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  margin:0 0 50px 0;
  padding:10px;
  text-align:center;
  font-size:30px;
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

const StyledLabel = styled.label`
  position: absolute;
  left: 8px;
  top: -11px;
  color: #999;
  font-size: 16px;
  display: inline-block;
  padding: 4px 10px;
  font-weight: 400;
  top: -11px;
  background-color: rgba(255,255,255,0.8);
  font-size: 14px;
`

export function Label({ children }) {
  return (
    <StyledLabel>{ children }</StyledLabel>
  )
}

