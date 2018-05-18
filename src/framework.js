import React from "react";
import styled from "styled-components";
import { compose } from "recompose";

export { css } from "styled-components";
export { withState, withHandlers } from "recompose";

export const withMarkup = Component => () => {
  if (typeof Component === "function") {
    return Component;
  } else {
    return ({ className, children }) => (
      <Component className={className}>{children}</Component>
    );
  }
};

export const withStyle = css => BaseComponent =>
  styled(BaseComponent)`
    ${css};
  `;

export const component = (...args) => compose(...args)();
