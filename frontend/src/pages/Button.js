import React from "react";
import styled, { css } from "styled-components";

const Button = styled.a`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: black;
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: red;
      color: green;
      border-color: green;
    `};
`;

export default Button;
