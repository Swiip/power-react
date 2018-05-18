import { createElement } from "react";
import styled from "styled-components";
import { compose } from "recompose";
import hyperx from "hyperx";

export { render } from "react-dom";
export * from "styled-components";
export * from "recompose";

export const html = hyperx((Component, props, children) => {
  return createElement(Component, props, ...(children || {}));
});

export const withMarkup = Component => () => {
  if (typeof Component === "function") {
    return Component;
  } else {
    return ({ children, ...props }) => html`
      <${Component} ${props}>${children}</${Component}>
    `;
  }
};

export const withStyle = css => Component =>
  styled(Component)`
    ${css};
  `;

export const component = (...args) => compose(...args)();
