# Power React

Wrapper around React + Recompose + Styled Components + HyperX in order to get a homogeneous API.

Ohh... Its 30 LoC :)

# Example

```javascript
import {
  html,
  css,
  component,
  withState,
  withHandlers,
  withMarkup,
  withStyle
} from "../lib";

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
```
