import React from "react";

import {
  css,
  component,
  withState,
  withHandlers,
  withMarkup,
  withStyle
} from "./framework";

const Green = component(
  withStyle(() => css`
    color: green;
  `),
  withMarkup("span")
);

const Button = component(
  withState("name", "setName", "World"),
  withHandlers({
    toggle: ({ name, setName }) => () =>
      setName(name === "World" ? "Swiip" : "World")
  }),
  withStyle(
    ({ name }) => css`
      color: ${name === "World" ? "black" : "red"};
    `
  ),
  withMarkup(({ name, toggle, className }) => (
    <button className={className} name={name} onClick={toggle}>
      Hello <Green>{name}</Green>!
    </button>
  ))
);

export default Button;