import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import {createBrowserHistory} from "history"
import "./Style/index.scss"
import "./Style/colors.scss"
import "./Style/style-button.scss"
import "./Style/typography.scss"
import "./Style/style-text.scss"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory()
root.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
