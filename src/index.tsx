import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter as Router } from 'react-router-dom';
import Fonts from './styles/global/fonts';
import Colors from './styles/global/colors';
import StyleSheet from './styles/global/styles';
import App from './core/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Fonts />
      <Colors />
      <StyleSheet />
      <App />
    </Router>
  </React.StrictMode>
);


serviceWorkerRegistration.unregister();