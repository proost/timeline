import React from 'react';
import styled from 'styled-components';
import { P, Label } from './InlineTag';
import { SignupInput, SubmitInput } from './Inputs';

export const StyledForm = styled.form`
  font-size: 10px;
  background: #fff;
  padding: 4em 4em 2em;
  max-width: 400px;
  margin: 50px auto 0;
  box-shadow: 0 0 1em #222;
  border-radius: 2px;
`;

export function Form({ children }) {
  return (
    <StyledForm>{children}</StyledForm>
  )
}

export function EmailForm(props) {
  return (
    <P>
      <Label for="email">이메일</Label>
      <SignupInput name="email" type="email" onChange={props.onChange}/>
    </P>
  )
}

export function PasswordForm(props) {
  return (
    <P>
      <Label for="password">비밀번호</Label>
      <SignupInput name="password" type="password" onChange={props.onChange}/>
    </P>
  )
}

export function ConfirmPasswordForm(props) {
  return (
    <P>
      <Label for="confirm_password">비밀번호 확인</Label>
      <SignupInput name="confirm_password" type="password" onChange={props.onChange}/>
    </P>
  )
}

export function SignupSubmitForm() {
  return (
    <P>
      <SubmitInput type="submit" value="계정생성"/>
    </P>
  )
}

export function TextForm(props) {
  return (
    <P>
      <Label for="text">{props.label}</Label>
      <SignupInput name="text" type="text" onChange={props.onChange}/>
    </P>
  )
}

