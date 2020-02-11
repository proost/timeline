import React from 'react';
import styled from 'styled-components';
import { P } from './InlineTag';
import { SignupInput, SubmitInput } from './Inputs';

export const StyledForm = styled.form`
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
      <SignupInput name="email" type="email" onChange={props.onChange} placeholder="이메일을 입력해주세요"/>
    </P>
  )
}

export function PasswordForm(props) {
  return (
    <P>
      <SignupInput name="password" type="password" onChange={props.onChange} placeholder="비밀번호를 입력해주세요"/>
    </P>
  )
}

export function ConfirmPasswordForm(props) {
  return (
    <P>
      <SignupInput name="confirm_password" type="password" onChange={props.onChange} placeholder="비밀번호 확인"/>
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
      <SignupInput name="text" type="text" onChange={props.onChange} placeholder="이름을 입력하세요"/>
    </P>
  )
}

