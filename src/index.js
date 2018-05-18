import { render, html } from "./lib";

import App from "./example/App";

render(html`<${App}></${App}>`, document.getElementById("root"));
