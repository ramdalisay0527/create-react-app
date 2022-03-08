import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {/* wrap around router for modal implementations */}
    <Router>
      <App />
    </Router> 
  </MuiThemeProvider>,
  document.getElementById("root")
);
