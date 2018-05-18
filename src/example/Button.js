import {
  html,
  css,
  component,
  withState,
  withHandlers,
  withMarkup,
  withStyle
} from "../lib";

const Green = component(
  withStyle(css`
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
  withMarkup(
    ({ name, toggle, className }) => html`
      <button className=${className} onClick=${toggle}>
        Hello <${Green}>${name}</${Green}>!
      </button>
    `
  )
);

export default Button;
