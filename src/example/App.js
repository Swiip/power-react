import { html, component, withMarkup } from "../lib";

import Button from "./Button";

const App = component(withMarkup(() => html`<${Button}></${Button}>`));

export default App;
